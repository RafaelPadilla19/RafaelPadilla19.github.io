// Diagramas del articulo, portados tal cual desde el original.
export interface ArticleFigure { svg: string; caption: string; }

export const NORMATIVA_FIGURES: ArticleFigure[] = [
  {
    caption: `Arriba, el flujo habitual. Abajo, las etapas que añade Normativa y la tecnología de cada una.`,
    svg: `<svg class="dg" viewBox="0 0 820 400" role="img" aria-label="Comparación entre un RAG básico y la arquitectura de Normativa">
<defs>
<marker id="b1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8A99A6"/></marker>
<marker id="b2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#0F7C77"/></marker>
</defs>
<text x="20" y="28" class="zone">RAG básico</text>
<g>
<rect x="20" y="44" width="120" height="54" rx="12" class="muted"/><text x="80" y="76" text-anchor="middle" class="t" style="fill:#5B6B7A">PDF</text>
<rect x="182" y="44" width="120" height="54" rx="12" class="muted"/><text x="242" y="76" text-anchor="middle" class="t" style="fill:#5B6B7A">Fragmentos</text>
<rect x="344" y="44" width="120" height="54" rx="12" class="muted"/><text x="404" y="76" text-anchor="middle" class="t" style="fill:#5B6B7A">Base vectorial</text>
<rect x="506" y="44" width="120" height="54" rx="12" class="muted"/><text x="566" y="76" text-anchor="middle" class="t" style="fill:#5B6B7A">LLM</text>
<rect x="668" y="44" width="132" height="54" rx="12" class="muted"/><text x="734" y="76" text-anchor="middle" class="t" style="fill:#5B6B7A">Respuesta</text>
<g class="e" style="stroke:#8A99A6"><line x1="142" y1="71" x2="178" y2="71" marker-end="url(#b1)"/><line x1="304" y1="71" x2="340" y2="71" marker-end="url(#b1)"/><line x1="466" y1="71" x2="502" y2="71" marker-end="url(#b1)"/><line x1="628" y1="71" x2="664" y2="71" marker-end="url(#b1)"/></g>
</g>
<text x="20" y="126" class="lb" style="fill:#A2443A">No sabe si la norma cambió, no verifica citas y nadie mide si responde bien.</text>

<line x1="20" y1="150" x2="800" y2="150" stroke="#E3E8ED"/>
<text x="20" y="182" class="zone" style="fill:#0F7C77">Arquitectura de Normativa</text>

<rect x="20" y="198" width="180" height="72" rx="12" class="box"/><text x="36" y="226" class="t">Fuentes oficiales</text><text x="36" y="248" class="tg">Recolector en Go</text>
<rect x="226" y="198" width="180" height="72" rx="12" class="box"/><text x="242" y="226" class="t">Estructura y vigencia</text><text x="242" y="248" class="tg">Docling + Python</text>
<rect x="432" y="198" width="180" height="72" rx="12" class="box"/><text x="448" y="226" class="t">Búsqueda híbrida</text><text x="448" y="248" class="tg">pgvector + OpenSearch</text>
<rect x="638" y="198" width="162" height="72" rx="12" class="box"/><text x="654" y="226" class="t">Reranking</text><text x="654" y="248" class="tg">Cohere Rerank o bge</text>

<rect x="638" y="306" width="162" height="72" rx="12" class="core"/><text x="654" y="334" class="t core-t">Agente</text><text x="654" y="356" class="tg core-tg">Claude o GPT + tools</text>
<rect x="432" y="306" width="180" height="72" rx="12" class="box"/><text x="448" y="334" class="t">Verificador de citas</text><text x="448" y="356" class="tg">Reglas + PostgreSQL</text>
<rect x="226" y="306" width="180" height="72" rx="12" class="soft"/><text x="242" y="334" class="t">Respuesta con fuentes</text><text x="242" y="356" class="tg">Streaming al usuario</text>
<rect x="20" y="306" width="180" height="72" rx="12" class="warm"/><text x="36" y="334" class="t">Evaluación continua</text><text x="36" y="356" class="tg" style="fill:#8A6210">Examen en cada deploy</text>

<g class="ea">
<line x1="202" y1="234" x2="222" y2="234" marker-end="url(#b2)"/>
<line x1="408" y1="234" x2="428" y2="234" marker-end="url(#b2)"/>
<line x1="614" y1="234" x2="634" y2="234" marker-end="url(#b2)"/>
<line x1="719" y1="272" x2="719" y2="302" marker-end="url(#b2)"/>
<line x1="636" y1="342" x2="616" y2="342" marker-end="url(#b2)"/>
<line x1="430" y1="342" x2="410" y2="342" marker-end="url(#b2)"/>
</g>
<line x1="224" y1="342" x2="204" y2="342" class="ed" marker-end="url(#b1)"/>
<line x1="110" y1="304" x2="110" y2="274" class="ed" marker-end="url(#b1)"/>
<text x="120" y="293" class="lb">mejora cada versión</text>
</svg>`
  },
  {
    caption: `El fine-tuning y el post-training tienen sentido cuando ya existe suficiente volumen de tareas repetidas y presupuesto para investigación propia. Harvey llegó a ese punto después de años operando con RAG; para la mayoría de asistentes de dominio, RAG con verificación cubre el problema sin esa inversión.`,
    svg: `<svg class="dg" viewBox="0 0 820 300" role="img" aria-label="Espectro de intervención sobre un modelo de lenguaje, de usarlo tal cual a entrenar uno propio">
<defs><marker id="sp1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#8A99A6"/></marker></defs>

<rect x="20" y="20" width="180" height="168" rx="14" class="muted"/>
<text x="36" y="48" class="s" style="font-weight:700">Usar</text>
<text x="36" y="72" class="t" style="font-size:15px">LLM generalista</text>
<text x="36" y="96" class="s">Se usa el modelo</text>
<text x="36" y="112" class="s">tal como viene</text>
<text x="36" y="140" class="tg" style="fill:#5B6B7A">ChatGPT, Claude, Gemini</text>
<text x="36" y="160" class="lb">Intervención: ninguna</text>

<rect x="220" y="20" width="180" height="168" rx="14" class="soft"/>
<text x="236" y="48" class="tg" style="font-weight:700">Contextualizar</text>
<text x="236" y="72" class="t" style="font-size:13.5px">RAG con conocimiento</text>
<text x="236" y="96" class="s">Se le da acceso a</text>
<text x="236" y="112" class="s">fuentes propias</text>
<text x="236" y="140" class="tg">Normativa, Westlaw,</text>
<text x="236" y="156" class="tg">Lexis+ AI</text>
<text x="236" y="176" class="lb" style="fill:#0F7C77;font-weight:600">Este artículo</text>

<rect x="420" y="20" width="180" height="168" rx="14" class="warm"/>
<text x="436" y="48" class="s" style="font-weight:700;fill:#8A6210">Adaptar</text>
<text x="436" y="72" class="t" style="font-size:15px">Fine-tuning</text>
<text x="436" y="96" class="s">Se reentrena con</text>
<text x="436" y="112" class="s">ejemplos del dominio</text>
<text x="436" y="140" class="tg" style="fill:#8A6210">LEGAL-BERT</text>
<text x="436" y="160" class="lb">Intervención: pesos del modelo</text>

<rect x="620" y="20" width="180" height="168" rx="14" class="core"/>
<text x="636" y="48" class="s core-s" style="font-weight:700">Entrenar</text>
<text x="636" y="72" class="t core-t" style="font-size:15px">Post-training</text>
<text x="636" y="96" class="s core-s">Modelo propio para</text>
<text x="636" y="112" class="s core-s">tareas complejas</text>
<text x="636" y="140" class="tg core-tg">Harvey Tenet (2026)</text>
<text x="636" y="160" class="s core-s" style="font-size:11px">Kimi K3 post-entrenado</text>

<g class="e" style="stroke:#8A99A6"><line x1="202" y1="104" x2="216" y2="104" marker-end="url(#sp1)"/><line x1="402" y1="104" x2="416" y2="104" marker-end="url(#sp1)"/><line x1="602" y1="104" x2="616" y2="104" marker-end="url(#sp1)"/></g>

<line x1="20" y1="220" x2="800" y2="220" stroke="#C3CED8" stroke-width="1.5"/>
<circle cx="20" cy="220" r="4" fill="#6B7B8A"/><circle cx="800" cy="220" r="4" fill="#6B7B8A"/>
<text x="20" y="244" class="s">Menor costo, menor intervención</text>
<text x="800" y="244" class="s" text-anchor="end">Mayor costo, mayor intervención</text>
<text x="410" y="272" text-anchor="middle" class="s" style="font-style:italic">La diferencia no está solo en qué modelo se usa, sino en cuánto y cómo se interviene sobre él.</text>
</svg>`
  },
  {
    caption: `Nivel 1 del modelo C4. Los sistemas externos, con borde punteado, son dependencias con costo mensual y su propio riesgo de caída.`,
    svg: `<svg class="dg" viewBox="0 0 820 510" role="img" aria-label="Diagrama de contexto de Normativa">
<defs>
<marker id="c1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#6B7B8A"/></marker>
<symbol id="person" viewBox="0 0 24 24"><circle cx="12" cy="7" r="5" fill="#0F7C77"/><path d="M2 23a10 9 0 0 1 20 0z" fill="#0F7C77"/></symbol>
<symbol id="sys" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="7" rx="2" fill="#8FA1B1"/><rect x="2" y="14" width="20" height="7" rx="2" fill="#8FA1B1"/><circle cx="6" cy="6.5" r="1.3" fill="#fff"/><circle cx="6" cy="17.5" r="1.3" fill="#fff"/></symbol>
</defs>

<g class="e">
<line x1="222" y1="92" x2="316" y2="206" marker-end="url(#c1)"/>
<line x1="222" y1="252" x2="316" y2="252" marker-end="url(#c1)"/>
<line x1="222" y1="412" x2="316" y2="298" marker-end="url(#c1)"/>
<line x1="504" y1="206" x2="596" y2="56" marker-end="url(#c1)"/>
<line x1="504" y1="228" x2="596" y2="154" marker-end="url(#c1)"/>
<line x1="504" y1="252" x2="596" y2="252" marker-end="url(#c1)"/>
<line x1="504" y1="276" x2="596" y2="350" marker-end="url(#c1)"/>
<line x1="504" y1="298" x2="596" y2="448" marker-end="url(#c1)"/>
</g>
<g class="lb" text-anchor="middle">
<rect x="236" y="140" width="66" height="18" rx="4" class="lbg"/><text x="269" y="153">Consulta</text>
<rect x="228" y="228" width="82" height="18" rx="4" class="lbg"/><text x="269" y="241">Cura fuentes</text>
<rect x="232" y="346" width="74" height="18" rx="4" class="lbg"/><text x="269" y="359">Administra</text>
<rect x="499" y="122" width="110" height="18" rx="4" class="lbg"/><text x="554" y="135">Descarga normas</text>
<rect x="514" y="182" width="80" height="18" rx="4" class="lbg"/><text x="554" y="195">Genera texto</text>
<rect x="520" y="234" width="68" height="18" rx="4" class="lbg"/><text x="554" y="247">Mensajes</text>
<rect x="518" y="304" width="72" height="18" rx="4" class="lbg"/><text x="554" y="317">Autentica</text>
<rect x="526" y="366" width="56" height="18" rx="4" class="lbg"/><text x="554" y="379">Cobra</text>
</g>

<rect x="20" y="50" width="202" height="84" rx="14" class="box"/><use href="#person" x="34" y="66" width="24" height="24"/>
<text x="68" y="82" class="t">Usuario</text><text x="68" y="102" class="s">Abogado, contador</text><text x="68" y="118" class="s">o ciudadano</text>
<rect x="20" y="210" width="202" height="84" rx="14" class="box"/><use href="#person" x="34" y="226" width="24" height="24"/>
<text x="68" y="242" class="t">Editor legal</text><text x="68" y="262" class="s">Valida fuentes y</text><text x="68" y="278" class="s">revisa respuestas</text>
<rect x="20" y="370" width="202" height="84" rx="14" class="box"/><use href="#person" x="34" y="386" width="24" height="24"/>
<text x="68" y="402" class="t">Empresa cliente</text><text x="68" y="422" class="s">Usuarios, planes</text><text x="68" y="438" class="s">y consumo</text>

<rect x="318" y="176" width="186" height="152" rx="20" class="core"/>
<text x="411" y="232" text-anchor="middle" class="serif core-t" style="font-size:24px">Normativa</text>
<text x="411" y="256" text-anchor="middle" class="s core-s">Asistente legal con IA</text>
<rect x="349" y="276" width="124" height="24" rx="12" fill="#2A3D50"/>
<text x="411" y="292" text-anchor="middle" class="tg core-tg">sistema a construir</text>

<rect x="598" y="20" width="202" height="72" rx="14" class="ext"/><use href="#sys" x="612" y="34" width="22" height="22"/>
<text x="644" y="48" class="t">Fuentes oficiales</text><text x="644" y="68" class="s">Diario Oficial y</text><text x="644" y="83" class="s">Asamblea Legislativa</text>
<rect x="598" y="118" width="202" height="72" rx="14" class="ext"/><use href="#sys" x="612" y="132" width="22" height="22"/>
<text x="644" y="146" class="t">Modelos de lenguaje</text><text x="644" y="166" class="s">API de Anthropic</text><text x="644" y="181" class="s">u OpenAI</text>
<rect x="598" y="216" width="202" height="72" rx="14" class="ext"/><use href="#sys" x="612" y="230" width="22" height="22"/>
<text x="644" y="244" class="t">WhatsApp Business</text><text x="644" y="264" class="s">Cloud API de Meta</text>
<rect x="598" y="314" width="202" height="72" rx="14" class="ext"/><use href="#sys" x="612" y="328" width="22" height="22"/>
<text x="644" y="342" class="t">Identidad</text><text x="644" y="362" class="s">Microsoft Entra ID</text><text x="644" y="377" class="s">o Auth0</text>
<rect x="598" y="412" width="202" height="72" rx="14" class="ext"/><use href="#sys" x="612" y="426" width="22" height="22"/>
<text x="644" y="440" class="t">Pagos</text><text x="644" y="460" class="s">Suscripciones</text><text x="644" y="475" class="s">por plan</text>
</svg>`
  },
  {
    caption: `Nivel 2 del modelo C4. En verde, el camino que recorre una consulta.`,
    svg: `<svg class="dg" viewBox="0 0 860 580" role="img" aria-label="Diagrama de contenedores de Normativa con tecnologías">
<defs>
<marker id="d1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#6B7B8A"/></marker>
<marker id="d2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#0F7C77"/></marker>
</defs>
<rect x="160" y="92" width="520" height="476" rx="18" class="bound"/>
<text x="178" y="114" class="zone">Plataforma Normativa</text>

<g class="e">
<path d="M330 40 H80 V120" marker-end="url(#d1)"/>
<line x1="420" y1="70" x2="420" y2="120" marker-end="url(#d1)"/>
<line x1="140" y1="152" x2="176" y2="152" marker-end="url(#d1)"/>
<path d="M255 184 V202 H580 V184"/>
<line x1="420" y1="184" x2="420" y2="202"/>
<line x1="300" y1="202" x2="300" y2="216" marker-end="url(#d1)"/>
<line x1="140" y1="252" x2="176" y2="252" marker-end="url(#d1)"/>
<line x1="240" y1="284" x2="240" y2="316" marker-end="url(#d1)"/>
<line x1="360" y1="284" x2="380" y2="316" marker-end="url(#d1)"/>
<line x1="140" y1="442" x2="176" y2="442" marker-end="url(#d1)"/>
<line x1="330" y1="442" x2="341" y2="442" marker-end="url(#d1)"/>
<line x1="495" y1="442" x2="506" y2="442" marker-end="url(#d1)"/>
<line x1="255" y1="474" x2="255" y2="496" marker-end="url(#d1)"/>
<path d="M580 474 V520 H334" marker-end="url(#d1)"/>
<line x1="545" y1="410" x2="455" y2="388" marker-end="url(#d1)"/>
<line x1="600" y1="410" x2="590" y2="388" marker-end="url(#d1)"/>
<path d="M650 426 H676 V360 H696" marker-end="url(#d1)"/>
</g>
<g class="ea">
<line x1="402" y1="252" x2="426" y2="252" marker-end="url(#d2)"/>
<line x1="470" y1="284" x2="445" y2="316" marker-end="url(#d2)"/>
<line x1="600" y1="284" x2="590" y2="316" marker-end="url(#d2)"/>
<line x1="652" y1="244" x2="696" y2="244" marker-end="url(#d2)"/>
<path d="M652 268 H672 V340 H696" marker-end="url(#d2)"/>
</g>
<line x1="682" y1="468" x2="698" y2="468" class="ed" marker-end="url(#d1)"/>

<rect x="330" y="10" width="180" height="60" rx="14" class="box"/>
<text x="420" y="36" text-anchor="middle" class="t">Usuarios</text><text x="420" y="54" text-anchor="middle" class="s">web y WhatsApp</text>

<rect x="10" y="120" width="130" height="64" rx="12" class="ext"/><text x="24" y="146" class="t">WhatsApp</text><text x="24" y="166" class="tg">Cloud API</text>
<rect x="10" y="220" width="130" height="64" rx="12" class="ext"/><text x="24" y="246" class="t">Identidad</text><text x="24" y="266" class="tg">Entra ID / Auth0</text>
<rect x="10" y="410" width="130" height="64" rx="12" class="ext"/><text x="24" y="436" class="t">Fuentes</text><text x="24" y="456" class="tg">sitios oficiales</text>

<rect x="176" y="120" width="154" height="64" rx="12" class="box"/><text x="190" y="146" class="t">Canal WhatsApp</text><text x="190" y="166" class="tg">Webhook en .NET</text>
<rect x="345" y="120" width="150" height="64" rx="12" class="box"/><text x="359" y="146" class="t">Web app</text><text x="359" y="166" class="tg">Angular</text>
<rect x="510" y="120" width="150" height="64" rx="12" class="box"/><text x="524" y="146" class="t">Panel editorial</text><text x="524" y="166" class="tg">Angular</text>

<rect x="176" y="220" width="226" height="64" rx="12" class="box"/><text x="190" y="246" class="t">API principal</text><text x="190" y="266" class="tg">ASP.NET Core</text>
<rect x="428" y="220" width="224" height="64" rx="12" class="core"/><text x="442" y="246" class="t core-t">Servicio del agente</text><text x="442" y="266" class="tg core-tg">Python + FastAPI</text>

<rect x="176" y="318" width="124" height="68" rx="12" class="box"/><text x="190" y="346" class="t">Caché</text><text x="190" y="366" class="tg">Redis</text>
<rect x="315" y="318" width="190" height="68" rx="12" class="box"/><text x="329" y="346" class="t">Base de datos</text><text x="329" y="366" class="tg">PostgreSQL + pgvector</text>
<rect x="520" y="318" width="140" height="68" rx="12" class="box"/><text x="534" y="346" class="t">Búsqueda léxica</text><text x="534" y="366" class="tg">OpenSearch</text>

<rect x="176" y="410" width="154" height="64" rx="12" class="box"/><text x="190" y="436" class="t">Recolector</text><text x="190" y="456" class="tg">Go, tarea programada</text>
<rect x="345" y="410" width="150" height="64" rx="12" class="box"/><text x="359" y="436" class="t">Cola de eventos</text><text x="359" y="456" class="tg">Azure Service Bus</text>
<rect x="510" y="410" width="140" height="64" rx="12" class="box"/><text x="524" y="436" class="t">Ingesta</text><text x="524" y="456" class="tg">Python + Docling</text>

<rect x="176" y="498" width="158" height="56" rx="12" class="box"/><text x="190" y="522" class="t">Documentos</text><text x="190" y="541" class="tg">Azure Blob Storage</text>

<rect x="698" y="212" width="152" height="64" rx="12" class="ext"/><text x="712" y="238" class="t">Modelos</text><text x="712" y="258" class="tg">Claude / GPT</text>
<rect x="698" y="312" width="152" height="64" rx="12" class="ext"/><text x="712" y="338" class="t">Embeddings</text><text x="712" y="358" class="tg">Cohere o bge-m3</text>
<rect x="698" y="436" width="152" height="64" rx="12" class="ext"/><text x="712" y="462" class="t">Observabilidad</text><text x="712" y="482" class="tg">Langfuse + Grafana</text>
</svg>`
  },
  {
    caption: `Del documento oficial a una ficha consultable.`,
    svg: `<svg class="dg" viewBox="0 0 820 380" role="img" aria-label="Pipeline de ingesta de documentos y ficha resultante">
<defs><marker id="i1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#0F7C77"/></marker></defs>
<g>
<rect x="20" y="20" width="140" height="116" rx="14" class="box"/>
<circle cx="42" cy="44" r="12" fill="#0F7C77"/><text x="42" y="48.5" text-anchor="middle" style="fill:#fff;font-size:12px;font-weight:700">1</text>
<text x="34" y="80" class="t">Detecta</text><text x="34" y="98" class="s">Revisa fuentes</text><text x="34" y="113" class="s">cada noche</text><text x="34" y="128" class="tg">Go</text>

<rect x="180" y="20" width="140" height="116" rx="14" class="box"/>
<circle cx="202" cy="44" r="12" fill="#0F7C77"/><text x="202" y="48.5" text-anchor="middle" style="fill:#fff;font-size:12px;font-weight:700">2</text>
<text x="194" y="80" class="t">Guarda original</text><text x="194" y="98" class="s">Copia exacta del</text><text x="194" y="113" class="s">documento oficial</text><text x="194" y="128" class="tg">Blob Storage</text>

<rect x="340" y="20" width="140" height="116" rx="14" class="box"/>
<circle cx="362" cy="44" r="12" fill="#0F7C77"/><text x="362" y="48.5" text-anchor="middle" style="fill:#fff;font-size:12px;font-weight:700">3</text>
<text x="354" y="80" class="t">Extrae texto</text><text x="354" y="98" class="s">PDF y escaneos</text><text x="354" y="113" class="s">con OCR</text><text x="354" y="128" class="tg">Docling + OCR</text>

<rect x="500" y="20" width="140" height="116" rx="14" class="box"/>
<circle cx="522" cy="44" r="12" fill="#0F7C77"/><text x="522" y="48.5" text-anchor="middle" style="fill:#fff;font-size:12px;font-weight:700">4</text>
<text x="514" y="80" class="t">Estructura</text><text x="514" y="98" class="s">Ley, capítulo,</text><text x="514" y="113" class="s">artículo, vigencia</text><text x="514" y="128" class="tg">Python</text>

<rect x="660" y="20" width="140" height="116" rx="14" class="core"/>
<circle cx="682" cy="44" r="12" fill="#6FD0C6"/><text x="682" y="48.5" text-anchor="middle" style="fill:#1C2B3A;font-size:12px;font-weight:700">5</text>
<text x="674" y="80" class="t core-t">Indexa</text><text x="674" y="98" class="s core-s">Vectores y</text><text x="674" y="113" class="s core-s">palabras clave</text><text x="674" y="128" class="tg core-tg">pgvector + BM25</text>
</g>
<g class="ea"><line x1="162" y1="78" x2="176" y2="78" marker-end="url(#i1)"/><line x1="322" y1="78" x2="336" y2="78" marker-end="url(#i1)"/><line x1="482" y1="78" x2="496" y2="78" marker-end="url(#i1)"/><line x1="642" y1="78" x2="656" y2="78" marker-end="url(#i1)"/></g>

<path d="M570 138 V160" class="ed"/>
<rect x="20" y="168" width="780" height="194" rx="16" class="soft"/>
<text x="40" y="198" class="t" style="font-size:15px">Así queda un artículo en la biblioteca</text>
<rect x="40" y="214" width="360" height="130" rx="12" fill="#fff"/>
<text x="58" y="240" class="s">Ley</text><text x="170" y="240" class="t">Código de Trabajo</text>
<text x="58" y="266" class="s">País</text><text x="170" y="266" class="t">El Salvador</text>
<text x="58" y="292" class="s">Ubicación</text><text x="170" y="292" class="t">Libro, capítulo, Art. 177</text>
<text x="58" y="318" class="s">Estado</text>
<rect x="168" y="304" width="62" height="20" rx="10" fill="#0F7C77"/><text x="199" y="318" text-anchor="middle" style="fill:#fff;font-size:11.5px;font-weight:700">vigente</text>
<rect x="420" y="214" width="360" height="130" rx="12" fill="#fff"/>
<text x="438" y="240" class="s">Reformas</text><text x="550" y="240" class="t">Historial con decretos</text>
<text x="438" y="266" class="s">Fuente</text><text x="550" y="266" class="t">Enlace al documento oficial</text>
<text x="438" y="292" class="s">Texto</text><text x="550" y="292" class="t">Íntegro, sin cortes</text>
<text x="438" y="318" class="s">Huella</text><text x="550" y="318" class="t">Hash para detectar cambios</text>
</svg>`
  },
  {
    caption: `El paso de verificación ocurre antes de que el usuario vea cualquier texto.`,
    svg: `<svg class="dg" viewBox="0 0 820 540" role="img" aria-label="Diagrama de secuencia de una consulta">
<defs>
<marker id="s1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#1C2B3A"/></marker>
<marker id="s2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#8A99A6"/></marker>
</defs>
<g class="life"><line x1="80" y1="62" x2="80" y2="520"/><line x1="240" y1="62" x2="240" y2="520"/><line x1="400" y1="62" x2="400" y2="520"/><line x1="560" y1="62" x2="560" y2="520"/><line x1="720" y1="62" x2="720" y2="520"/></g>
<rect x="5" y="10" width="150" height="52" rx="12" class="box"/><text x="80" y="34" text-anchor="middle" class="t">Usuario</text><text x="80" y="51" text-anchor="middle" class="tg">WhatsApp o web</text>
<rect x="165" y="10" width="150" height="52" rx="12" class="box"/><text x="240" y="34" text-anchor="middle" class="t">API principal</text><text x="240" y="51" text-anchor="middle" class="tg">ASP.NET Core</text>
<rect x="325" y="10" width="150" height="52" rx="12" class="core"/><text x="400" y="34" text-anchor="middle" class="t core-t">Agente</text><text x="400" y="51" text-anchor="middle" class="tg core-tg">Python</text>
<rect x="485" y="10" width="150" height="52" rx="12" class="box"/><text x="560" y="34" text-anchor="middle" class="t">Búsqueda</text><text x="560" y="51" text-anchor="middle" class="tg" style="font-size:10.5px">pgvector + OpenSearch</text>
<rect x="645" y="10" width="150" height="52" rx="12" class="ext"/><text x="720" y="34" text-anchor="middle" class="t">Modelo</text><text x="720" y="51" text-anchor="middle" class="tg">Claude / GPT</text>

<g style="stroke:#1C2B3A;stroke-width:1.5;fill:none">
<line x1="84" y1="98" x2="236" y2="98" marker-end="url(#s1)"/>
<line x1="244" y1="138" x2="396" y2="138" marker-end="url(#s1)"/>
<line x1="404" y1="178" x2="716" y2="178" marker-end="url(#s1)"/>
<line x1="404" y1="258" x2="556" y2="258" marker-end="url(#s1)"/>
<line x1="404" y1="338" x2="716" y2="338" marker-end="url(#s1)"/>
<line x1="396" y1="458" x2="244" y2="458" marker-end="url(#s1)"/>
<line x1="236" y1="498" x2="84" y2="498" marker-end="url(#s1)"/>
</g>
<g style="stroke:#8A99A6;stroke-width:1.5;fill:none;stroke-dasharray:5 4">
<line x1="716" y1="218" x2="404" y2="218" marker-end="url(#s2)"/>
<line x1="556" y1="298" x2="404" y2="298" marker-end="url(#s2)"/>
<line x1="716" y1="378" x2="404" y2="378" marker-end="url(#s2)"/>
</g>
<g class="lb" text-anchor="middle">
<text x="160" y="90">Pregunta</text>
<text x="320" y="130">Pregunta + país + plan</text>
<text x="560" y="170">¿Qué necesito buscar?</text>
<text x="560" y="210">Usa la herramienta buscar_normativa</text>
<text x="480" y="250">Búsqueda con filtros</text>
<text x="480" y="290">6 artículos vigentes</text>
<text x="560" y="330">Artículos + pregunta</text>
<text x="560" y="370">Borrador con citas</text>
<text x="320" y="450">Respuesta verificada</text>
<text x="160" y="490">Texto + fuentes</text>
</g>
<rect x="340" y="396" width="270" height="44" rx="10" class="warm"/>
<text x="356" y="415" class="t" style="font-size:12.5px">Verifica cada cita contra la base</text>
<text x="356" y="432" class="s">Si una no existe, corrige o se abstiene</text>
</svg>`
  },
  {
    caption: `Despliegue en Azure con entrega continua desde GitHub.`,
    svg: `<svg class="dg" viewBox="0 0 820 520" role="img" aria-label="Diagrama de infraestructura en Azure">
<defs><marker id="f1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#6B7B8A"/></marker></defs>
<rect x="320" y="20" width="480" height="370" rx="18" class="bound"/>
<text x="338" y="42" class="zone">Región de Azure</text>
<rect x="338" y="54" width="444" height="130" rx="14" fill="#F7F9FA" stroke="#C3CED8"/>
<text x="352" y="172" class="zone" style="font-weight:600">Azure Container Apps</text>
<rect x="338" y="200" width="304" height="172" rx="14" fill="#F7F9FA" stroke="#C3CED8"/>
<text x="352" y="366" class="zone" style="font-weight:600">Datos en red privada</text>

<g class="e">
<line x1="130" y1="210" x2="156" y2="210" marker-end="url(#f1)"/>
<path d="M300 210 H330 V112 H352" marker-end="url(#f1)"/>
<path d="M514 76 V64 H300" marker-end="url(#f1)"/>
<line x1="404" y1="146" x2="420" y2="224" marker-end="url(#f1)"/>
<line x1="512" y1="146" x2="560" y2="224" marker-end="url(#f1)"/>
<line x1="620" y1="146" x2="704" y2="212" marker-end="url(#f1)"/>
<line x1="728" y1="146" x2="740" y2="212" marker-end="url(#f1)"/>
<line x1="505" y1="428" x2="505" y2="394" marker-end="url(#f1)"/>
</g>
<text x="514" y="414" class="lb">despliega</text>

<rect x="20" y="180" width="110" height="60" rx="12" class="box"/><text x="75" y="206" text-anchor="middle" class="t">Usuarios</text><text x="75" y="224" text-anchor="middle" class="s">internet</text>
<rect x="160" y="170" width="140" height="80" rx="12" class="box"/><text x="174" y="198" class="t">Front Door</text><text x="174" y="216" class="s">CDN y firewall</text><text x="174" y="236" class="tg">WAF</text>
<rect x="160" y="32" width="140" height="64" rx="12" class="ext"/><text x="174" y="58" class="t">Modelos de IA</text><text x="174" y="78" class="tg">Anthropic / OpenAI</text>

<rect x="354" y="78" width="98" height="66" rx="10" class="box"/><text x="368" y="104" class="t">API</text><text x="368" y="124" class="tg">.NET</text>
<rect x="462" y="78" width="98" height="66" rx="10" class="core"/><text x="476" y="104" class="t core-t">Agente</text><text x="476" y="124" class="tg core-tg">Python</text>
<rect x="570" y="78" width="98" height="66" rx="10" class="box"/><text x="584" y="104" class="t">Ingesta</text><text x="584" y="124" class="tg">Python</text>
<rect x="678" y="78" width="98" height="66" rx="10" class="box"/><text x="692" y="104" class="t">Recolector</text><text x="692" y="124" class="tg">Go, job</text>

<rect x="354" y="226" width="134" height="56" rx="10" class="box"/><text x="368" y="250" class="t">PostgreSQL</text><text x="368" y="270" class="tg">Flexible Server</text>
<rect x="498" y="226" width="134" height="56" rx="10" class="box"/><text x="512" y="250" class="t">OpenSearch</text><text x="512" y="270" class="tg">gestionado</text>
<rect x="354" y="292" width="134" height="56" rx="10" class="box"/><text x="368" y="316" class="t">Redis</text><text x="368" y="336" class="tg">Azure Cache</text>
<rect x="498" y="292" width="134" height="56" rx="10" class="box"/><text x="512" y="316" class="t">Blob Storage</text><text x="512" y="336" class="tg">documentos</text>

<rect x="656" y="214" width="126" height="64" rx="10" class="box"/><text x="670" y="240" class="t">Service Bus</text><text x="670" y="260" class="tg">eventos</text>
<rect x="656" y="292" width="126" height="64" rx="10" class="warm"/><text x="670" y="318" class="t">Key Vault</text><text x="670" y="338" class="tg" style="fill:#8A6210">secretos</text>

<rect x="20" y="410" width="780" height="96" rx="16" class="bound"/>
<text x="38" y="432" class="zone">Entrega continua</text>
<rect x="38" y="442" width="150" height="52" rx="10" class="box"/><text x="52" y="464" class="t">GitHub</text><text x="52" y="482" class="tg">código</text>
<rect x="210" y="442" width="200" height="52" rx="10" class="box"/><text x="224" y="464" class="t">GitHub Actions</text><text x="224" y="482" class="tg">pruebas + examen de calidad</text>
<rect x="430" y="442" width="150" height="52" rx="10" class="box"/><text x="444" y="464" class="t">Terraform</text><text x="444" y="482" class="tg">infraestructura</text>
<rect x="600" y="442" width="182" height="52" rx="10" class="box"/><text x="614" y="464" class="t">Monitoreo</text><text x="614" y="482" class="tg">Azure Monitor, Langfuse</text>
<g class="e"><line x1="190" y1="468" x2="206" y2="468" marker-end="url(#f1)"/><line x1="412" y1="468" x2="426" y2="468" marker-end="url(#f1)"/></g>
</svg>`
  },
  {
    caption: `Cada error encontrado en producción se convierte en una prueba nueva.`,
    svg: `<svg class="dg" viewBox="0 0 820 270" role="img" aria-label="Ciclo de evaluación continua">
<defs><marker id="q1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#0F7C77"/></marker><marker id="q2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#A2443A"/></marker></defs>
<rect x="20" y="40" width="140" height="84" rx="12" class="box"/><text x="34" y="68" class="t">Cambio</text><text x="34" y="88" class="s">Prompt, modelo</text><text x="34" y="104" class="s">o búsqueda</text>
<rect x="185" y="40" width="140" height="84" rx="12" class="box"/><text x="199" y="68" class="t">Examen</text><text x="199" y="88" class="s">500 preguntas</text><text x="199" y="104" class="tg">Python + pytest</text>
<rect x="350" y="40" width="140" height="84" rx="12" class="warm"/><text x="364" y="68" class="t">¿Pasa?</text><text x="364" y="88" class="s">Citas, fidelidad,</text><text x="364" y="104" class="s">latencia, costo</text>
<rect x="515" y="40" width="140" height="84" rx="12" class="core"/><text x="529" y="68" class="t core-t">Producción</text><text x="529" y="88" class="s core-s">Trazas de cada</text><text x="529" y="104" class="s core-s">respuesta</text>
<rect x="680" y="40" width="120" height="84" rx="12" class="soft"/><text x="694" y="68" class="t">Revisión</text><text x="694" y="88" class="s">Abogado marca</text><text x="694" y="104" class="s">errores</text>
<rect x="350" y="160" width="140" height="44" rx="10" class="bad"/><text x="420" y="187" text-anchor="middle" class="t" style="fill:#A2443A;font-size:12.5px">Se bloquea</text>
<g class="ea"><line x1="162" y1="82" x2="181" y2="82" marker-end="url(#q1)"/><line x1="327" y1="82" x2="346" y2="82" marker-end="url(#q1)"/><line x1="492" y1="82" x2="511" y2="82" marker-end="url(#q1)"/><line x1="657" y1="82" x2="676" y2="82" marker-end="url(#q1)"/></g>
<line x1="420" y1="126" x2="420" y2="156" style="stroke:#A2443A;stroke-width:1.8" marker-end="url(#q2)"/>
<path d="M740 126 V240 H90 V128" class="ed" style="stroke:#0F7C77" marker-end="url(#q1)"/>
<rect x="560" y="230" width="176" height="20" fill="#fff"/>
<text x="648" y="244" text-anchor="middle" class="lb">las fallas se suman al examen</text>
</svg>`
  },
  {
    caption: `Enrutamiento de consultas según su complejidad.`,
    svg: `<svg class="dg" viewBox="0 0 820 290" role="img" aria-label="Enrutamiento de consultas para controlar costos">
<defs><marker id="r1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#6B7B8A"/></marker></defs>
<g class="e">
<line x1="140" y1="140" x2="171" y2="140" marker-end="url(#r1)"/>
<path d="M325 122 H346 V46 H368" marker-end="url(#r1)"/>
<line x1="325" y1="152" x2="368" y2="152" marker-end="url(#r1)"/>
<path d="M530 142 H560 V94 H598" marker-end="url(#r1)"/>
<path d="M530 162 H560 V200 H598" marker-end="url(#r1)"/>
</g>
<g class="lb"><text x="334" y="84">sí</text><text x="334" y="170">no</text></g>
<rect x="20" y="110" width="120" height="60" rx="12" class="box"/><text x="80" y="145" text-anchor="middle" class="t">Pregunta</text>
<rect x="173" y="96" width="152" height="88" rx="12" class="box"/><text x="187" y="124" class="t">¿Ya se respondió?</text><text x="187" y="144" class="s">Pregunta equivalente</text><text x="187" y="170" class="tg">Redis, caché semántica</text>
<rect x="370" y="16" width="190" height="60" rx="12" class="soft"/><text x="384" y="42" class="t">Respuesta inmediata</text><text x="384" y="62" class="s">Costo casi cero</text>
<rect x="370" y="116" width="160" height="72" rx="12" class="box"/><text x="384" y="144" class="t">Clasificador</text><text x="384" y="164" class="s">Mide complejidad</text>
<rect x="600" y="62" width="200" height="64" rx="12" class="box"/><text x="614" y="88" class="t">Modelo ligero</text><text x="614" y="108" class="s">Preguntas directas</text>
<rect x="600" y="168" width="200" height="64" rx="12" class="core"/><text x="614" y="194" class="t core-t">Modelo avanzado</text><text x="614" y="214" class="s core-s">Análisis y comparaciones</text>
<rect x="20" y="250" width="780" height="32" rx="10" class="warm"/>
<text x="410" y="271" text-anchor="middle" class="t" style="font-size:12.5px">Tope de pasos y tokens por consulta y por cliente, con alertas antes de llegar al límite</text>
</svg>`
  },
];

