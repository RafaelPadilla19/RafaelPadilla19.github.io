/**
 * Post-build: genera un index.html fisico por ruta con sus meta tags ya resueltos,
 * y regenera el sitemap. Los crawlers de LinkedIn, WhatsApp y X no ejecutan
 * JavaScript, asi que sin esto solo verian los meta genericos de la home.
 * La app Angular arranca igual en cada uno de esos HTML.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist', 'rafael', 'browser');
const ORIGIN = 'https://rafaelpadilla19.github.io';
const DEFAULT_IMAGE = 'img/og-cover.png';

if (!existsSync(join(dist, 'index.html'))) {
  console.error('No hay build en dist/rafael/browser. Corre "ng build" primero.');
  process.exit(1);
}

const read = (p) => readFileSync(join(root, p), 'utf8');

/** Extrae los campos de cada entrada del array de datos de un servicio. */
function parseEntries(source, fields) {
  const entries = [];
  const blocks = source.split(/\n    id: /).slice(1);
  for (const block of blocks) {
    const entry = { id: block.match(/^(\d+)/)?.[1] };
    for (const [key, prop] of Object.entries(fields)) {
      const m = block.match(new RegExp(`\\n    ${prop}: '((?:[^'\\\\]|\\\\.)*)'`));
      if (m) entry[key] = m[1].replace(/\\'/g, "'");
    }
    if (entry.id && entry.title) entries.push(entry);
  }
  return entries;
}

const posts = parseEntries(read('src/app/core/services/blog.service.ts'), {
  title: 'title', description: 'excerpt', image: 'imageUrl', date: 'date',
});
const projects = parseEntries(read('src/app/core/services/portfolio.service.ts'), {
  title: 'title', description: 'description', image: 'imageUrl',
});

const routes = [
  {
    path: '',
    title: 'Rafael Padilla | Senior Software Engineer',
    description: 'Software Engineer con +5 años construyendo sistemas backend escalables, APIs y microservicios para productos fintech y empresariales.',
  },
  {
    path: 'portfolio',
    title: 'Portafolio | Rafael Padilla',
    description: 'Proyectos de software: ERP/POS Multi-Tenant con facturación electrónica, red social universitaria, herramientas propias en NPM y NuGet.',
  },
  {
    path: 'blog',
    title: 'Blog | Rafael Padilla',
    description: 'Artículos sobre arquitectura de software, IA aplicada al desarrollo, .NET y Angular, con ejemplos de sistemas reales.',
  },
  ...posts.map((p) => ({
    path: `blog/${p.id}`,
    title: `${p.title} | Rafael Padilla`,
    description: p.description,
    image: p.image,
    type: 'article',
    date: p.date,
  })),
  ...projects.map((p) => ({
    path: `portfolio/${p.id}`,
    title: `${p.title} | Rafael Padilla`,
    description: p.description,
    image: p.image,
  })),
];

const escape = (s = '') =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const template = readFileSync(join(dist, 'index.html'), 'utf8');

for (const route of routes) {
  const url = `${ORIGIN}/${route.path}`;
  // Ni LinkedIn ni WhatsApp renderizan SVG como imagen de preview.
  const clean = route.image?.split('?')[0];
  const raw = clean && !clean.endsWith('.svg') ? clean : DEFAULT_IMAGE;
  const image = `${ORIGIN}/${raw}`;

  let html = template
    .replace(/<title>.*?<\/title>/s, `<title>${escape(route.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${escape(route.description)}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${escape(route.title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${escape(route.description)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:image" content=")[^"]*(")/g, `$1${image}$2`)
    .replace(/(<meta property="og:type" content=")[^"]*(")/, `$1${route.type ?? 'website'}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${escape(route.title)}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${escape(route.description)}$2`)
    .replace(/(<meta name="twitter:image" content=")[^"]*(")/, `$1${image}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);

  if (route.type === 'article' && route.date) {
    html = html.replace(
      '</head>',
      `  <meta property="article:published_time" content="${route.date}">\n  <meta property="article:author" content="Rafael Padilla">\n</head>`);
  }

  if (route.path) {
    const dir = join(dist, route.path);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html);
  } else {
    writeFileSync(join(dist, 'index.html'), html);
  }
}

const today = new Date().toISOString().slice(0, 10);
const urls = routes
  .map((r) => {
    const priority = r.path === '' ? '1.0' : r.path.includes('/') ? '0.7' : '0.9';
    return `  <url>\n    <loc>${ORIGIN}/${r.path}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
  })
  .join('\n');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
writeFileSync(join(dist, 'sitemap.xml'), sitemap);
writeFileSync(join(root, 'public', 'sitemap.xml'), sitemap);

console.log(`SEO: ${routes.length} rutas con meta propios (${posts.length} articulos, ${projects.length} proyectos) + sitemap`);
