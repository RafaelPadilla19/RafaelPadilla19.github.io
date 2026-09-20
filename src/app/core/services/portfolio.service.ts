import { Injectable, computed } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { delay, of } from 'rxjs';

export type ProjectType = 'video' | 'mobile-app' | 'web-app' | 'desktop-app' | 'cover';

export interface InstallationMethod {
  label: string;
  command: string;
  style: 'terminal' | 'code';
}

export interface CustomSection {
  title: string;
  intro?: string;
  code?: string;
  result?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  details?: string;
  codeSample?: string;
  quickTestCommand?: string;
  howItWorksIntro?: string;
  howItWorksSteps?: string[];
  features?: string[];
  requirements?: string[];
  installationMethods?: InstallationMethod[];
  customSections?: CustomSection[];
  imageUrl: string;
  videoUrl?: string;
  screenshots?: string[];
  technologies: string[];
  githubUrl?: string;
  nugetUrl?: string;
  npmUrl?: string;
  playStoreUrl?: string;
  category: 'profesional' | 'universitario';
  type: ProjectType;
}

const MOCK_PROJECTS: Project[] = [
  {
    id: 11,
    title: 'Sistema ERP & POS Multi-Tenant con Facturación Electrónica (MH)',
    description: 'Sistema empresarial SaaS (Multi-Tenant) con POS, compras, inventario y facturación electrónica nativa conectada al MH.',
    details: `Un robusto sistema de Planificación de Recursos Empresariales (ERP) y Punto de Venta (POS) diseñado bajo una arquitectura Multi-Tenant, construido con tecnologías de vanguardia. El sistema gestiona todo el ciclo comercial de una empresa: desde compras, inventario y almacenes, hasta facturación electrónica conectada directamente con el Ministerio de Hacienda (MH), envío automatizado de correos y generación de representaciones gráficas (Tickets/PDF).

Destaca por contar con su propio firmador electrónico integrado nativamente en el núcleo del Backend .NET (Firmador Multi-Tenant), asegurando inmediatez, bajo consumo de recursos y la correcta transmisión y avalamiento criptográfico de los Documentos Tributarios Electrónicos (DTE) sin depender de servicios de terceros.

🚀 Tecnologías y Arquitectura (Tech Stack)
• Frontend: Angular 21 (Modern Stack) con Standalone Components, Signals y la nueva API rxResource. UI con PrimeNG 21 (Aura) y Tailwind CSS v4.
• Backend: .NET 9.0 (C#) con Clean Architecture (Domain, Application, Infrastructure, Api).
• Base de Datos: PostgreSQL con EF Core (Code-First), MasterContext y POSContext separados.
• Seguridad: Autenticación JWTBearer y Autorización granular basada en roles y permisos modulares. Auditoría integral (Soft-Deletes, Audit Fields).

🏢 Características Principales y Módulos
1. ⚙️ Núcleo SaaS Multi-Tenant: Gestión jerárquica de Negocios, Sucursales y Puntos de Venta. Provisión dinámica de Tenants.
2. 📦 Inventario y Almacenes: Control de existencias (Stock), Kárdex centralizado y multi-almacén.
3. 🛒 Compras y CxP: Ciclo completo de ingreso de mercadería y actualización de costos promedio.
4. 💵 Ventas y Facturación Electrónica: Punto de Venta (POS) optimizado. Gestión fiscal de DTEs, resoluciones y correlativos.

⚡ Integración Externa y Firmador Propio
🔐 Firmador Nativo: Estructuración y firma criptográfica (.p12) de DTEs en milisegundos directamente en el núcleo de .NET, eliminando dependencias externas.
🏛️ Conexión MH: Pipeline legal completo (Auth oAuth2, Emisión de datos y Recepción de sellos) cumpliendo los Schemas JSON oficiales.
📧 Notificaciones: Envío asíncrono de correos (SMTP) con XML/PDF y generación de representaciones gráficas (Tickets).`,
    imageUrl: 'img/portfolio/pos-fe/POS.webp',
    videoUrl: 'https://www.youtube.com/embed/HyVkwORFh1k?si=uWccBOJ2dCaYLNEv',
    technologies: ['Angular 21', 'Signals', 'PrimeNG', 'Tailwind CSS v4', '.NET 9', 'C#', 'PostgreSQL', 'Entity Framework Core'],
    category: 'profesional',
    type: 'web-app'
  },
  {
    id: 10,
    title: 'VoxU — Red Social Universitaria',
    description: 'App móvil anónima para estudiantes universitarios de El Salvador.',
    details: 'VoxU es una aplicación móvil multiplataforma diseñada para conectar a estudiantes universitarios de El Salvador de forma segura y anónima. Permite compartir experiencias, evaluar profesores y acceder a recursos académicos, todo dentro de una comunidad verificada por correo institucional (.edu.sv).\n\nCaracterísticas principales:\n• Auth segura con verificación OTP por correo institucional\n• Feed anónimo con sistema de alertas tipo "Semáforo" (Alta/Media/Baja)\n• Radar de Profesores con calificaciones 1-5 estrellas\n• Bóveda de Recursos para compartir documentos académicos\n• Perfil anónimo con avatar aleatorio vía DiceBear API\n• Catálogo de 50+ universidades y 50+ carreras de El Salvador',
    imageUrl: 'img/portfolio/voxu/voxu-header.webp',
    screenshots: [
      'img/portfolio/voxu/image1.webp',
      'img/portfolio/voxu/image2.webp',
      'img/portfolio/voxu/image3.webp',
      'img/portfolio/voxu/image4.webp',
      'img/portfolio/voxu/image5.webp',
      'img/portfolio/voxu/image6.webp'
    ],
    technologies: ['Flutter', 'Dart', 'Supabase', 'PostgreSQL', 'GoRouter', 'Firebase'],
    category: 'profesional',
    type: 'mobile-app',
    playStoreUrl: 'https://play.google.com/store'
  },
  {
    id: 1,
    title: 'Blog Tecnologías Microsoft',
    description: 'Blog basado en el "Blog de tecnologías de Microsoft" con registro de usuarios, dashboard administrativo y gestión completa de contenidos.',
    details: 'Blog basado en el "Blog de tecnologías de Microsoft" este cuenta con muchas funcionalidades entre las cuales tenemos, registrar usuarios, publicar post, comentar post, ver todos los post y administrar el blog atraves de un dashboard donde podra agregar modificar eliminar y agregar publicaciones categorias entre otras cosas.\n\nTecnologías y Entorno:\n• Lenguaje: Java con JDBC\n• Arquitectura: MVC (Modelo-Vista-Controlador)\n• Base de Datos: MySQL\n• Tecnologías Web: JSP (JavaServer Pages)\n• Entorno: Desarrollo puro Java',
    imageUrl: 'img/portfolio/blogMicrosoft.png',
    videoUrl: 'https://www.youtube.com/embed/U5rAbNq9R7M',
    technologies: ['Java', 'JDBC', 'MVC', 'MySQL', 'JSP'],
    category: 'universitario',
    type: 'web-app'
  },
  {
    id: 2,
    title: 'Millonario Challenge: C# Edition',
    description: 'Simulador interactivo basado en el icónico concurso de trivia, con lógica de progresión de premios y sistema de comodines dinámicos.',
    details: 'Este proyecto recrea la experiencia completa del clásico juego "¿Quién quiere ser millonario?". Desarrollado íntegramente en C# utilizando el ecosistema .NET Framework, el juego pone a prueba la toma de decisiones y el conocimiento del usuario bajo presión.\n\nMecánicas de Juego:\n• Lógica de Progresión: Algoritmo de dificultad incremental para la selección de preguntas.\n• Sistema de Comodines: Implementación de tres tipos de ayudas estratégicas que alteran el flujo del juego en tiempo real.\n• Gestión de Riesgos: Los jugadores deben decidir entre asegurar su premio base o arriesgarlo todo por el gran premio.\n• Arquitectura: Aplicación robusta de escritorio (Windows Forms) con una clara separación entre la lógica del motor de preguntas y la interfaz de usuario.',
    imageUrl: 'img/portfolio/QuienQuiere.webp',
    videoUrl: 'https://www.youtube.com/embed/HnC7OEkf1DA',
    technologies: ['C#', '.NET Framework', 'Windows Forms'],
    category: 'universitario',
    type: 'desktop-app'
  },
  {
    id: 3,
    title: 'Sistema Auto-hotel',
    description: 'Software administrativo para auto-hoteles. Gestiona compras, ventas, arqueos, habitaciones y promociones.',
    imageUrl: 'img/portfolio/DIAMONProyecto.png',
    videoUrl: 'https://www.youtube.com/embed/xEfrTv3KqzY',
    technologies: ['C#', 'Entity Framework', 'SQL Server', 'Windows Forms'],
    category: 'universitario',
    type: 'desktop-app'
  },
  {
    id: 4,
    title: 'Monitor Estadístico COVID-19',
    description: 'Sistema de visualización y análisis de datos epidemiológicos con dashboards interactivos y simulación de tendencias dinámicas.',
    details: 'Este proyecto se enfoca en la representación visual de grandes volúmenes de datos estadísticos sobre la pandemia COVID-19. Utiliza un motor de simulación para procesar cifras diarias y mensuales, transformándolas en dashboards interactivos que facilitan la comprensión de tendencias y picos epidemiológicos.\n\nAspectos de Ingeniería:\n• Visualización Avanzada: Integración profunda de Chart.js para gráficas de líneas, barras y áreas progresivas.\n• Backend Robusto: Procesamiento de datos en Java, garantizando integridad y rapidez en la simulación.\n• Persistencia: Almacenamiento optimizado mediante Java DB (Derby) para el manejo histórico de cifras.\n• UX/UI Progresiva: Diseño responsivo con Bootstrap y CSS3 para una experiencia fluida tanto en escritorio como en móviles.',
    imageUrl: 'img/portfolio/grafica.png',
    videoUrl: 'https://www.youtube.com/embed/QkUUjFs8rjY',
    technologies: ['Java', 'Chart.js', 'Java DB', 'Bootstrap', 'HTML5', 'CSS3'],
    category: 'universitario',
    type: 'web-app'
  },
  {
    id: 5,
    title: 'E-commerce En Línea: Arquitectura Distribuida',
    description: 'Ecosistema de comercio electrónico basado en servicios RESTful y persistencia avanzada con Hibernate ORM.',
    details: 'Este sistema representa una solución integral de e-commerce diseñada bajo una arquitectura desacoplada de cliente-servidor. El núcleo del proyecto es una API RESTful desarrollada en Java que utiliza Hibernate como motor de persistencia, facilitando la manipulación de datos mediante HQL (Hibernate Query Language).\n\nIngeniería y Middleware:\n• API RESTful: Despliegue de servicios escalables mediante una librería interna personalizada que encapsula operaciones CRUD robustas.\n• Persistencia con Hibernate: Mapeo objeto-relacional (ORM) avanzado para una interacción eficiente con la base de datos MySQL.\n• Arquitectura Desacoplada: El consumo se realiza mediante un cliente independiente (JSP) que interactúa con la capa de negocio a través de Web Services Clients, asegurando una separación clara de responsabilidades.\n• Interfaz Dinámica: Implementación visual con Bootstrap y CSS3 para una navegación intuitiva y adaptable.',
    imageUrl: 'img/portfolio/ecommer.webp',
    videoUrl: 'https://www.youtube.com/embed/NxJVowGU8Ys',
    technologies: ['Java', 'Hibernate (HQL)', 'REST Web Services', 'MySQL', 'JSP', 'Bootstrap'],
    category: 'universitario',
    type: 'web-app'
  },
  {
    id: 12,
    title: 'RMapper - Micro mapeador de objetos para .NET',
    description: 'Librería NuGet ligera para mapear DTOs y entidades por nombre/tipo, con soporte de exclusión mediante [IgnoreMap].',
    details: `Micro mapeador de objetos para .NET enfocado en simplicidad y bajo peso. Permite mapear DTOs a entidades por nombre y tipo, y excluye propiedades con [IgnoreMap]. Ideal para capas de aplicación donde quieres evitar código repetitivo de transformación.`,
    codeSample: `using RMapper.Core.Attributes;
using RMapper.Core.Interfaces;
using RMapper.Reflection;

public class UserDto
{
    public string Nombre { get; set; }

    [IgnoreMap] // No se mapeara
    public int Edad { get; set; }
}

public class Usuario
{
    public string Nombre { get; set; }
    public int Edad { get; set; }
}

class Program
{
    static void Main()
    {
        var dto = new UserDto { Nombre = "Carlos", Edad = 30 };

        IMapper mapper = new SimpleMapper();
        var usuario = mapper.Map<UserDto, Usuario>(dto);

        Console.WriteLine(usuario.Nombre); // Carlos
        Console.WriteLine(usuario.Edad);   // 0 (ignorado por [IgnoreMap])
    }
}`,
    quickTestCommand: `dotnet new console -n RMapper.Demo
cd RMapper.Demo
dotnet add package RMapper
// Abre Program.cs y pega el ejemplo de "Uso basico"
dotnet run`,
    howItWorksIntro: 'RMapper usa Reflection para:',
    howItWorksSteps: [
      'Leer las propiedades publicas de origen y destino.',
      'Comparar por nombre y tipo.',
      'Ignorar las que tengan [IgnoreMap].',
      'Copiar valores en el objeto destino.'
    ],
    features: [
      'Mapeo automatico por nombre y tipo de propiedad.',
      'Ignora propiedades decoradas con [IgnoreMap].',
      'API minima: IMapper y SimpleMapper.',
      'Cero dependencias externas.',
      'Compilado para .NET Standard 2.0 y .NET 8.0.'
    ],
    requirements: [
      'Cualquier proyecto en .NET Framework 4.6.1+, .NET Core 2.0+, .NET 5/6/7/8+.',
      'No requiere configuracion adicional.'
    ],
    installationMethods: [
      { label: '.NET CLI', command: 'dotnet add package RMapper', style: 'terminal' },
      { label: 'Package Manager (Visual Studio)', command: 'Install-Package RMapper', style: 'terminal' },
      { label: 'PackageReference', command: '<ItemGroup>\n  <PackageReference Include="RMapper" Version="1.*" />\n</ItemGroup>', style: 'code' },
    ],
    customSections: [
      {
        title: '¿Qué hace [IgnoreMap]?',
        intro: 'Cualquier propiedad marcada con IgnoreMap será omitida durante el mapeo.',
        code: `public class ProductoDto\n{\n    public string Nombre { get; set; }\n\n    [IgnoreMap]\n    public decimal Precio { get; set; }\n}`,
        result: 'En el objeto destino, Precio queda con su valor por defecto (p. ej. 0m).',
      }
    ],
    imageUrl: 'img/portfolio/rmapper/rmapper-cover.svg',
    technologies: ['C#', '.NET 8', '.NET Standard 2.0', 'Reflection', 'NuGet'],
    nugetUrl: 'https://www.nuget.org/packages/RMapper',
    category: 'profesional',
    type: 'web-app'
  },
  {
    id: 13,
    title: 'Prix-R9 — CLI de Pruebas de Carga HTTP/REST',
    description: 'Herramienta CLI para pruebas de carga con ramp-up, multipart, escenarios encadenados por steps y extracción de valores entre requests.',
    details: `Prix-R9 es una herramienta de línea de comandos diseñada para ejecutar pruebas de carga y estrés sobre APIs HTTP/REST. Permite definir escenarios simples de un solo endpoint o escenarios complejos encadenados mediante steps, donde cada paso puede extraer valores del response JSON y reutilizarlos en los siguientes pasos.

Incluye un importador de cURL (prix-r9-curl) que convierte requests exportados desde el navegador, Postman o Swagger a configuraciones JSON listas para usar como bloques base de escenarios multi-step.

Al finalizar cada ejecución, genera un reporte.txt con métricas detalladas: iteraciones totales, exitosas y fallidas, throughput real (iter/s y req/s), latencia por iteración, latencia agregada por request y métricas por step incluyendo códigos de estado HTTP.`,
    codeSample: `{
  "name": "Carga encadenada",
  "startRate": 2,
  "targetRate": 5,
  "rampUpTime": 5,
  "duration": 10,
  "steps": [
    {
      "name": "uploadProcess",
      "url": "https://api.example.test/blob/upload",
      "method": "post",
      "headers": {
        "Authorization": "Bearer {{uuid}}"
      },
      "file": "./Plantilla.csv",
      "filekey": "File",
      "body": { "TypeFile": "1" },
      "extract": {
        "processId": "$.uploadFileProcessId"
      }
    },
    {
      "name": "executeProcess",
      "url": "https://api.example.test/approvals/Execute",
      "method": "post",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": {
        "UploadFileProcessId": "{{processId}}",
        "AprovalStatus": 1
      }
    }
  ]
}`,
    quickTestCommand: `npm install -g prix-r9
prix-r9 --config mi-config.json
prix-r9 --prompt
prix-r9-curl -i mi-curl.txt -o endpoint.json`,
    howItWorksIntro: 'Flujo de ejecución por iteración:',
    howItWorksSteps: [
      'Cada iteración crea su propio contexto aislado de variables.',
      'Se ejecutan los steps en orden secuencial dentro de la iteración.',
      'extract guarda valores del response JSON para los steps siguientes.',
      'Si un step falla (HTTP, red o extracción), la iteración termina y los steps restantes quedan omitidos por cascade.',
      'Al finalizar, genera reporte.txt con métricas generales y por step.'
    ],
    features: [
      'Pruebas de carga con rate fijo o ramp-up progresivo (startRate → targetRate).',
      'Escenarios encadenados con steps y extracción de valores entre requests.',
      'Soporte multipart con archivo (file + filekey) sin configuración manual de boundary.',
      'Variables dinámicas: {{uuid}}, {{timestamp}}, {{random_number}}.',
      'Importador prix-r9-curl para convertir cURL a configuración JSON.',
      'Soporte HTTPS local con certificados autofirmados (insecureHttps).',
      'Reporte detallado con métricas por iteración y por step.',
      'Modo interactivo con --prompt para generar configuraciones.'
    ],
    installationMethods: [
      { label: 'npm (global)', command: 'npm install -g prix-r9', style: 'terminal' },
    ],
    customSections: [
      {
        title: 'Extracción de valores entre steps',
        intro: 'extract acepta un mapa nombreVariable → ruta JSONPath para reutilizar valores en steps posteriores.',
        code: `"extract": {\n  "uploadFileProcessId": "$.uploadFileProcessId",\n  "primerDetalle": "$.data[0].id"\n}`,
        result: 'Rutas soportadas: $.propiedad, $.objeto.hijo, $.items[0].id, $[\'propiedad-rara\']. Las rutas son case-sensitive.',
      },
      {
        title: 'Variables dinámicas',
        intro: 'Se pueden usar en url, headers, body, file y filekey.',
        code: `"headers": {\n  "Authorization": "Bearer {{uuid}}",\n  "X-Request-ID": "{{uuid}}"\n},\n"body": {\n  "correo": "prueba_{{timestamp}}@example.test"\n}`,
        result: 'Disponibles: {{uuid}}, {{timestamp}} y {{random_number}}. Se generan por cada iteración.',
      }
    ],
    imageUrl: 'img/portfolio/prix-r9/prix-r9-cover.svg',
    technologies: ['Node.js', 'JavaScript', 'CLI', 'Axios', 'Commander.js'],
    npmUrl: 'https://www.npmjs.com/package/prix-r9',
    category: 'profesional',
    type: 'web-app'
  },

];

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  public projectsResource = rxResource({
    params: () => ({}),
    stream: () => of(MOCK_PROJECTS).pipe(delay(300))
  });

  public totalProjects = computed(() => this.projectsResource.value()?.length ?? 0);

  public professionalProjects = computed(() =>
    this.projectsResource.value()?.filter((p: Project) => p.category === 'profesional') ?? []
  );

  public universityProjects = computed(() =>
    this.projectsResource.value()?.filter((p: Project) => p.category === 'universitario') ?? []
  );

  public getProjectById(id: number): Project | undefined {
    return this.projectsResource.value()?.find((p: Project) => p.id === id);
  }
}


