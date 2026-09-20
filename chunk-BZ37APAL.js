import{a as c}from"./chunk-3OKJCHBQ.js";import{c as o,d as n,f as i}from"./chunk-3FKWE6II.js";var e=[{caption:"Arriba, el flujo habitual. Abajo, las etapas que a\xF1ade Normativa y la tecnolog\xEDa de cada una.",svg:`<svg class="dg" viewBox="0 0 820 400" role="img" aria-label="Comparaci\xF3n entre un RAG b\xE1sico y la arquitectura de Normativa">
<defs>
<marker id="b1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#8A99A6"/></marker>
<marker id="b2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#0F7C77"/></marker>
</defs>
<text x="20" y="28" class="zone">RAG b\xE1sico</text>
<g>
<rect x="20" y="44" width="120" height="54" rx="12" class="muted"/><text x="80" y="76" text-anchor="middle" class="t" style="fill:#5B6B7A">PDF</text>
<rect x="182" y="44" width="120" height="54" rx="12" class="muted"/><text x="242" y="76" text-anchor="middle" class="t" style="fill:#5B6B7A">Fragmentos</text>
<rect x="344" y="44" width="120" height="54" rx="12" class="muted"/><text x="404" y="76" text-anchor="middle" class="t" style="fill:#5B6B7A">Base vectorial</text>
<rect x="506" y="44" width="120" height="54" rx="12" class="muted"/><text x="566" y="76" text-anchor="middle" class="t" style="fill:#5B6B7A">LLM</text>
<rect x="668" y="44" width="132" height="54" rx="12" class="muted"/><text x="734" y="76" text-anchor="middle" class="t" style="fill:#5B6B7A">Respuesta</text>
<g class="e" style="stroke:#8A99A6"><line x1="142" y1="71" x2="178" y2="71" marker-end="url(#b1)"/><line x1="304" y1="71" x2="340" y2="71" marker-end="url(#b1)"/><line x1="466" y1="71" x2="502" y2="71" marker-end="url(#b1)"/><line x1="628" y1="71" x2="664" y2="71" marker-end="url(#b1)"/></g>
</g>
<text x="20" y="126" class="lb" style="fill:#A2443A">No sabe si la norma cambi\xF3, no verifica citas y nadie mide si responde bien.</text>

<line x1="20" y1="150" x2="800" y2="150" stroke="#E3E8ED"/>
<text x="20" y="182" class="zone" style="fill:#0F7C77">Arquitectura de Normativa</text>

<rect x="20" y="198" width="180" height="72" rx="12" class="box"/><text x="36" y="226" class="t">Fuentes oficiales</text><text x="36" y="248" class="tg">Recolector en Go</text>
<rect x="226" y="198" width="180" height="72" rx="12" class="box"/><text x="242" y="226" class="t">Estructura y vigencia</text><text x="242" y="248" class="tg">Docling + Python</text>
<rect x="432" y="198" width="180" height="72" rx="12" class="box"/><text x="448" y="226" class="t">B\xFAsqueda h\xEDbrida</text><text x="448" y="248" class="tg">pgvector + OpenSearch</text>
<rect x="638" y="198" width="162" height="72" rx="12" class="box"/><text x="654" y="226" class="t">Reranking</text><text x="654" y="248" class="tg">Cohere Rerank o bge</text>

<rect x="638" y="306" width="162" height="72" rx="12" class="core"/><text x="654" y="334" class="t core-t">Agente</text><text x="654" y="356" class="tg core-tg">Claude o GPT + tools</text>
<rect x="432" y="306" width="180" height="72" rx="12" class="box"/><text x="448" y="334" class="t">Verificador de citas</text><text x="448" y="356" class="tg">Reglas + PostgreSQL</text>
<rect x="226" y="306" width="180" height="72" rx="12" class="soft"/><text x="242" y="334" class="t">Respuesta con fuentes</text><text x="242" y="356" class="tg">Streaming al usuario</text>
<rect x="20" y="306" width="180" height="72" rx="12" class="warm"/><text x="36" y="334" class="t">Evaluaci\xF3n continua</text><text x="36" y="356" class="tg" style="fill:#8A6210">Examen en cada deploy</text>

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
<text x="120" y="293" class="lb">mejora cada versi\xF3n</text>
</svg>`},{caption:"El fine-tuning y el post-training tienen sentido cuando ya existe suficiente volumen de tareas repetidas y presupuesto para investigaci\xF3n propia. Harvey lleg\xF3 a ese punto despu\xE9s de a\xF1os operando con RAG; para la mayor\xEDa de asistentes de dominio, RAG con verificaci\xF3n cubre el problema sin esa inversi\xF3n.",svg:`<svg class="dg" viewBox="0 0 820 300" role="img" aria-label="Espectro de intervenci\xF3n sobre un modelo de lenguaje, de usarlo tal cual a entrenar uno propio">
<defs><marker id="sp1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#8A99A6"/></marker></defs>

<rect x="20" y="20" width="180" height="168" rx="14" class="muted"/>
<text x="36" y="48" class="s" style="font-weight:700">Usar</text>
<text x="36" y="72" class="t" style="font-size:15px">LLM generalista</text>
<text x="36" y="96" class="s">Se usa el modelo</text>
<text x="36" y="112" class="s">tal como viene</text>
<text x="36" y="140" class="tg" style="fill:#5B6B7A">ChatGPT, Claude, Gemini</text>
<text x="36" y="160" class="lb">Intervenci\xF3n: ninguna</text>

<rect x="220" y="20" width="180" height="168" rx="14" class="soft"/>
<text x="236" y="48" class="tg" style="font-weight:700">Contextualizar</text>
<text x="236" y="72" class="t" style="font-size:13.5px">RAG con conocimiento</text>
<text x="236" y="96" class="s">Se le da acceso a</text>
<text x="236" y="112" class="s">fuentes propias</text>
<text x="236" y="140" class="tg">Normativa, Westlaw,</text>
<text x="236" y="156" class="tg">Lexis+ AI</text>
<text x="236" y="176" class="lb" style="fill:#0F7C77;font-weight:600">Este art\xEDculo</text>

<rect x="420" y="20" width="180" height="168" rx="14" class="warm"/>
<text x="436" y="48" class="s" style="font-weight:700;fill:#8A6210">Adaptar</text>
<text x="436" y="72" class="t" style="font-size:15px">Fine-tuning</text>
<text x="436" y="96" class="s">Se reentrena con</text>
<text x="436" y="112" class="s">ejemplos del dominio</text>
<text x="436" y="140" class="tg" style="fill:#8A6210">LEGAL-BERT</text>
<text x="436" y="160" class="lb">Intervenci\xF3n: pesos del modelo</text>

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
<text x="20" y="244" class="s">Menor costo, menor intervenci\xF3n</text>
<text x="800" y="244" class="s" text-anchor="end">Mayor costo, mayor intervenci\xF3n</text>
<text x="410" y="272" text-anchor="middle" class="s" style="font-style:italic">La diferencia no est\xE1 solo en qu\xE9 modelo se usa, sino en cu\xE1nto y c\xF3mo se interviene sobre \xE9l.</text>
</svg>`},{caption:"Nivel 1 del modelo C4. Los sistemas externos, con borde punteado, son dependencias con costo mensual y su propio riesgo de ca\xEDda.",svg:`<svg class="dg" viewBox="0 0 820 510" role="img" aria-label="Diagrama de contexto de Normativa">
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
</svg>`},{caption:"Nivel 2 del modelo C4. En verde, el camino que recorre una consulta.",svg:`<svg class="dg" viewBox="0 0 860 580" role="img" aria-label="Diagrama de contenedores de Normativa con tecnolog\xEDas">
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

<rect x="176" y="318" width="124" height="68" rx="12" class="box"/><text x="190" y="346" class="t">Cach\xE9</text><text x="190" y="366" class="tg">Redis</text>
<rect x="315" y="318" width="190" height="68" rx="12" class="box"/><text x="329" y="346" class="t">Base de datos</text><text x="329" y="366" class="tg">PostgreSQL + pgvector</text>
<rect x="520" y="318" width="140" height="68" rx="12" class="box"/><text x="534" y="346" class="t">B\xFAsqueda l\xE9xica</text><text x="534" y="366" class="tg">OpenSearch</text>

<rect x="176" y="410" width="154" height="64" rx="12" class="box"/><text x="190" y="436" class="t">Recolector</text><text x="190" y="456" class="tg">Go, tarea programada</text>
<rect x="345" y="410" width="150" height="64" rx="12" class="box"/><text x="359" y="436" class="t">Cola de eventos</text><text x="359" y="456" class="tg">Azure Service Bus</text>
<rect x="510" y="410" width="140" height="64" rx="12" class="box"/><text x="524" y="436" class="t">Ingesta</text><text x="524" y="456" class="tg">Python + Docling</text>

<rect x="176" y="498" width="158" height="56" rx="12" class="box"/><text x="190" y="522" class="t">Documentos</text><text x="190" y="541" class="tg">Azure Blob Storage</text>

<rect x="698" y="212" width="152" height="64" rx="12" class="ext"/><text x="712" y="238" class="t">Modelos</text><text x="712" y="258" class="tg">Claude / GPT</text>
<rect x="698" y="312" width="152" height="64" rx="12" class="ext"/><text x="712" y="338" class="t">Embeddings</text><text x="712" y="358" class="tg">Cohere o bge-m3</text>
<rect x="698" y="436" width="152" height="64" rx="12" class="ext"/><text x="712" y="462" class="t">Observabilidad</text><text x="712" y="482" class="tg">Langfuse + Grafana</text>
</svg>`},{caption:"Del documento oficial a una ficha consultable.",svg:`<svg class="dg" viewBox="0 0 820 380" role="img" aria-label="Pipeline de ingesta de documentos y ficha resultante">
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
<text x="514" y="80" class="t">Estructura</text><text x="514" y="98" class="s">Ley, cap\xEDtulo,</text><text x="514" y="113" class="s">art\xEDculo, vigencia</text><text x="514" y="128" class="tg">Python</text>

<rect x="660" y="20" width="140" height="116" rx="14" class="core"/>
<circle cx="682" cy="44" r="12" fill="#6FD0C6"/><text x="682" y="48.5" text-anchor="middle" style="fill:#1C2B3A;font-size:12px;font-weight:700">5</text>
<text x="674" y="80" class="t core-t">Indexa</text><text x="674" y="98" class="s core-s">Vectores y</text><text x="674" y="113" class="s core-s">palabras clave</text><text x="674" y="128" class="tg core-tg">pgvector + BM25</text>
</g>
<g class="ea"><line x1="162" y1="78" x2="176" y2="78" marker-end="url(#i1)"/><line x1="322" y1="78" x2="336" y2="78" marker-end="url(#i1)"/><line x1="482" y1="78" x2="496" y2="78" marker-end="url(#i1)"/><line x1="642" y1="78" x2="656" y2="78" marker-end="url(#i1)"/></g>

<path d="M570 138 V160" class="ed"/>
<rect x="20" y="168" width="780" height="194" rx="16" class="soft"/>
<text x="40" y="198" class="t" style="font-size:15px">As\xED queda un art\xEDculo en la biblioteca</text>
<rect x="40" y="214" width="360" height="130" rx="12" fill="#fff"/>
<text x="58" y="240" class="s">Ley</text><text x="170" y="240" class="t">C\xF3digo de Trabajo</text>
<text x="58" y="266" class="s">Pa\xEDs</text><text x="170" y="266" class="t">El Salvador</text>
<text x="58" y="292" class="s">Ubicaci\xF3n</text><text x="170" y="292" class="t">Libro, cap\xEDtulo, Art. 177</text>
<text x="58" y="318" class="s">Estado</text>
<rect x="168" y="304" width="62" height="20" rx="10" fill="#0F7C77"/><text x="199" y="318" text-anchor="middle" style="fill:#fff;font-size:11.5px;font-weight:700">vigente</text>
<rect x="420" y="214" width="360" height="130" rx="12" fill="#fff"/>
<text x="438" y="240" class="s">Reformas</text><text x="550" y="240" class="t">Historial con decretos</text>
<text x="438" y="266" class="s">Fuente</text><text x="550" y="266" class="t">Enlace al documento oficial</text>
<text x="438" y="292" class="s">Texto</text><text x="550" y="292" class="t">\xCDntegro, sin cortes</text>
<text x="438" y="318" class="s">Huella</text><text x="550" y="318" class="t">Hash para detectar cambios</text>
</svg>`},{caption:"El paso de verificaci\xF3n ocurre antes de que el usuario vea cualquier texto.",svg:`<svg class="dg" viewBox="0 0 820 540" role="img" aria-label="Diagrama de secuencia de una consulta">
<defs>
<marker id="s1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#1C2B3A"/></marker>
<marker id="s2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#8A99A6"/></marker>
</defs>
<g class="life"><line x1="80" y1="62" x2="80" y2="520"/><line x1="240" y1="62" x2="240" y2="520"/><line x1="400" y1="62" x2="400" y2="520"/><line x1="560" y1="62" x2="560" y2="520"/><line x1="720" y1="62" x2="720" y2="520"/></g>
<rect x="5" y="10" width="150" height="52" rx="12" class="box"/><text x="80" y="34" text-anchor="middle" class="t">Usuario</text><text x="80" y="51" text-anchor="middle" class="tg">WhatsApp o web</text>
<rect x="165" y="10" width="150" height="52" rx="12" class="box"/><text x="240" y="34" text-anchor="middle" class="t">API principal</text><text x="240" y="51" text-anchor="middle" class="tg">ASP.NET Core</text>
<rect x="325" y="10" width="150" height="52" rx="12" class="core"/><text x="400" y="34" text-anchor="middle" class="t core-t">Agente</text><text x="400" y="51" text-anchor="middle" class="tg core-tg">Python</text>
<rect x="485" y="10" width="150" height="52" rx="12" class="box"/><text x="560" y="34" text-anchor="middle" class="t">B\xFAsqueda</text><text x="560" y="51" text-anchor="middle" class="tg" style="font-size:10.5px">pgvector + OpenSearch</text>
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
<text x="320" y="130">Pregunta + pa\xEDs + plan</text>
<text x="560" y="170">\xBFQu\xE9 necesito buscar?</text>
<text x="560" y="210">Usa la herramienta buscar_normativa</text>
<text x="480" y="250">B\xFAsqueda con filtros</text>
<text x="480" y="290">6 art\xEDculos vigentes</text>
<text x="560" y="330">Art\xEDculos + pregunta</text>
<text x="560" y="370">Borrador con citas</text>
<text x="320" y="450">Respuesta verificada</text>
<text x="160" y="490">Texto + fuentes</text>
</g>
<rect x="340" y="396" width="270" height="44" rx="10" class="warm"/>
<text x="356" y="415" class="t" style="font-size:12.5px">Verifica cada cita contra la base</text>
<text x="356" y="432" class="s">Si una no existe, corrige o se abstiene</text>
</svg>`},{caption:"Despliegue en Azure con entrega continua desde GitHub.",svg:`<svg class="dg" viewBox="0 0 820 520" role="img" aria-label="Diagrama de infraestructura en Azure">
<defs><marker id="f1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#6B7B8A"/></marker></defs>
<rect x="320" y="20" width="480" height="370" rx="18" class="bound"/>
<text x="338" y="42" class="zone">Regi\xF3n de Azure</text>
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
<rect x="38" y="442" width="150" height="52" rx="10" class="box"/><text x="52" y="464" class="t">GitHub</text><text x="52" y="482" class="tg">c\xF3digo</text>
<rect x="210" y="442" width="200" height="52" rx="10" class="box"/><text x="224" y="464" class="t">GitHub Actions</text><text x="224" y="482" class="tg">pruebas + examen de calidad</text>
<rect x="430" y="442" width="150" height="52" rx="10" class="box"/><text x="444" y="464" class="t">Terraform</text><text x="444" y="482" class="tg">infraestructura</text>
<rect x="600" y="442" width="182" height="52" rx="10" class="box"/><text x="614" y="464" class="t">Monitoreo</text><text x="614" y="482" class="tg">Azure Monitor, Langfuse</text>
<g class="e"><line x1="190" y1="468" x2="206" y2="468" marker-end="url(#f1)"/><line x1="412" y1="468" x2="426" y2="468" marker-end="url(#f1)"/></g>
</svg>`},{caption:"Cada error encontrado en producci\xF3n se convierte en una prueba nueva.",svg:`<svg class="dg" viewBox="0 0 820 270" role="img" aria-label="Ciclo de evaluaci\xF3n continua">
<defs><marker id="q1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#0F7C77"/></marker><marker id="q2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#A2443A"/></marker></defs>
<rect x="20" y="40" width="140" height="84" rx="12" class="box"/><text x="34" y="68" class="t">Cambio</text><text x="34" y="88" class="s">Prompt, modelo</text><text x="34" y="104" class="s">o b\xFAsqueda</text>
<rect x="185" y="40" width="140" height="84" rx="12" class="box"/><text x="199" y="68" class="t">Examen</text><text x="199" y="88" class="s">500 preguntas</text><text x="199" y="104" class="tg">Python + pytest</text>
<rect x="350" y="40" width="140" height="84" rx="12" class="warm"/><text x="364" y="68" class="t">\xBFPasa?</text><text x="364" y="88" class="s">Citas, fidelidad,</text><text x="364" y="104" class="s">latencia, costo</text>
<rect x="515" y="40" width="140" height="84" rx="12" class="core"/><text x="529" y="68" class="t core-t">Producci\xF3n</text><text x="529" y="88" class="s core-s">Trazas de cada</text><text x="529" y="104" class="s core-s">respuesta</text>
<rect x="680" y="40" width="120" height="84" rx="12" class="soft"/><text x="694" y="68" class="t">Revisi\xF3n</text><text x="694" y="88" class="s">Abogado marca</text><text x="694" y="104" class="s">errores</text>
<rect x="350" y="160" width="140" height="44" rx="10" class="bad"/><text x="420" y="187" text-anchor="middle" class="t" style="fill:#A2443A;font-size:12.5px">Se bloquea</text>
<g class="ea"><line x1="162" y1="82" x2="181" y2="82" marker-end="url(#q1)"/><line x1="327" y1="82" x2="346" y2="82" marker-end="url(#q1)"/><line x1="492" y1="82" x2="511" y2="82" marker-end="url(#q1)"/><line x1="657" y1="82" x2="676" y2="82" marker-end="url(#q1)"/></g>
<line x1="420" y1="126" x2="420" y2="156" style="stroke:#A2443A;stroke-width:1.8" marker-end="url(#q2)"/>
<path d="M740 126 V240 H90 V128" class="ed" style="stroke:#0F7C77" marker-end="url(#q1)"/>
<rect x="560" y="230" width="176" height="20" fill="#fff"/>
<text x="648" y="244" text-anchor="middle" class="lb">las fallas se suman al examen</text>
</svg>`},{caption:"Enrutamiento de consultas seg\xFAn su complejidad.",svg:`<svg class="dg" viewBox="0 0 820 290" role="img" aria-label="Enrutamiento de consultas para controlar costos">
<defs><marker id="r1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#6B7B8A"/></marker></defs>
<g class="e">
<line x1="140" y1="140" x2="171" y2="140" marker-end="url(#r1)"/>
<path d="M325 122 H346 V46 H368" marker-end="url(#r1)"/>
<line x1="325" y1="152" x2="368" y2="152" marker-end="url(#r1)"/>
<path d="M530 142 H560 V94 H598" marker-end="url(#r1)"/>
<path d="M530 162 H560 V200 H598" marker-end="url(#r1)"/>
</g>
<g class="lb"><text x="334" y="84">s\xED</text><text x="334" y="170">no</text></g>
<rect x="20" y="110" width="120" height="60" rx="12" class="box"/><text x="80" y="145" text-anchor="middle" class="t">Pregunta</text>
<rect x="173" y="96" width="152" height="88" rx="12" class="box"/><text x="187" y="124" class="t">\xBFYa se respondi\xF3?</text><text x="187" y="144" class="s">Pregunta equivalente</text><text x="187" y="170" class="tg">Redis, cach\xE9 sem\xE1ntica</text>
<rect x="370" y="16" width="190" height="60" rx="12" class="soft"/><text x="384" y="42" class="t">Respuesta inmediata</text><text x="384" y="62" class="s">Costo casi cero</text>
<rect x="370" y="116" width="160" height="72" rx="12" class="box"/><text x="384" y="144" class="t">Clasificador</text><text x="384" y="164" class="s">Mide complejidad</text>
<rect x="600" y="62" width="200" height="64" rx="12" class="box"/><text x="614" y="88" class="t">Modelo ligero</text><text x="614" y="108" class="s">Preguntas directas</text>
<rect x="600" y="168" width="200" height="64" rx="12" class="core"/><text x="614" y="194" class="t core-t">Modelo avanzado</text><text x="614" y="214" class="s core-s">An\xE1lisis y comparaciones</text>
<rect x="20" y="250" width="780" height="32" rx="10" class="warm"/>
<text x="410" y="271" text-anchor="middle" class="t" style="font-size:12.5px">Tope de pasos y tokens por consulta y por cliente, con alertas antes de llegar al l\xEDmite</text>
</svg>`}],s={headers:["Capa","Elecci\xF3n","Justificaci\xF3n"],rows:[["Interfaz","Angular, WhatsApp Cloud API","WhatsApp es el canal de mensajer\xEDa predominante en la regi\xF3n; la interfaz web atiende consultas extensas."],["Negocio","ASP.NET Core","Tipado fuerte, alto rendimiento y amplia adopci\xF3n en entornos corporativos y financieros."],["Agente","Python, FastAPI","Acceso directo a los SDK de Anthropic y OpenAI y a las librer\xEDas de evaluaci\xF3n."],["Datos","PostgreSQL + pgvector","Normas, vectores y auditor\xEDa en un \xFAnico motor, lo que reduce la complejidad operativa inicial."],["B\xFAsqueda","OpenSearch","Coincidencia l\xE9xica en espa\xF1ol, necesaria para referencias exactas como art\xEDculos o n\xFAmeros de decreto."],["Ingesta","Go, Docling, Tesseract","Go para descarga concurrente de documentos; Docling y OCR para PDF nativos y escaneados."],["Nube","Azure, Terraform","Servicios gestionados para c\xF3mputo, mensajer\xEDa y secretos; Terraform permite replicar el entorno en otra nube."]]},l=[{cat:"Legal",title:"Harvey",text:"Asistente para firmas de abogados, adoptado temprano por Allen & Overy. Su diferencial est\xE1 en adaptarse al trabajo diario de una firma."},{cat:"Legal",title:"CoCounsel",text:"Thomson Reuters lo conect\xF3 al contenido jur\xEDdico que la editorial ha curado durante d\xE9cadas, un corpus dif\xEDcil de replicar."},{cat:"Banca",title:"Morgan Stanley",text:"Asistente interno desarrollado con OpenAI para que los asesores consulten la investigaci\xF3n de la firma. En industrias reguladas es com\xFAn empezar por usuarios internos."},{cat:"Soporte",title:"Fin, de Intercom",text:"Responde con la documentaci\xF3n de cada empresa y transfiere la conversaci\xF3n a una persona cuando no puede resolverla."},{cat:"B\xFAsqueda",title:"Perplexity",text:"Muestra las fuentes junto a cada p\xE1rrafo y convirti\xF3 las citas visibles en algo que los usuarios ya esperan."},{cat:"Atenci\xF3n al cliente",title:"Klarna",text:"Automatiz\xF3 buena parte de su atenci\xF3n y despu\xE9s devolvi\xF3 espacio a agentes humanos. El ahorro no era la \xFAnica m\xE9trica que importaba."},{cat:"Legal",title:"Harvey Tenet",text:"Su primer modelo post-entrenado, presentado en agosto de 2026: parte de Kimi K3 y se ajusta para tareas legales largas de varios pasos. Representa el escal\xF3n m\xE1s costoso del espectro, justificado solo despu\xE9s de a\xF1os de operar con RAG."}];var u=[{id:4,title:"Arquitectura de un asistente legal con IA que cita sus fuentes",excerpt:"Conectar un LLM a una carpeta de PDFs toma una tarde; que no invente art\xEDculos es el trabajo real. La arquitectura de Normativa: ingesta estructurada, b\xFAsqueda h\xEDbrida, verificaci\xF3n determinista de citas y evaluaci\xF3n en cada despliegue.",date:"2026-09-15",category:"Arquitectura de software",tags:["IA","RAG","Arquitectura","C4",".NET","Python","Azure"],readTime:12,imageUrl:"img/blog/asistente-legal-ia-cover.svg?v=2",content:[{type:"text",content:"Conectar un modelo de lenguaje a una carpeta de PDFs toma una tarde. El resultado redacta bien, responde con seguridad y, tarde o temprano, cita un art\xEDculo que no existe. En la mayor\xEDa de dominios eso es una molestia. En derecho es un problema serio: una norma derogada presentada como vigente puede costarle un caso a alguien."},{type:"text",content:"Lo que sigue es una arquitectura para un asistente legal dise\xF1ado para evitar ese tipo de fallas. El ejemplo se llama Normativa y cubre legislaci\xF3n centroamericana, aunque las mismas decisiones sirven para cumplimiento bancario, seguros o soporte t\xE9cnico. En todos esos casos la respuesta tiene que poder rastrearse hasta un documento."},{type:"heading",content:"Lo que le falta al RAG b\xE1sico"},{type:"text",content:"El patr\xF3n habitual de recuperaci\xF3n aumentada (RAG) extrae el texto, lo parte en fragmentos, los guarda como vectores, recupera los m\xE1s parecidos a la pregunta y se los pasa al modelo. En una demo funciona. En producci\xF3n aparecen huecos concretos."},{type:"text",content:"Los fragmentos de longitud fija cortan art\xEDculos a la mitad. La b\xFAsqueda por similitud encuentra textos parecidos, pero falla con referencias exactas como \xABArt. 177\xBB o un n\xFAmero de decreto. Nada impide recuperar una versi\xF3n derogada. Y nadie revisa si las citas de la respuesta final existen."},{type:"figure",svg:e[0].svg,caption:e[0].caption},{type:"heading",content:"Cu\xE1nto conviene intervenir el modelo"},{type:"text",content:"RAG no es la \xFAnica forma de especializar un modelo de lenguaje, es un punto en un espectro m\xE1s amplio. En un extremo est\xE1 usar el modelo tal cual viene, sin tocarlo. En el otro est\xE1 entrenar uno propio desde su base. Entre medio hay dos escalones intermedios, y elegir el correcto es una decisi\xF3n de negocio antes que t\xE9cnica: cada paso hacia la derecha cuesta m\xE1s, tarda m\xE1s y ata el producto a un equipo de investigaci\xF3n propio."},{type:"figure",svg:e[1].svg,caption:e[1].caption},{type:"text",content:"Normativa se queda deliberadamente en el segundo escal\xF3n. El fine-tuning ayuda a que el modelo suene m\xE1s legal, pero no resuelve el problema real, que es la vigencia de la informaci\xF3n: un modelo reentrenado hoy queda desactualizado con la siguiente reforma igual que uno sin entrenar."},{type:"heading",content:"Contexto: qui\xE9n usa el sistema y de qu\xE9 depende"},{type:"text",content:"Antes de elegir tecnolog\xEDa conviene dibujar el contexto. Corresponde al primer nivel del modelo C4 y responde a dos preguntas: qui\xE9n interact\xFAa con el sistema y qu\xE9 servicios externos necesita para funcionar."},{type:"figure",svg:e[2].svg,caption:e[2].caption},{type:"text",content:"El actor que m\xE1s se pasa por alto es el editor legal. Alguien tiene que decidir qu\xE9 fuentes son oficiales, revisar las respuestas marcadas como dudosas y ampliar el conjunto de pruebas. Si ese rol no est\xE1 en el presupuesto, el sistema se degrada en pocos meses por buena que sea la tecnolog\xEDa."},{type:"heading",content:"Contenedores y tecnolog\xEDa"},{type:"text",content:"En el segundo nivel la plataforma se divide en piezas que se despliegan por separado. La frontera principal est\xE1 entre negocio e IA. Usuarios, planes, facturaci\xF3n y auditor\xEDa viven en una API de ASP.NET Core. Lo que habla con modelos de lenguaje vive en un servicio de Python, donde est\xE1n los SDK, las librer\xEDas de evaluaci\xF3n y buena parte de las herramientas del \xE1rea."},{type:"text",content:"Esa separaci\xF3n tiene un efecto pr\xE1ctico. El servicio del agente es el \xFAnico que conoce al proveedor de modelos, as\xED que pasar de Claude a GPT, o a un modelo abierto, no afecta la API ni el frontend."},{type:"figure",svg:e[3].svg,caption:e[3].caption},{type:"table",headers:s.headers,rows:s.rows},{type:"heading",content:"Ingesta: el art\xEDculo como unidad"},{type:"text",content:"La calidad de las respuestas depende m\xE1s de c\xF3mo entra la informaci\xF3n que del modelo que la usa. En Normativa la unidad m\xEDnima es el art\xEDculo completo, con su ubicaci\xF3n dentro de la ley y su estado de vigencia. Los art\xEDculos muy largos se dividen por incisos, nunca por conteo de caracteres."},{type:"text",content:"Cada documento guarda adem\xE1s una huella digital. Cuando el recolector nocturno detecta que cambi\xF3, solo se reprocesan los art\xEDculos afectados y la versi\xF3n anterior pasa al historial. Una reforma publicada hoy queda disponible al d\xEDa siguiente, y una consulta sobre hechos de 2019 puede resolverse con la norma que reg\xEDa en 2019."},{type:"figure",svg:e[4].svg,caption:e[4].caption},{type:"heading",content:"Una consulta, paso a paso"},{type:"text",content:"Cuando llega una pregunta, el agente primero decide qu\xE9 necesita buscar y usa una herramienta para hacerlo. La b\xFAsqueda combina similitud sem\xE1ntica con pgvector y coincidencia exacta con BM25 en OpenSearch. Los resultados se fusionan, se descartan los que no est\xE1n vigentes y un modelo de reranking deja los seis m\xE1s relevantes."},{type:"text",content:"Seis es un n\xFAmero deliberado. Entregarle cuarenta fragmentos al modelo no mejora la respuesta; el estudio Lost in the Middle mostr\xF3 que los modelos aprovechan peor la informaci\xF3n ubicada en el centro de un contexto largo."},{type:"figure",svg:e[5].svg,caption:e[5].caption},{type:"text",content:"La verificaci\xF3n es c\xF3digo determinista, sin IA de por medio. Extrae cada cita del borrador, la busca en PostgreSQL y confirma que existe y sigue vigente. Si alguna falla, el agente corrige la respuesta o indica que no tiene base suficiente. \xABNo encontr\xE9 una norma que regule este caso\xBB es un resultado v\xE1lido."},{type:"heading",content:"Infraestructura"},{type:"text",content:"La propuesta usa Azure por su presencia en empresas y banca de la regi\xF3n, pero el dise\xF1o no depende de esa nube. Los servicios corren en contenedores y la infraestructura est\xE1 definida en Terraform."},{type:"text",content:"Hay decisiones que pesan m\xE1s que el proveedor. Las bases de datos no son accesibles desde internet, las llaves de los modelos viven en Key Vault y ning\xFAn despliegue llega a producci\xF3n sin pasar la suite de evaluaci\xF3n."},{type:"figure",svg:e[6].svg,caption:e[6].caption},{type:"heading",content:"Evaluaci\xF3n antes de cada despliegue"},{type:"text",content:"Un cambio de prompt que mejora un tipo de pregunta puede empeorar otro sin que nadie lo note. Para detectarlo, el pipeline incluye preguntas reales redactadas con abogados, cada una con su respuesta esperada y los art\xEDculos que debe citar. Para empezar bastan unas 50; con el uso, el conjunto crece a varios cientos."},{type:"text",content:"Se mide la precisi\xF3n de las citas, la fidelidad a las fuentes, la latencia y el costo por consulta. Herramientas como RAGAS cubren buena parte de las dos primeras m\xE9tricas. Si alguna cae por debajo del umbral acordado, GitHub Actions bloquea el despliegue."},{type:"figure",svg:e[7].svg,caption:e[7].caption},{type:"heading",content:"Costo por consulta"},{type:"text",content:"Enviar todo al modelo m\xE1s capaz es la forma m\xE1s r\xE1pida de volver inviable el negocio. Preguntar cu\xE1ntos d\xEDas de aguinaldo corresponden y comparar dos reg\xEDmenes tributarios no requieren el mismo modelo."},{type:"text",content:"Normativa lo resuelve en dos capas. Una cach\xE9 sem\xE1ntica en Redis devuelve respuestas ya verificadas cuando llega una pregunta equivalente. Lo que no est\xE1 en cach\xE9 pasa por un clasificador que elige entre un modelo ligero y uno avanzado. Adem\xE1s, un tope de pasos y tokens por consulta mantiene el costo predecible, lo cual es necesario para definir planes de precios."},{type:"figure",svg:e[8].svg,caption:e[8].caption},{type:"heading",content:"Qui\xE9n ya trabaja as\xED"},{type:"text",content:"Varios productos que venden IA especializada a clientes exigentes aplican ideas parecidas."},{type:"cards",items:l},{type:"heading",content:"Errores frecuentes"},{type:"text",content:"Entrenar un modelo propio desde el inicio suele ser el primer impulso y rara vez el adecuado. Es caro, toma semanas y queda desactualizado con la siguiente reforma, mientras que un \xEDndice bien construido se actualiza en horas."},{type:"text",content:"Las arquitecturas con muchos agentes conversando entre s\xED se ven bien en una presentaci\xF3n y son dif\xEDciles de depurar. Un solo agente con herramientas claras cubre la gran mayor\xEDa de casos."},{type:"text",content:"Tambi\xE9n es com\xFAn guardar conversaciones completas en los logs. Nombres, n\xFAmeros de DUI y cuentas bancarias deben enmascararse antes de enviarse a un proveedor externo y antes de escribirse en disco."},{type:"heading",content:"C\xF3mo empezar"},{type:"text",content:"Esta arquitectura no se construye de una sola vez. Un primer prototipo puede cubrir una ley, con b\xFAsqueda h\xEDbrida y verificaci\xF3n de citas, y probarse contra 50 preguntas de un abogado en unas dos semanas. Si no convence a un especialista, el resto no importa. Si convence, cada pieza de los diagramas tiene un lugar claro para crecer."},{type:"heading",content:"Lecturas recomendadas"},{type:"list",items:["Lewis et al. (2020), Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks.","Anthropic (2024), Building Effective Agents.","Liu et al. (2024), Lost in the Middle: How Language Models Use Long Contexts.","Es et al. (2024), RAGAS: Automated Evaluation of Retrieval Augmented Generation.","Simon Brown, The C4 model for visualising software architecture."]}]},{id:1,title:"C\xF3mo uso IA para acelerar mi desarrollo en Angular y .NET",excerpt:"Mi experiencia real integrando herramientas de IA (Claude, Copilot) en mi flujo de trabajo diario como Full Stack Developer y c\xF3mo ha transformado mi productividad.",date:"2026-03-15",category:"IA & Productividad",tags:["IA","Claude","Angular",".NET","Productividad"],readTime:6,imageUrl:"img/blog/ia-desarrollo-cover.svg?v=2",content:[{type:"text",content:"Hace un a\xF1o ve\xEDa la IA generativa como una herramienta curiosa para generar texto. Hoy es parte integral de mi flujo de desarrollo. Desde la arquitectura de mi sistema ERP/POS Multi-Tenant hasta la creaci\xF3n de Prix-R9, la IA ha cambiado fundamentalmente c\xF3mo escribo, reviso y dise\xF1o software."},{type:"heading",content:"El cambio de mentalidad"},{type:"text",content:"El error m\xE1s com\xFAn que veo en desarrolladores es tratar a la IA como un autocompletado glorificado. Copiar y pegar c\xF3digo generado sin entenderlo es peor que escribirlo t\xFA mismo, porque introduces deuda t\xE9cnica invisible. Mi enfoque es diferente: uso la IA como un par programmer experto que me ayuda a pensar, no a evitar pensar."},{type:"text",content:'Por ejemplo, cuando dise\xF1\xE9 la arquitectura Multi-Tenant de mi sistema ERP, no le ped\xED a Claude "escr\xEDbeme un sistema Multi-Tenant". Le describ\xED mis restricciones (PostgreSQL, EF Core, separaci\xF3n de MasterContext y POSContext) y discutimos las opciones: \xBFbase de datos por tenant, schema por tenant, o discriminador por fila? Cada opci\xF3n tiene trade-offs reales que una IA puede ayudarte a evaluar si le das contexto suficiente.'},{type:"heading",content:"D\xF3nde la IA me ahorra m\xE1s tiempo"},{type:"list",items:["Scaffolding de componentes Angular: generar la estructura base de un componente standalone con signals, inputs y computed properties toma segundos.","Firmador electr\xF3nico DTE: depurar la especificaci\xF3n JSON del Ministerio de Hacienda y generar los schemas de validaci\xF3n fue 10x m\xE1s r\xE1pido con IA.","Tests unitarios: describir el comportamiento esperado y que la IA genere los test cases cubre edge cases que manualmente olvidar\xEDa.","Documentaci\xF3n de APIs: generar README, ejemplos de uso y documentaci\xF3n t\xE9cnica para librer\xEDas como RMapper y Prix-R9.","Refactoring: analizar c\xF3digo legacy, identificar patrones y proponer migraciones seguras."]},{type:"heading",content:"Mi flujo de trabajo con Claude"},{type:"text",content:"Claude Code es mi herramienta principal. Lo uso directamente en la terminal para trabajar con el codebase completo. El flujo t\xEDpico es:"},{type:"code",label:"Flujo t\xEDpico",content:`1. Describir la tarea con contexto del proyecto
2. Claude analiza los archivos relevantes
3. Discutimos la soluci\xF3n antes de implementar
4. Claude genera el c\xF3digo, yo reviso y ajusto
5. Build, test, deploy \u2014 todo desde la misma sesi\xF3n`},{type:"text",content:'Lo clave es dar contexto: no es lo mismo decir "hazme un servicio" que "necesito un servicio Angular que use rxResource para cargar proyectos del portafolio, con computed signals para filtrar por categor\xEDa y un m\xE9todo getById". La calidad del output es directamente proporcional a la calidad del prompt.'},{type:"heading",content:"Ejemplo real: Prix-R9"},{type:"text",content:"Cuando cre\xE9 Prix-R9 (mi CLI de pruebas de carga), la IA me ayud\xF3 a dise\xF1ar el sistema de extracci\xF3n de variables entre steps. El concepto era claro: ejecutar requests encadenados donde el response de uno alimenta el body del siguiente. Pero la implementaci\xF3n del JSONPath parser, el manejo de errores cascade y la generaci\xF3n del reporte ten\xEDan muchos edge cases que la IA me ayud\xF3 a cubrir sistem\xE1ticamente."},{type:"heading",content:"Lo que la IA no reemplaza"},{type:"list",items:["Decisiones de arquitectura: la IA propone, t\xFA decides. Nadie m\xE1s conoce las restricciones reales de tu proyecto.","Conocimiento del dominio: un sistema de facturaci\xF3n electr\xF3nica tiene reglas fiscales que solo un humano puede validar contra la normativa.","Code review cr\xEDtico: la IA puede generar c\xF3digo que compila y pasa tests pero tiene problemas de seguridad o rendimiento sutiles.","Relaciones con el equipo: la comunicaci\xF3n, mentoring y alineaci\xF3n de prioridades siguen siendo 100% humanas."]},{type:"heading",content:"Conclusi\xF3n"},{type:"text",content:"La IA no me hace un mejor programador autom\xE1ticamente. Me hace un programador m\xE1s r\xE1pido cuando ya s\xE9 lo que quiero construir. La clave es usarla como amplificador de habilidades existentes, no como reemplazo de la comprensi\xF3n. Si no puedes revisar cr\xEDticamente el c\xF3digo que genera, no est\xE1s listo para usarla en producci\xF3n."}]},{id:2,title:"Arquitectura Multi-Tenant en .NET 9: lecciones de mi sistema ERP/POS",excerpt:"C\xF3mo dise\xF1\xE9 un sistema empresarial SaaS con aislamiento por tenant, firmador electr\xF3nico propio y facturaci\xF3n conectada al Ministerio de Hacienda.",date:"2026-02-08",category:"Arquitectura",tags:[".NET 9","Multi-Tenant","ERP","Clean Architecture","PostgreSQL"],readTime:8,imageUrl:"img/blog/multi-tenant-cover.svg?v=2",content:[{type:"text",content:'Construir un sistema ERP/POS Multi-Tenant no es solo "agregar un TenantId a las tablas". Es dise\xF1ar desde cero para que m\xFAltiples negocios coexistan de forma segura, eficiente y escalable en una misma infraestructura. Estas son las lecciones que aprend\xED construyendo el m\xEDo con .NET 9 y PostgreSQL.'},{type:"heading",content:"La decisi\xF3n cr\xEDtica: estrategia de aislamiento"},{type:"text",content:"Existen tres enfoques principales para Multi-Tenancy en bases de datos:"},{type:"list",items:["Base de datos por tenant: m\xE1ximo aislamiento, pero costoso y complejo de mantener.","Schema por tenant: buen balance, pero las migraciones se vuelven complicadas.","Discriminador por fila (TenantId): simple, eficiente, pero requiere disciplina en queries."]},{type:"text",content:"Eleg\xED un enfoque h\xEDbrido: un MasterContext centralizado para la gesti\xF3n de negocios, sucursales, usuarios y configuraci\xF3n global, y un POSContext separado por tenant para las operaciones comerciales (ventas, compras, inventario). Esto me da aislamiento real de datos operativos sin la complejidad de manejar N bases de datos."},{type:"heading",content:"Clean Architecture como base"},{type:"text",content:"La estructura del proyecto sigue Clean Architecture estricta. Esto no es opcional en un sistema Multi-Tenant: la separaci\xF3n de capas garantiza que la l\xF3gica de negocio nunca dependa directamente de la infraestructura de tenancy."},{type:"code",label:"Estructura del proyecto",content:`\u251C\u2500\u2500 Domain/           # Entidades, Value Objects, Interfaces
\u2502   \u251C\u2500\u2500 Entities/     # Negocio, Sucursal, PuntoDeVenta, Producto
\u2502   \u2514\u2500\u2500 Interfaces/   # IRepository<T>, ITenantResolver
\u2502
\u251C\u2500\u2500 Application/      # Casos de uso, DTOs, Validators
\u2502   \u251C\u2500\u2500 Features/     # CQRS: Commands y Queries por m\xF3dulo
\u2502   \u2514\u2500\u2500 Mappings/     # Perfiles de mapeo DTO \u2194 Entity
\u2502
\u251C\u2500\u2500 Infrastructure/   # EF Core, Servicios externos
\u2502   \u251C\u2500\u2500 Persistence/  # MasterContext, POSContext, Migrations
\u2502   \u251C\u2500\u2500 DTE/          # Firmador electr\xF3nico, conexi\xF3n MH
\u2502   \u2514\u2500\u2500 Email/        # Servicio SMTP con templates
\u2502
\u2514\u2500\u2500 Api/              # Controllers, Middleware, Filters
    \u251C\u2500\u2500 Middleware/    # TenantResolutionMiddleware
    \u2514\u2500\u2500 Filters/      # TenantAuthorizationFilter`},{type:"heading",content:"Resoluci\xF3n din\xE1mica de tenant"},{type:"text",content:"El middleware de resoluci\xF3n de tenant extrae el identificador del JWT del usuario autenticado y configura el POSContext para apuntar a la base de datos correcta. Todo esto ocurre de forma transparente: los controllers y servicios nunca saben que est\xE1n en un entorno Multi-Tenant."},{type:"code",label:"TenantResolutionMiddleware.cs",content:`public async Task InvokeAsync(HttpContext context)
{
    var tenantId = context.User
        .FindFirst("tenant_id")?.Value;

    if (!string.IsNullOrEmpty(tenantId))
    {
        var resolver = context.RequestServices
            .GetRequiredService<ITenantResolver>();
        await resolver.SetTenantAsync(tenantId);
    }

    await _next(context);
}`},{type:"heading",content:"Firmador electr\xF3nico nativo"},{type:"text",content:"Una decisi\xF3n cr\xEDtica fue construir el firmador de Documentos Tributarios Electr\xF3nicos (DTE) directamente en el backend .NET en lugar de depender de un servicio externo. \xBFPor qu\xE9? Porque cada factura necesita ser firmada criptogr\xE1ficamente con el certificado .p12 del tenant en milisegundos. Un servicio externo introduce latencia, un punto de fallo adicional y costos recurrentes."},{type:"text",content:"El firmador usa System.Security.Cryptography para la firma y est\xE1 dise\xF1ado como servicio Multi-Tenant: cada negocio tiene su propio certificado .p12 almacenado de forma segura, y el pipeline de firma + env\xEDo al MH + recepci\xF3n de sellos se ejecuta en menos de 200ms."},{type:"heading",content:"Seguridad: JWT + roles granulares"},{type:"text",content:'La autenticaci\xF3n usa JWT Bearer con refresh tokens. La autorizaci\xF3n es granular por m\xF3dulo: un usuario puede tener permiso de "Ventas.Crear" sin tener "Ventas.Anular". Los permisos se resuelven desde el token para evitar consultas adicionales a la base de datos en cada request.'},{type:"heading",content:"Lecciones aprendidas"},{type:"list",items:["Soft-delete es obligatorio en Multi-Tenant: nunca elimines datos f\xEDsicamente. Los campos de auditor\xEDa (CreatedAt, UpdatedAt, DeletedAt, CreatedBy) son esenciales.","Las migraciones deben ser idempotentes: cuando tienes m\xFAltiples bases de datos de tenants, una migraci\xF3n que falla a la mitad debe poder re-ejecutarse sin romper nada.","Monitoreo por tenant: si no puedes ver m\xE9tricas por tenant individual, no puedes diagnosticar problemas. Cada log y cada m\xE9trica debe incluir el TenantId.","Provisi\xF3n automatizada: crear un nuevo tenant debe ser un proceso de un clic: base de datos, migraciones, datos semilla, certificados y configuraci\xF3n."]},{type:"text",content:"Multi-Tenant no es un patr\xF3n que agregas despu\xE9s. Es una decisi\xF3n arquitect\xF3nica que permea cada capa del sistema. Si la tomas desde el inicio y aplicas Clean Architecture con disciplina, el resultado es un sistema que escala en clientes sin escalar en complejidad operativa."}]},{id:3,title:"Prix-R9: c\xF3mo dise\xF1\xE9 mi CLI de pruebas de carga y lo publiqu\xE9 en NPM",excerpt:"La historia detr\xE1s de Prix-R9: por qu\xE9 ninguna herramienta existente me serv\xEDa, c\xF3mo lo dise\xF1\xE9 y qu\xE9 aprend\xED distribuy\xE9ndolo en NPM. Gratuito de usar, con el c\xF3digo en mis manos.",date:"2026-01-20",category:"Herramientas",tags:["Node.js","NPM","CLI","Pruebas de carga","DevTools"],readTime:6,imageUrl:"img/blog/prix-r9-npm-cover.svg?v=2",content:[{type:"text",content:"Todo empez\xF3 con una frustraci\xF3n: necesitaba probar la carga de un endpoint que requer\xEDa dos requests encadenados (subir archivo \u2192 ejecutar proceso) y ninguna herramienta existente lo hac\xEDa simple. JMeter es poderoso pero pesado, k6 requiere escribir scripts en JavaScript, y ab/wrk solo soportan requests simples. As\xED naci\xF3 Prix-R9."},{type:"text",content:"Antes de Prix-R9 ya hab\xEDa publicado RMapper, un micro mapeador para .NET en NuGet, as\xED que no era mi primer paquete ni mi primera vez distribuyendo una herramienta propia. Lo nuevo aqu\xED era el ecosistema: NPM, un binario de l\xEDnea de comandos y usuarios que lo instalan sin leer una l\xEDnea de mi c\xF3digo."},{type:"heading",content:"El problema real"},{type:"text",content:"En mi trabajo con el sistema ERP/POS, el flujo de carga de archivos era: 1) subir un CSV con movimientos, 2) extraer el processId del response, 3) enviar ese processId al endpoint de aprobaci\xF3n. Necesitaba simular 50 usuarios concurrentes ejecutando este flujo completo. Las herramientas existentes requer\xEDan scripting complejo o no soportaban la extracci\xF3n de valores entre requests."},{type:"heading",content:"La soluci\xF3n: JSON declarativo"},{type:"text",content:"Dise\xF1\xE9 Prix-R9 para que definir un escenario de carga fuera tan simple como escribir un JSON. Sin scripts, sin lenguajes propietarios. Describes tus steps, defines qu\xE9 extraer de cada response, y la herramienta se encarga del ramp-up, la concurrencia y las m\xE9tricas."},{type:"code",label:"escenario.json",content:`{
  "name": "Flujo de carga completo",
  "startRate": 5,
  "targetRate": 50,
  "rampUpTime": 10,
  "duration": 30,
  "steps": [
    {
      "name": "upload",
      "url": "https://api.example.test/blob/upload",
      "method": "post",
      "file": "./datos.csv",
      "filekey": "File",
      "extract": {
        "processId": "$.uploadFileProcessId"
      }
    },
    {
      "name": "execute",
      "url": "https://api.example.test/approvals/Execute",
      "method": "post",
      "body": {
        "UploadFileProcessId": "{{processId}}"
      }
    }
  ]
}`},{type:"heading",content:"El importador de cURL"},{type:"text",content:"Una feature que result\xF3 ser m\xE1s \xFAtil de lo esperado: prix-r9-curl. Convierte cualquier request exportado como cURL (desde el navegador, Postman o Swagger) a una configuraci\xF3n JSON lista para usar. Esto elimin\xF3 la barrera de entrada: en lugar de escribir JSON desde cero, exportas tu request funcional y la herramienta hace el resto."},{type:"code",label:"Terminal",content:`# Exporta cURL desde el navegador \u2192 convierte \u2192 ejecuta
prix-r9-curl -i curl-upload.txt -o upload.json
prix-r9-curl -i curl-execute.txt -o execute.json

# Combina los JSON en un escenario con steps
# y ejecuta la prueba de carga
prix-r9 --config escenario.json`},{type:"heading",content:"Publicar en NPM: lo que aprend\xED"},{type:"list",items:["Versionado sem\xE1ntico importa: pas\xE9 de 1.0.0 a 2.0.0 cuando a\xF1ad\xED steps (breaking change en el formato JSON). Los usuarios conf\xEDan en semver.","El README es tu landing page: si alguien no entiende qu\xE9 hace tu paquete en 30 segundos, seguir\xE1 buscando. Ejemplos concretos > descripciones abstractas.",'bin en package.json es magia: definir "prix-r9": "index.js" convierte tu script en un comando global. npm install -g y est\xE1 disponible en la terminal.',"Testear el paquete antes de publicar: npm pack --dry-run te muestra exactamente qu\xE9 archivos se incluir\xE1n. Evita publicar node_modules o archivos de desarrollo.","Publicar no obliga a abrir el repositorio: lo que subes es el paquete instalable, no tu historial de commits. Publicar y liberar el c\xF3digo son dos decisiones separadas.","No necesitas un monorepo ni CI/CD sofisticado para empezar: npm publish es suficiente para un paquete personal."]},{type:"heading",content:"Gratis no es lo mismo que open source"},{type:"text",content:"Conviene separar dos cosas que suelen confundirse. Prix-R9 es gratuito: cualquiera lo instala con npm install -g prix-r9 y lo usa sin pagar ni pedir permiso. Pero no es un proyecto open source: el c\xF3digo es m\xEDo, no hay repositorio p\xFAblico ni licencia que ceda derechos de modificaci\xF3n y redistribuci\xF3n."},{type:"text",content:"No es una postura ideol\xF3gica, es una decisi\xF3n pr\xE1ctica. Mantener un proyecto abierto es un trabajo en s\xED mismo: issues, pull requests, discusiones de dise\xF1o y compatibilidad hacia atr\xE1s con gente que no conoces. Prefiero invertir ese tiempo en que la herramienta resuelva bien el problema para el que la escrib\xED. Si alg\xFAn d\xEDa el proyecto justifica esa inversi\xF3n, abrir el c\xF3digo sigue siendo una puerta que puedo cruzar; cerrar uno ya abierto no lo es."},{type:"text",content:"Lo que s\xED asumo es la contraparte: si la herramienta es gratuita y cerrada, el soporte y la documentaci\xF3n son responsabilidad m\xEDa. Un README honesto sobre qu\xE9 hace y qu\xE9 no hace vale m\xE1s que un repositorio p\xFAblico abandonado."},{type:"heading",content:"Por qu\xE9 vale la pena publicar tus herramientas"},{type:"text",content:"Publicar un paquete te obliga a pensar como consumidor de tu propio c\xF3digo. Tienes que documentar, versionar, manejar edge cases y dise\xF1ar una API que alguien m\xE1s pueda entender. Es el mejor ejercicio de ingenier\xEDa de software que puedes hacer fuera de tu trabajo diario."},{type:"text",content:"No necesitas crear la pr\xF3xima librer\xEDa que usar\xE1n millones. RMapper y Prix-R9 son herramientas peque\xF1as que resuelven problemas espec\xEDficos que yo ten\xEDa. Y eso es suficiente: si te resolvi\xF3 un problema a ti, probablemente le resuelva el mismo problema a alguien m\xE1s."},{type:"heading",content:"Lo que sigue"},{type:"text",content:"Prix-R9 est\xE1 en v2.0.4 y sigo iterando. Las pr\xF3ximas features incluyen reportes en formato HTML con gr\xE1ficas de latencia y un modo watch para re-ejecutar pruebas autom\xE1ticamente cuando cambia la configuraci\xF3n. Si te interesa probarlo: npm install -g prix-r9."}]}],x=class a{postsResource=c({params:()=>({}),stream:()=>o(u).pipe(n(400))});getPostById(r){let t=this.postsResource.value();if(t&&Array.isArray(t))return t.find(d=>d.id===r)}static \u0275fac=function(t){return new(t||a)};static \u0275prov=i({token:a,factory:a.\u0275fac,providedIn:"root"})};export{x as a};