export const NORMATIVA_STACK = {
  headers: ["Capa", "Elección", "Justificación"],
  rows: [["Interfaz", "Angular, WhatsApp Cloud API", "WhatsApp es el canal de mensajería predominante en la región; la interfaz web atiende consultas extensas."], ["Negocio", "ASP.NET Core", "Tipado fuerte, alto rendimiento y amplia adopción en entornos corporativos y financieros."], ["Agente", "Python, FastAPI", "Acceso directo a los SDK de Anthropic y OpenAI y a las librerías de evaluación."], ["Datos", "PostgreSQL + pgvector", "Normas, vectores y auditoría en un único motor, lo que reduce la complejidad operativa inicial."], ["Búsqueda", "OpenSearch", "Coincidencia léxica en español, necesaria para referencias exactas como artículos o números de decreto."], ["Ingesta", "Go, Docling, Tesseract", "Go para descarga concurrente de documentos; Docling y OCR para PDF nativos y escaneados."], ["Nube", "Azure, Terraform", "Servicios gestionados para cómputo, mensajería y secretos; Terraform permite replicar el entorno en otra nube."]]
};

export const NORMATIVA_CASES = [
  {
    "cat": "Legal",
    "title": "Harvey",
    "text": "Asistente para firmas de abogados, adoptado temprano por Allen & Overy. Su diferencial está en adaptarse al trabajo diario de una firma."
  },
  {
    "cat": "Legal",
    "title": "CoCounsel",
    "text": "Thomson Reuters lo conectó al contenido jurídico que la editorial ha curado durante décadas, un corpus difícil de replicar."
  },
  {
    "cat": "Banca",
    "title": "Morgan Stanley",
    "text": "Asistente interno desarrollado con OpenAI para que los asesores consulten la investigación de la firma. En industrias reguladas es común empezar por usuarios internos."
  },
  {
    "cat": "Soporte",
    "title": "Fin, de Intercom",
    "text": "Responde con la documentación de cada empresa y transfiere la conversación a una persona cuando no puede resolverla."
  },
  {
    "cat": "Búsqueda",
    "title": "Perplexity",
    "text": "Muestra las fuentes junto a cada párrafo y convirtió las citas visibles en algo que los usuarios ya esperan."
  },
  {
    "cat": "Atención al cliente",
    "title": "Klarna",
    "text": "Automatizó buena parte de su atención y después devolvió espacio a agentes humanos. El ahorro no era la única métrica que importaba."
  },
  {
    "cat": "Legal",
    "title": "Harvey Tenet",
    "text": "Su primer modelo post-entrenado, presentado en agosto de 2026: parte de Kimi K3 y se ajusta para tareas legales largas de varios pasos. Representa el escalón más costoso del espectro, justificado solo después de años de operar con RAG."
  }
];
