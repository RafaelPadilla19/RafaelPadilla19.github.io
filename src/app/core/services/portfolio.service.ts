import { Injectable, computed } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { delay, of } from 'rxjs';

export type ProjectType = 'video' | 'mobile-app' | 'web-app' | 'cover';

export interface Project {
  id: number;
  title: string;
  description: string;
  details?: string;
  imageUrl: string;
  videoUrl?: string;
  screenshots?: string[];
  technologies: string[];
  githubUrl?: string;
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
    imageUrl: 'img/portfolio/pos-fe/POS.png',
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
    imageUrl: 'img/portfolio/voxu/voxu-header.png',
    screenshots: [
      'img/portfolio/voxu/image1.png',
      'img/portfolio/voxu/image2.png',
      'img/portfolio/voxu/image3.png',
      'img/portfolio/voxu/image4.png',
      'img/portfolio/voxu/image5.png',
      'img/portfolio/voxu/image6.png'
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
    imageUrl: 'img/portfolio/QuienQuiere.png',
    videoUrl: 'https://www.youtube.com/embed/HnC7OEkf1DA',
    technologies: ['C#', '.NET Framework', 'Windows Forms'],
    category: 'universitario',
    type: 'web-app'
  },
  {
    id: 3,
    title: 'Sistema Auto-hotel',
    description: 'Software administrativo para auto-hoteles. Gestiona compras, ventas, arqueos, habitaciones y promociones.',
    imageUrl: 'img/portfolio/DIAMONProyecto.png',
    videoUrl: 'https://www.youtube.com/embed/xEfrTv3KqzY',
    technologies: ['C#', 'Entity Framework', 'SQL Server', 'Windows Forms'],
    category: 'universitario',
    type: 'web-app'
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
    imageUrl: 'img/portfolio/ecommer.png',
    videoUrl: 'https://www.youtube.com/embed/NxJVowGU8Ys',
    technologies: ['Java', 'Hibernate (HQL)', 'REST Web Services', 'MySQL', 'JSP', 'Bootstrap'],
    category: 'universitario',
    type: 'web-app'
  }
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
