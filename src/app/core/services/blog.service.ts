import { Injectable } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { delay, of } from 'rxjs';

export type BlogContentBlock =
  | { type: 'text'; content: string }
  | { type: 'heading'; content: string }
  | { type: 'subheading'; content: string }
  | { type: 'code'; content: string; label?: string }
  | { type: 'list'; items: string[] };

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: BlogContentBlock[];
  date: string;
  category: string;
  tags: string[];
  readTime: number;
  imageUrl?: string;
}

const MOCK_POSTS: BlogPost[] = [
  {
    id: 4,
    title: 'Arquitectura de un asistente legal con IA que cita sus fuentes',
    excerpt: 'Conectar un LLM a una carpeta de PDFs toma una tarde; que no invente artículos es el trabajo real. La arquitectura de Normativa: ingesta estructurada, búsqueda híbrida, verificación determinista de citas y evaluación en cada despliegue.',
    date: '2026-09-15',
    category: 'Arquitectura de software',
    tags: ['IA', 'RAG', 'Arquitectura', 'C4', '.NET', 'Python', 'Azure'],
    readTime: 12,
    content: [
      { type: 'text', content: 'Conectar un modelo de lenguaje a una carpeta de PDFs toma una tarde. El resultado redacta bien, responde con seguridad y, tarde o temprano, cita un artículo que no existe. En la mayoría de dominios eso es una molestia. En derecho es un problema serio: una norma derogada presentada como vigente puede costarle un caso a alguien.' },
      { type: 'text', content: 'Lo que sigue es una arquitectura para un asistente legal diseñado para evitar ese tipo de fallas. El ejemplo se llama Normativa y cubre legislación centroamericana, aunque las mismas decisiones sirven para cumplimiento bancario, seguros o soporte técnico. En todos esos casos la respuesta tiene que poder rastrearse hasta un documento.' },

      { type: 'heading', content: 'Lo que le falta al RAG básico' },
      { type: 'text', content: 'El patrón habitual de recuperación aumentada (RAG) extrae el texto, lo parte en fragmentos, los guarda como vectores, recupera los más parecidos a la pregunta y se los pasa al modelo. En una demo funciona. En producción aparecen huecos concretos.' },
      { type: 'text', content: 'Los fragmentos de longitud fija cortan artículos a la mitad. La búsqueda por similitud encuentra textos parecidos, pero falla con referencias exactas como «Art. 177» o un número de decreto. Nada impide recuperar una versión derogada. Y nadie revisa si las citas de la respuesta final existen.' },
      { type: 'code', label: 'RAG básico vs. Normativa', content: `RAG básico
  PDF -> Fragmentos -> Base vectorial -> LLM -> Respuesta
  No sabe si la norma cambió, no verifica citas
  y nadie mide si responde bien.

Normativa
  Fuentes oficiales      Recolector en Go
  Estructura y vigencia  Docling + Python
  Búsqueda híbrida       pgvector + OpenSearch
  Reranking              Cohere Rerank o bge
  Agente                 Claude o GPT + tools
  Verificador de citas   Reglas + PostgreSQL
  Respuesta con fuentes  Streaming al usuario
  Evaluación continua    Examen en cada deploy` },

      { type: 'heading', content: 'Cuánto conviene intervenir el modelo' },
      { type: 'text', content: 'RAG no es la única forma de especializar un modelo de lenguaje, es un punto en un espectro más amplio. En un extremo está usar el modelo tal cual viene, sin tocarlo. En el otro está entrenar uno propio desde su base. Entre medio hay dos escalones intermedios, y elegir el correcto es una decisión de negocio antes que técnica: cada paso hacia la derecha cuesta más, tarda más y ata el producto a un equipo de investigación propio.' },
      { type: 'code', label: 'Espectro de intervención', content: `Menor costo ------------------------------> Mayor costo

Usar             Contextualizar     Adaptar          Entrenar
LLM generalista  RAG + conocimiento Fine-tuning      Post-training
el modelo como   acceso a fuentes   reentreno con    modelo propio
viene            propias            ejemplos         multi-paso
ChatGPT,         Normativa,         LEGAL-BERT       Harvey Tenet,
Claude, Gemini   Westlaw, Lexis+                     Kimi K3` },
      { type: 'text', content: 'El fine-tuning y el post-training tienen sentido cuando ya existe suficiente volumen de tareas repetidas y presupuesto para investigación propia. Harvey llegó a ese punto después de años operando con RAG; para la mayoría de asistentes de dominio, RAG con verificación cubre el problema sin esa inversión.' },
      { type: 'text', content: 'Normativa se queda deliberadamente en el segundo escalón. El fine-tuning ayuda a que el modelo suene más legal, pero no resuelve el problema real, que es la vigencia de la información: un modelo reentrenado hoy queda desactualizado con la siguiente reforma igual que uno sin entrenar.' },

      { type: 'heading', content: 'Contexto: quién usa el sistema y de qué depende' },
      { type: 'text', content: 'Antes de elegir tecnología conviene dibujar el contexto. Corresponde al primer nivel del modelo C4 y responde a dos preguntas: quién interactúa con el sistema y qué servicios externos necesita para funcionar.' },
      { type: 'code', label: 'C4 - Nivel 1: contexto', content: `Actores
  Usuario          abogado, contador o ciudadano   consulta
  Editor legal     valida fuentes y respuestas     cura
  Empresa cliente  usuarios, planes y consumo      administra

                      [ NORMATIVA ]
                asistente legal con IA

Dependencias externas (costo mensual y riesgo de caída propio)
  Fuentes oficiales      Diario Oficial, Asamblea Legislativa
  Modelos de lenguaje    API de Anthropic u OpenAI
  WhatsApp Business      Cloud API de Meta
  Identidad              Microsoft Entra ID o Auth0
  Pagos                  suscripciones por plan` },
      { type: 'text', content: 'El actor que más se pasa por alto es el editor legal. Alguien tiene que decidir qué fuentes son oficiales, revisar las respuestas marcadas como dudosas y ampliar el conjunto de pruebas. Si ese rol no está en el presupuesto, el sistema se degrada en pocos meses por buena que sea la tecnología.' },

      { type: 'heading', content: 'Contenedores y tecnología' },
      { type: 'text', content: 'En el segundo nivel la plataforma se divide en piezas que se despliegan por separado. La frontera principal está entre negocio e IA. Usuarios, planes, facturación y auditoría viven en una API de ASP.NET Core. Lo que habla con modelos de lenguaje vive en un servicio de Python, donde están los SDK, las librerías de evaluación y buena parte de las herramientas del área.' },
      { type: 'text', content: 'Esa separación tiene un efecto práctico. El servicio del agente es el único que conoce al proveedor de modelos, así que pasar de Claude a GPT, o a un modelo abierto, no afecta la API ni el frontend.' },
      { type: 'code', label: 'C4 - Nivel 2: contenedores', content: `Entrada        Web app (Angular) - Panel editorial (Angular)
               Canal WhatsApp (webhook .NET)

Negocio        API principal        ASP.NET Core
IA             Servicio del agente  Python + FastAPI

Datos          PostgreSQL + pgvector  normas, vectores, auditoría
               OpenSearch             búsqueda léxica
               Redis                  caché
               Blob Storage           documentos

Ingesta        Recolector (Go, tarea programada)
               Ingesta (Python + Docling)
               Cola de eventos (Azure Service Bus)

Proveedores    Claude / GPT - Embeddings (Cohere o bge-m3)
Observabilidad Langfuse + Grafana` },
      { type: 'subheading', content: 'Por qué cada pieza' },
      { type: 'list', items: [
        'Interfaz — Angular y WhatsApp Cloud API: WhatsApp es el canal de mensajería predominante en la región; la interfaz web atiende consultas extensas.',
        'Negocio — ASP.NET Core: tipado fuerte, alto rendimiento y amplia adopción en entornos corporativos y financieros.',
        'Agente — Python y FastAPI: acceso directo a los SDK de Anthropic y OpenAI y a las librerías de evaluación.',
        'Datos — PostgreSQL con pgvector: normas, vectores y auditoría en un único motor, lo que reduce la complejidad operativa inicial.',
        'Búsqueda — OpenSearch: coincidencia léxica en español, necesaria para referencias exactas como artículos o números de decreto.',
        'Ingesta — Go, Docling y Tesseract: Go para descarga concurrente de documentos; Docling y OCR para PDF nativos y escaneados.',
        'Nube — Azure y Terraform: servicios gestionados para cómputo, mensajería y secretos; Terraform permite replicar el entorno en otra nube.'
      ] },

      { type: 'heading', content: 'Ingesta: el artículo como unidad' },
      { type: 'text', content: 'La calidad de las respuestas depende más de cómo entra la información que del modelo que la usa. En Normativa la unidad mínima es el artículo completo, con su ubicación dentro de la ley y su estado de vigencia. Los artículos muy largos se dividen por incisos, nunca por conteo de caracteres.' },
      { type: 'text', content: 'Cada documento guarda además una huella digital. Cuando el recolector nocturno detecta que cambió, solo se reprocesan los artículos afectados y la versión anterior pasa al historial. Una reforma publicada hoy queda disponible al día siguiente, y una consulta sobre hechos de 2019 puede resolverse con la norma que regía en 2019.' },
      { type: 'code', label: 'Pipeline de ingesta', content: `1. Detecta          revisa fuentes cada noche         Go
2. Guarda original  copia exacta del documento        Blob Storage
3. Extrae texto     PDF nativo y escaneos con OCR     Docling + OCR
4. Estructura       ley, capítulo, artículo, vigencia Python
5. Indexa           vectores y palabras clave         pgvector + BM25

Ficha resultante
  Ley        Código de Trabajo
  País       El Salvador
  Ubicación  Libro, capítulo, Art. 177
  Estado     vigente
  Reformas   historial con decretos
  Fuente     enlace al documento oficial
  Texto      íntegro, sin cortes
  Huella     hash para detectar cambios` },

      { type: 'heading', content: 'Una consulta, paso a paso' },
      { type: 'text', content: 'Cuando llega una pregunta, el agente primero decide qué necesita buscar y usa una herramienta para hacerlo. La búsqueda combina similitud semántica con pgvector y coincidencia exacta con BM25 en OpenSearch. Los resultados se fusionan, se descartan los que no están vigentes y un modelo de reranking deja los seis más relevantes.' },
      { type: 'text', content: 'Seis es un número deliberado. Entregarle cuarenta fragmentos al modelo no mejora la respuesta; el estudio Lost in the Middle mostró que los modelos aprovechan peor la información ubicada en el centro de un contexto largo.' },
      { type: 'code', label: 'Flujo de una consulta', content: `Usuario -> API principal -> Agente -> Búsqueda -> Modelo

1. Pregunta (WhatsApp o web)
2. La API envía pregunta + país + plan
3. El agente decide qué buscar y usa buscar_normativa
4. Búsqueda híbrida con filtros -> 6 artículos vigentes
5. El modelo redacta un borrador con citas
6. Verificación: cada cita se busca en PostgreSQL
     existe y está vigente -> se entrega
     no existe            -> corrige o se abstiene
7. Respuesta verificada + fuentes al usuario` },
      { type: 'text', content: 'La verificación es código determinista, sin IA de por medio. Extrae cada cita del borrador, la busca en PostgreSQL y confirma que existe y sigue vigente. Si alguna falla, el agente corrige la respuesta o indica que no tiene base suficiente. «No encontré una norma que regule este caso» es un resultado válido.' },

      { type: 'heading', content: 'Infraestructura' },
      { type: 'text', content: 'La propuesta usa Azure por su presencia en empresas y banca de la región, pero el diseño no depende de esa nube. Los servicios corren en contenedores y la infraestructura está definida en Terraform.' },
      { type: 'text', content: 'Hay decisiones que pesan más que el proveedor. Las bases de datos no son accesibles desde internet, las llaves de los modelos viven en Key Vault y ningún despliegue llega a producción sin pasar la suite de evaluación.' },
      { type: 'code', label: 'Despliegue en Azure', content: `Internet
  Front Door (CDN + WAF)
    Azure Container Apps
      API (.NET) - Agente (Python) - Ingesta (Python) - Recolector (Go)
    Red privada
      PostgreSQL Flexible Server - OpenSearch gestionado
      Azure Cache for Redis - Blob Storage - Service Bus - Key Vault

Entrega continua
  GitHub -> GitHub Actions (pruebas + examen de calidad) -> Terraform
  Monitoreo: Azure Monitor + Langfuse` },

      { type: 'heading', content: 'Evaluación antes de cada despliegue' },
      { type: 'text', content: 'Un cambio de prompt que mejora un tipo de pregunta puede empeorar otro sin que nadie lo note. Para detectarlo, el pipeline incluye preguntas reales redactadas con abogados, cada una con su respuesta esperada y los artículos que debe citar. Para empezar bastan unas 50; con el uso, el conjunto crece a varios cientos.' },
      { type: 'text', content: 'Se mide la precisión de las citas, la fidelidad a las fuentes, la latencia y el costo por consulta. Herramientas como RAGAS cubren buena parte de las dos primeras métricas. Si alguna cae por debajo del umbral acordado, GitHub Actions bloquea el despliegue.' },
      { type: 'code', label: 'Ciclo de evaluación', content: `Cambio (prompt, modelo o búsqueda)
  -> Examen: 500 preguntas (Python + pytest)
  -> ¿Pasa citas, fidelidad, latencia y costo?
       no -> se bloquea el despliegue
       sí -> Producción, con trazas de cada respuesta
  -> Revisión: un abogado marca errores
  -> Cada error encontrado se convierte en una prueba nueva` },

      { type: 'heading', content: 'Costo por consulta' },
      { type: 'text', content: 'Enviar todo al modelo más capaz es la forma más rápida de volver inviable el negocio. Preguntar cuántos días de aguinaldo corresponden y comparar dos regímenes tributarios no requieren el mismo modelo.' },
      { type: 'text', content: 'Normativa lo resuelve en dos capas. Una caché semántica en Redis devuelve respuestas ya verificadas cuando llega una pregunta equivalente. Lo que no está en caché pasa por un clasificador que elige entre un modelo ligero y uno avanzado. Además, un tope de pasos y tokens por consulta mantiene el costo predecible, lo cual es necesario para definir planes de precios.' },
      { type: 'code', label: 'Enrutamiento por complejidad', content: `Pregunta
  ¿Ya se respondió una equivalente? (Redis, caché semántica)
    sí -> respuesta inmediata, costo casi cero
    no -> Clasificador mide complejidad
            preguntas directas       -> modelo ligero
            análisis y comparaciones -> modelo avanzado

Tope de pasos y tokens por consulta y por cliente,
con alertas antes de llegar al límite.` },

      { type: 'heading', content: 'Quién ya trabaja así' },
      { type: 'list', items: [
        'Harvey (legal): asistente para firmas de abogados, adoptado temprano por Allen & Overy. Su diferencial está en adaptarse al trabajo diario de una firma.',
        'CoCounsel (legal): Thomson Reuters lo conectó al contenido jurídico que la editorial ha curado durante décadas, un corpus difícil de replicar.',
        'Morgan Stanley (banca): asistente interno desarrollado con OpenAI para que los asesores consulten la investigación de la firma. En industrias reguladas es común empezar por usuarios internos.',
        'Fin, de Intercom (soporte): responde con la documentación de cada empresa y transfiere la conversación a una persona cuando no puede resolverla.',
        'Perplexity (búsqueda): muestra las fuentes junto a cada párrafo y convirtió las citas visibles en algo que los usuarios ya esperan.',
        'Klarna (atención al cliente): automatizó buena parte de su atención y después devolvió espacio a agentes humanos. El ahorro no era la única métrica que importaba.',
        'Harvey Tenet (legal): su primer modelo post-entrenado, presentado en agosto de 2026; parte de Kimi K3 y se ajusta para tareas legales largas de varios pasos. Representa el escalón más costoso del espectro, justificado solo después de años de operar con RAG.'
      ] },

      { type: 'heading', content: 'Errores frecuentes' },
      { type: 'text', content: 'Entrenar un modelo propio desde el inicio suele ser el primer impulso y rara vez el adecuado. Es caro, toma semanas y queda desactualizado con la siguiente reforma, mientras que un índice bien construido se actualiza en horas.' },
      { type: 'text', content: 'Las arquitecturas con muchos agentes conversando entre sí se ven bien en una presentación y son difíciles de depurar. Un solo agente con herramientas claras cubre la gran mayoría de casos.' },
      { type: 'text', content: 'También es común guardar conversaciones completas en los logs. Nombres, números de DUI y cuentas bancarias deben enmascararse antes de enviarse a un proveedor externo y antes de escribirse en disco.' },

      { type: 'heading', content: 'Cómo empezar' },
      { type: 'text', content: 'Esta arquitectura no se construye de una sola vez. Un primer prototipo puede cubrir una ley, con búsqueda híbrida y verificación de citas, y probarse contra 50 preguntas de un abogado en unas dos semanas. Si no convence a un especialista, el resto no importa. Si convence, cada pieza de los diagramas tiene un lugar claro para crecer.' },

      { type: 'heading', content: 'Lecturas recomendadas' },
      { type: 'list', items: [
        'Lewis et al. (2020), Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks.',
        'Anthropic (2024), Building Effective Agents.',
        'Liu et al. (2024), Lost in the Middle: How Language Models Use Long Contexts.',
        'Es et al. (2024), RAGAS: Automated Evaluation of Retrieval Augmented Generation.',
        'Simon Brown, The C4 model for visualising software architecture.'
      ] }
    ]
  },
  {
    id: 1,
    title: 'Cómo uso IA para acelerar mi desarrollo en Angular y .NET',
    excerpt: 'Mi experiencia real integrando herramientas de IA (Claude, Copilot) en mi flujo de trabajo diario como Full Stack Developer y cómo ha transformado mi productividad.',
    date: '2026-03-15',
    category: 'IA & Productividad',
    tags: ['IA', 'Claude', 'Angular', '.NET', 'Productividad'],
    readTime: 6,
    content: [
      { type: 'text', content: 'Hace un año veía la IA generativa como una herramienta curiosa para generar texto. Hoy es parte integral de mi flujo de desarrollo. Desde la arquitectura de mi sistema ERP/POS Multi-Tenant hasta la creación de Prix-R9, la IA ha cambiado fundamentalmente cómo escribo, reviso y diseño software.' },

      { type: 'heading', content: 'El cambio de mentalidad' },
      { type: 'text', content: 'El error más común que veo en desarrolladores es tratar a la IA como un autocompletado glorificado. Copiar y pegar código generado sin entenderlo es peor que escribirlo tú mismo, porque introduces deuda técnica invisible. Mi enfoque es diferente: uso la IA como un par programmer experto que me ayuda a pensar, no a evitar pensar.' },
      { type: 'text', content: 'Por ejemplo, cuando diseñé la arquitectura Multi-Tenant de mi sistema ERP, no le pedí a Claude "escríbeme un sistema Multi-Tenant". Le describí mis restricciones (PostgreSQL, EF Core, separación de MasterContext y POSContext) y discutimos las opciones: ¿base de datos por tenant, schema por tenant, o discriminador por fila? Cada opción tiene trade-offs reales que una IA puede ayudarte a evaluar si le das contexto suficiente.' },

      { type: 'heading', content: 'Dónde la IA me ahorra más tiempo' },
      { type: 'list', items: [
        'Scaffolding de componentes Angular: generar la estructura base de un componente standalone con signals, inputs y computed properties toma segundos.',
        'Firmador electrónico DTE: depurar la especificación JSON del Ministerio de Hacienda y generar los schemas de validación fue 10x más rápido con IA.',
        'Tests unitarios: describir el comportamiento esperado y que la IA genere los test cases cubre edge cases que manualmente olvidaría.',
        'Documentación de APIs: generar README, ejemplos de uso y documentación técnica para librerías como RMapper y Prix-R9.',
        'Refactoring: analizar código legacy, identificar patrones y proponer migraciones seguras.'
      ] },

      { type: 'heading', content: 'Mi flujo de trabajo con Claude' },
      { type: 'text', content: 'Claude Code es mi herramienta principal. Lo uso directamente en la terminal para trabajar con el codebase completo. El flujo típico es:' },
      { type: 'code', label: 'Flujo típico', content: `1. Describir la tarea con contexto del proyecto
2. Claude analiza los archivos relevantes
3. Discutimos la solución antes de implementar
4. Claude genera el código, yo reviso y ajusto
5. Build, test, deploy — todo desde la misma sesión` },
      { type: 'text', content: 'Lo clave es dar contexto: no es lo mismo decir "hazme un servicio" que "necesito un servicio Angular que use rxResource para cargar proyectos del portafolio, con computed signals para filtrar por categoría y un método getById". La calidad del output es directamente proporcional a la calidad del prompt.' },

      { type: 'heading', content: 'Ejemplo real: Prix-R9' },
      { type: 'text', content: 'Cuando creé Prix-R9 (mi CLI de pruebas de carga), la IA me ayudó a diseñar el sistema de extracción de variables entre steps. El concepto era claro: ejecutar requests encadenados donde el response de uno alimenta el body del siguiente. Pero la implementación del JSONPath parser, el manejo de errores cascade y la generación del reporte tenían muchos edge cases que la IA me ayudó a cubrir sistemáticamente.' },

      { type: 'heading', content: 'Lo que la IA no reemplaza' },
      { type: 'list', items: [
        'Decisiones de arquitectura: la IA propone, tú decides. Nadie más conoce las restricciones reales de tu proyecto.',
        'Conocimiento del dominio: un sistema de facturación electrónica tiene reglas fiscales que solo un humano puede validar contra la normativa.',
        'Code review crítico: la IA puede generar código que compila y pasa tests pero tiene problemas de seguridad o rendimiento sutiles.',
        'Relaciones con el equipo: la comunicación, mentoring y alineación de prioridades siguen siendo 100% humanas.'
      ] },

      { type: 'heading', content: 'Conclusión' },
      { type: 'text', content: 'La IA no me hace un mejor programador automáticamente. Me hace un programador más rápido cuando ya sé lo que quiero construir. La clave es usarla como amplificador de habilidades existentes, no como reemplazo de la comprensión. Si no puedes revisar críticamente el código que genera, no estás listo para usarla en producción.' }
    ]
  },
  {
    id: 2,
    title: 'Arquitectura Multi-Tenant en .NET 9: lecciones de mi sistema ERP/POS',
    excerpt: 'Cómo diseñé un sistema empresarial SaaS con aislamiento por tenant, firmador electrónico propio y facturación conectada al Ministerio de Hacienda.',
    date: '2026-02-08',
    category: 'Arquitectura',
    tags: ['.NET 9', 'Multi-Tenant', 'ERP', 'Clean Architecture', 'PostgreSQL'],
    readTime: 8,
    content: [
      { type: 'text', content: 'Construir un sistema ERP/POS Multi-Tenant no es solo "agregar un TenantId a las tablas". Es diseñar desde cero para que múltiples negocios coexistan de forma segura, eficiente y escalable en una misma infraestructura. Estas son las lecciones que aprendí construyendo el mío con .NET 9 y PostgreSQL.' },

      { type: 'heading', content: 'La decisión crítica: estrategia de aislamiento' },
      { type: 'text', content: 'Existen tres enfoques principales para Multi-Tenancy en bases de datos:' },
      { type: 'list', items: [
        'Base de datos por tenant: máximo aislamiento, pero costoso y complejo de mantener.',
        'Schema por tenant: buen balance, pero las migraciones se vuelven complicadas.',
        'Discriminador por fila (TenantId): simple, eficiente, pero requiere disciplina en queries.'
      ] },
      { type: 'text', content: 'Elegí un enfoque híbrido: un MasterContext centralizado para la gestión de negocios, sucursales, usuarios y configuración global, y un POSContext separado por tenant para las operaciones comerciales (ventas, compras, inventario). Esto me da aislamiento real de datos operativos sin la complejidad de manejar N bases de datos.' },

      { type: 'heading', content: 'Clean Architecture como base' },
      { type: 'text', content: 'La estructura del proyecto sigue Clean Architecture estricta. Esto no es opcional en un sistema Multi-Tenant: la separación de capas garantiza que la lógica de negocio nunca dependa directamente de la infraestructura de tenancy.' },
      { type: 'code', label: 'Estructura del proyecto', content: `├── Domain/           # Entidades, Value Objects, Interfaces
│   ├── Entities/     # Negocio, Sucursal, PuntoDeVenta, Producto
│   └── Interfaces/   # IRepository<T>, ITenantResolver
│
├── Application/      # Casos de uso, DTOs, Validators
│   ├── Features/     # CQRS: Commands y Queries por módulo
│   └── Mappings/     # Perfiles de mapeo DTO ↔ Entity
│
├── Infrastructure/   # EF Core, Servicios externos
│   ├── Persistence/  # MasterContext, POSContext, Migrations
│   ├── DTE/          # Firmador electrónico, conexión MH
│   └── Email/        # Servicio SMTP con templates
│
└── Api/              # Controllers, Middleware, Filters
    ├── Middleware/    # TenantResolutionMiddleware
    └── Filters/      # TenantAuthorizationFilter` },

      { type: 'heading', content: 'Resolución dinámica de tenant' },
      { type: 'text', content: 'El middleware de resolución de tenant extrae el identificador del JWT del usuario autenticado y configura el POSContext para apuntar a la base de datos correcta. Todo esto ocurre de forma transparente: los controllers y servicios nunca saben que están en un entorno Multi-Tenant.' },
      { type: 'code', label: 'TenantResolutionMiddleware.cs', content: `public async Task InvokeAsync(HttpContext context)
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
}` },

      { type: 'heading', content: 'Firmador electrónico nativo' },
      { type: 'text', content: 'Una decisión crítica fue construir el firmador de Documentos Tributarios Electrónicos (DTE) directamente en el backend .NET en lugar de depender de un servicio externo. ¿Por qué? Porque cada factura necesita ser firmada criptográficamente con el certificado .p12 del tenant en milisegundos. Un servicio externo introduce latencia, un punto de fallo adicional y costos recurrentes.' },
      { type: 'text', content: 'El firmador usa System.Security.Cryptography para la firma y está diseñado como servicio Multi-Tenant: cada negocio tiene su propio certificado .p12 almacenado de forma segura, y el pipeline de firma + envío al MH + recepción de sellos se ejecuta en menos de 200ms.' },

      { type: 'heading', content: 'Seguridad: JWT + roles granulares' },
      { type: 'text', content: 'La autenticación usa JWT Bearer con refresh tokens. La autorización es granular por módulo: un usuario puede tener permiso de "Ventas.Crear" sin tener "Ventas.Anular". Los permisos se resuelven desde el token para evitar consultas adicionales a la base de datos en cada request.' },

      { type: 'heading', content: 'Lecciones aprendidas' },
      { type: 'list', items: [
        'Soft-delete es obligatorio en Multi-Tenant: nunca elimines datos físicamente. Los campos de auditoría (CreatedAt, UpdatedAt, DeletedAt, CreatedBy) son esenciales.',
        'Las migraciones deben ser idempotentes: cuando tienes múltiples bases de datos de tenants, una migración que falla a la mitad debe poder re-ejecutarse sin romper nada.',
        'Monitoreo por tenant: si no puedes ver métricas por tenant individual, no puedes diagnosticar problemas. Cada log y cada métrica debe incluir el TenantId.',
        'Provisión automatizada: crear un nuevo tenant debe ser un proceso de un clic: base de datos, migraciones, datos semilla, certificados y configuración.'
      ] },

      { type: 'text', content: 'Multi-Tenant no es un patrón que agregas después. Es una decisión arquitectónica que permea cada capa del sistema. Si la tomas desde el inicio y aplicas Clean Architecture con disciplina, el resultado es un sistema que escala en clientes sin escalar en complejidad operativa.' }
    ]
  },
  {
    id: 3,
    title: 'De cero a NPM: cómo creé Prix-R9 y por qué cada dev debería publicar un paquete',
    excerpt: 'La historia detrás de Prix-R9, mi CLI de pruebas de carga, y lo que aprendí publicando mi primer paquete en NPM.',
    date: '2026-01-20',
    category: 'Open Source',
    tags: ['Node.js', 'NPM', 'CLI', 'Open Source', 'Pruebas de carga'],
    readTime: 5,
    content: [
      { type: 'text', content: 'Todo empezó con una frustración: necesitaba probar la carga de un endpoint que requería dos requests encadenados (subir archivo → ejecutar proceso) y ninguna herramienta existente lo hacía simple. JMeter es poderoso pero pesado, k6 requiere escribir scripts en JavaScript, y ab/wrk solo soportan requests simples. Así nació Prix-R9.' },

      { type: 'heading', content: 'El problema real' },
      { type: 'text', content: 'En mi trabajo con el sistema ERP/POS, el flujo de carga de archivos era: 1) subir un CSV con movimientos, 2) extraer el processId del response, 3) enviar ese processId al endpoint de aprobación. Necesitaba simular 50 usuarios concurrentes ejecutando este flujo completo. Las herramientas existentes requerían scripting complejo o no soportaban la extracción de valores entre requests.' },

      { type: 'heading', content: 'La solución: JSON declarativo' },
      { type: 'text', content: 'Diseñé Prix-R9 para que definir un escenario de carga fuera tan simple como escribir un JSON. Sin scripts, sin lenguajes propietarios. Describes tus steps, defines qué extraer de cada response, y la herramienta se encarga del ramp-up, la concurrencia y las métricas.' },
      { type: 'code', label: 'escenario.json', content: `{
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
}` },

      { type: 'heading', content: 'El importador de cURL' },
      { type: 'text', content: 'Una feature que resultó ser más útil de lo esperado: prix-r9-curl. Convierte cualquier request exportado como cURL (desde el navegador, Postman o Swagger) a una configuración JSON lista para usar. Esto eliminó la barrera de entrada: en lugar de escribir JSON desde cero, exportas tu request funcional y la herramienta hace el resto.' },
      { type: 'code', label: 'Terminal', content: `# Exporta cURL desde el navegador → convierte → ejecuta
prix-r9-curl -i curl-upload.txt -o upload.json
prix-r9-curl -i curl-execute.txt -o execute.json

# Combina los JSON en un escenario con steps
# y ejecuta la prueba de carga
prix-r9 --config escenario.json` },

      { type: 'heading', content: 'Publicar en NPM: lo que aprendí' },
      { type: 'list', items: [
        'Versionado semántico importa: pasé de 1.0.0 a 2.0.0 cuando añadí steps (breaking change en el formato JSON). Los usuarios confían en semver.',
        'El README es tu landing page: si alguien no entiende qué hace tu paquete en 30 segundos, seguirá buscando. Ejemplos concretos > descripciones abstractas.',
        'bin en package.json es magia: definir "prix-r9": "index.js" convierte tu script en un comando global. npm install -g y está disponible en la terminal.',
        'Testear el paquete antes de publicar: npm pack --dry-run te muestra exactamente qué archivos se incluirán. Evita publicar node_modules o archivos de desarrollo.',
        'No necesitas un monorepo ni CI/CD sofisticado para empezar: npm publish es suficiente para un paquete personal.'
      ] },

      { type: 'heading', content: 'Por qué todo dev debería publicar un paquete' },
      { type: 'text', content: 'Publicar un paquete te obliga a pensar como consumidor de tu propio código. Tienes que documentar, versionar, manejar edge cases y diseñar una API que alguien más pueda entender. Es el mejor ejercicio de ingeniería de software que puedes hacer fuera de tu trabajo diario.' },
      { type: 'text', content: 'No necesitas crear la próxima librería que usarán millones. RMapper (mi micro mapeador para .NET en NuGet) y Prix-R9 son herramientas pequeñas que resuelven problemas específicos que yo tenía. Y eso es suficiente: si te resolvió un problema a ti, probablemente le resuelva el mismo problema a alguien más.' },

      { type: 'heading', content: 'Lo que sigue' },
      { type: 'text', content: 'Prix-R9 está en v2.0.4 y sigo iterando. Las próximas features incluyen reportes en formato HTML con gráficas de latencia y un modo watch para re-ejecutar pruebas automáticamente cuando cambia la configuración. Si te interesa probarlo: npm install -g prix-r9.' }
    ]
  }
];

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public postsResource = rxResource({
    params: () => ({}),
    stream: () => of(MOCK_POSTS).pipe(delay(400))
  });

  public getPostById(id: number): BlogPost | undefined {
    const posts = this.postsResource.value();
    if (posts && Array.isArray(posts)) {
      return posts.find((p: BlogPost) => p.id === id);
    }
    return undefined;
  }
}
