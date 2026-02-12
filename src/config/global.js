export default {
  global: {
    Name: 'Usos y consumo energético según contexto',
    Description:
      'El componente formativo Usos y consumo energético según contexto proporcionará al aprendiz los fundamentos teóricos y metodológicos necesarios para realizar una evaluación inicial de la sostenibilidad en cualquier proceso productivo. Su enfoque se centra en el análisis económico del consumo energético mediante la interpretación de la factura colombiana y en la identificación de impactos ambientales, sociales y económicos asociados al Ciclo de Vida (ACV) del proceso. <br><br> Adicionalmente, se abordarán los principios de sostenibilidad: eficiencia, circularidad y resiliencia, como ejes para comprender la dinámica del uso responsable de los recursos. También se examinará el marco normativo colombiano y la composición de la matriz energética nacional, con el propósito de preparar al aprendiz para realizar diagnósticos pertinentes en la gestión y optimización de los recursos energéticos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de sostenibilidad y análisis de consumo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Consumo energético: concepto y análisis económico',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Aplicación práctica del análisis de consumo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Sostenibilidad: definición y características',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Ciclo de vida, impactos y principios de gestión sostenible',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Impactos asociados al uso energético',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Principios de sostenibilidad energética',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Contexto energético nacional y regulación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Regulación y sostenibilidad',
            hash: 't_3_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Fundamentos de sostenibilidad y análisis de consumo.',
      referencia:
        'Ahorro en la factura eléctrica, FP eficiencia energética y energía solar térmica. (2019). Ahorro en la factura eléctrica.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=dKWz5vFx_s8',
    },
    {
      tema: 'Ciclo de vida, impactos y principios de gestión sostenible.',
      referencia:
        'CFAS Arquitectura Sustentable. (2020). Materiales de bajo impacto, Episodio 3-6: Análisis de ciclo de vida.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YcRR1_ZMpJw',
    },
    {
      tema: 'Contexto energético nacional y regulación.',
      referencia:
        'Stockholm Environment Institute. (2023). ¿Qué es una “transición energética justa”? Definiciones desde La Paz, Cesar (Colombia).',
      tipo: 'Video',
      link: 'http://www.youtube.com/watch?v=zXiNIq1D--I',
    },
  ],
  glosario: [
    {
      termino: 'ACV (Análisis de Ciclo de Vida)',
      significado:
        'metodología que evalúa el impacto ambiental, social y económico de un producto, proceso o servicio a lo largo de todas sus etapas, desde la extracción de materias primas hasta la disposición final.',
    },
    {
      termino: 'Consumo activo (kWh)',
      significado:
        'la cantidad de energía que se convierte efectivamente en trabajo útil (luz, movimiento, calor). Es la base principal para el cobro en la factura.',
    },
    {
      termino: 'Consumo reactivo (kVArh)',
      significado:
        'la energía necesaria para la operación de equipos inductivos (motores, transformadores) para crear campos magnéticos. Su exceso genera penalizaciones económicas en la factura por ineficiencia.',
    },
    {
      termino: 'Costo Unitario (CU)',
      significado:
        'valor total que el usuario paga por cada kilovatio-hora (kWh) consumido. Se compone de los cargos regulados de generación, transmisión, distribución, comercialización, pérdidas y restricciones.',
    },
    {
      termino: 'Desarrollo sostenible',
      significado:
        'el desarrollo que satisface las necesidades del presente sin comprometer la capacidad de las futuras generaciones para satisfacer sus propias necesidades. Se basa en el equilibrio de los pilares ambiental, social y económico.',
    },
    {
      termino: 'Economía circular',
      significado:
        'modelo de producción y consumo que busca extender la vida útil de los productos y materiales, reintroduciéndolos al ciclo productivo (reutilizar, reciclar, rediseñar), en contraste con el modelo lineal ("tomar-hacer-desechar").',
    },
    {
      termino: 'Eficiencia energética',
      significado:
        'la acción de obtener el mismo nivel de servicio o de producción utilizando una menor cantidad de energía. Es el principio fundamental de la gestión energética sostenible.',
    },
    {
      termino: 'Energías Renovables No Convencionales (ERNC)',
      significado:
        'fuentes de energía limpias y virtualmente inagotables, como la solar fotovoltaica, eólica, geotérmica y de biomasa.',
    },
    {
      termino: 'Factor de emisión',
      significado:
        'coeficiente utilizado para cuantificar la cantidad de Gases de Efecto Invernadero (GEI) que se emiten por cada unidad de energía consumida o producida (ejemplo: kgCO2 / kWh).',
    },
    {
      termino: 'Huella de carbono',
      significado:
        'indicador que mide la totalidad de Gases de Efecto Invernadero (GEI) emitidos por efecto directo o indirecto de un individuo, organización, evento o producto.',
    },
    {
      termino: 'Matriz energética',
      significado:
        'la mezcla de las diferentes fuentes primarias utilizadas para generar la energía eléctrica en un país (ejemplo, hidroeléctrica, térmica, solar).',
    },
    {
      termino: 'Resiliencia energética',
      significado:
        'la capacidad de un sistema o empresa para absorber, recuperarse y adaptarse rápidamente ante fallas, desastres naturales o cualquier interrupción del suministro.',
    },
    {
      termino: 'URE (Uso Racional y Eficiente de la Energía)',
      significado:
        'concepto legal y técnico en Colombia (Ley 697 de 2001) que promueve prácticas para optimizar el consumo energético.',
    },
    {
      termino: 'VAN (Valor Actual Neto)',
      significado:
        'indicador financiero utilizado para determinar la viabilidad económica de una inversión (como un proyecto de eficiencia), calculando el valor presente de los flujos de caja futuros (ahorros) menos la inversión inicial.',
    },
  ],
  referencias: [
    {
      referencia:
        'Comisión de Regulación de Energía y Gas. (2020). Estructura tarifaria del servicio de energía eléctrica (Resolución CREG 015 de 2018 y sus modificaciones).',
      link:
        'https://gestornormativo.creg.gov.co/gestor/entorno/docs/resolucion_creg_0015_2018.htm',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2021). Ley 2099 de 2021: Por medio de la cual se dictan disposiciones para la transición energética, la dinamización del mercado energético, la reactivación económica del país y se dictan otras disposiciones (Diario Oficial No. 51.738).',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=166326',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2022). Plan Nacional de Desarrollo 2022–2026: Colombia potencia mundial de la vida (Capítulo sobre transición energética).',
      link: 'https://www.dnp.gov.co/plan-nacional-desarrollo/pnd-2022-2026',
    },
    {
      referencia:
        'Ellen MacArthur Foundation. (2017). Towards a circular economy: A business case for energy efficiency.',
      link:
        'https://content.ellenmacarthurfoundation.org/m/4384c08da576329c/original/Towards-a-circular-economy-Business-rationale-for-an-accelerated-transition.pdf',
    },
    {
      referencia:
        'Enel Colombia. (2025). Entendimiento de la factura de energía.',
      link:
        'https://www.enel.com.co/es/personas/entendimiento-de-factura-energia.html',
    },
    {
      referencia:
        'Equitel. (2025). ¿Sabes cuál es la diferencia entre kW y kVA? Cumandes.',
      link:
        'https://cumandes.equitel.com.co/blog/energia/sabes-cual-es-la-diferencia-entre-kw-y-kva/',
    },
    {
      referencia:
        'Example Life Cycle Assessment Stages Diagram. (2020). [Diagrama]. Wikimedia Commons.',
      link:
        'https://commons.wikimedia.org/wiki/File:Example_Life_Cycle_Assessment_Stages_diagram.png',
    },
    {
      referencia:
        'Línea Verde Huelva. (2018). Qué es el desarrollo sostenible.',
      link:
        'https://www.lineaverdehuelva.com/lv/consejos-ambientales/conciencia-ambientual/Que-es-el-desarrollo-sostenible.asp',
    },
    {
      referencia: 'Low Carbon Power. (2025). Colombia.',
      link: 'https://lowcarbonpower.org/es/region/Colombia',
    },
    {
      referencia:
        'Naciones Unidas. (1987). Informe de la Comisión Mundial sobre Medio Ambiente y Desarrollo: Nuestro futuro común (Informe Brundtland). Asamblea General de las Naciones Unidas.',
      link:
        'https://www.ecominga.uqam.ca/PDF/BIBLIOGRAPHIE/GUIDE_LECTURE_1/CMMAD-Informe-Comision-Brundtland-sobre-Medio-Ambiente-Desarrollo.pdf',
    },
    {
      referencia:
        'Oikonomou, V. A., Gielen, D. J., & Rübbelke, D. (2020). Energy efficiency and the three pillars of sustainable development: A concise review. Energy Policy, 137(1), 111100.',
      link: 'https://doi.org/10.1016/j.enpol.2019.111100',
    },
    {
      referencia:
        'Rincón, J. M., & Rincón, A. E. (2021). Análisis de ciclo de vida (ACV) como herramienta para la evaluación de sostenibilidad de proyectos energéticos. Revista de la Escuela Colombiana de Ingeniería, 120(2), 54–67.',
      link:
        'https://www.raco.cat/index.php/afinidad/article/download/276501/364433',
    },
    {
      referencia: 'Sucerman. (s.f.). Ciencias, unidad 4, lección 1.',
      link:
        'https://contenidos.sucerman.com/nivel2/ciencias/unidad4/leccion1.html',
    },
    {
      referencia:
        'XM. (2024). En el primer semestre del 2024, con el ingreso de 40 proyectos nuevos, se fortalece la seguridad del Sistema Interconectado Nacional.',
      link:
        'https://www.xm.com.co/noticias/7028-en-el-primer-semestre-del-2024-con-el-ingreso-de-40-proyectos-nuevos-se-fortalece-la',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gianmarco Serrano Cabarcas',
          cargo: 'Experto Temático Electricidad',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jenny Rocio Reyes Acevedo',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
