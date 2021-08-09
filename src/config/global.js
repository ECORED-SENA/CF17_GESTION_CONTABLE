export default {
  global: {
    componenteFormativo:
      'Identificación del sistema de costeo y elaboración del estado de costos',
    descripcionCurso:
      'Se continúa con la identificación y comprensión de los costos de producción, y así, identificar, aplicar, analizar y detallar los tipos y sistemas de costo, establecer el sistema de costos más adecuado y acorde con las características de la producción de la empresa, para lograr generar el estado de costos de producción que sirva para la toma de decisiones de la gerencia.',
    imagenBannerPrincipal: require('@/assets/curso/inicio-img.svg'),
    fondoBannerPrincipal: require('@/assets/curso/inicio-bg.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Costos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de costos',
            hash: 't1-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Sistemas de costeo',
            hash: 't1-2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Estado de costos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Estructura del estado de costos',
            hash: 't2-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Análisis del punto de equilibrio',
            hash: 't2-2',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia:
        'Borda, J. y Otálora, J. (2013, 10 diciembre). Sistema de costos ABC: una herramienta para el proceso de toma de decisiones para las cooperativas de ahorro y crédito de la ciudad de Barranquilla. Revista Civilizar de Empresa y Economía, 4(8).',
      link:
        'https://revistas.usergioarboleda.edu.co/index.php/ceye/article/view/257',
    },
    {
      referencia:
        'Estupiñán, R. (2013). NIC/NIFF Transición y adopción en la empresa. Ediciones de la U.',
    },
    {
      referencia:
        'Gerencie.com. (2020, 10 octubre). ¿Qué es un sistema de costos? ',
      link: 'https://www.gerencie.com/que-es-un-sistema-de-costos.html',
    },
    {
      referencia:
        'Gómez, O. (2005). Contabilidad de costos. McGraw-Hill Education.',
    },
    {
      referencia:
        'Miller, J. y Vollman, T. (1985). “The hidden Factory”. Harvard Business Review, 63(1), p. 142-150.',
    },
    {
      referencia:
        'Porter, M. E. (1998). Competitive Advantage: Creating and Sustaining Superior Performance. Free Press.',
    },
    {
      referencia:
        'Sinisterra, G. (2006). Contabilidad de costos. Ecoe Ediciones.',
      link:
        'https://www-digitaliapublishing-com.bdigital.sena.edu.co/a/29890/contabilidad-de-costos',
    },
    {
      referencia:
        'Sinisterra, G. (2017). Contabilidad de costos con aproximaciones a las normas internacionales. Ecoe Ediciones.',
      link:
        'https://www-digitaliapublishing-com.bdigital.sena.edu.co/a/66611/contabilidad-de-costos--con-aproximacion-a-las-normas-internacionales--2a-ed.-',
    },
    {
      referencia:
        'Toro, F. J. (2016). Costos Abc y presupuestos: Herramientas para la productividad. Ecoe Ediciones.',
      link:
        'https://www-digitaliapublishing-com.bdigital.sena.edu.co/a/40831/costos-abc-y-presupuestos--herramientas-para-la-productividad--2a-ed',
    },
    {
      referencia:
        'Valladares, A. (2018, 7 septiembre). La importancia del punto de equilibrio. Alvaro Valladares. ',
      link: 'https://alvarovalladares.com/punto-de-equilibrio/',
    },
  ],
  glosario: [
    {
      termino: 'Centro de costos',
      significado:
        'es una división funcional, el costo unitario se calcula para dicha división, dividiendo el costo total acumulado de ese centro de costos entre la cantidad de sus unidades y antes de su transferencia a un centro de costos subsecuente. Al final, se suman algebraicamente los costos de cada centro. ',
    },
    {
      termino: 'Contabilidad de costos',
      significado:
        'rama de la contabilidad general que sintetiza y registra los costos de las empresas manufactureras, de servicios y comerciales, con el fin de que puedan medirse, controlarse e interpretarse.',
    },
    {
      termino: 'Costeo por operaciones',
      significado:
        'es un sistema de acumulación de costos por órdenes de trabajo, en el cual los costos se acumulan por estaciones de operaciones o de trabajo. ',
    },
    {
      termino: 'Costeo por proyectos',
      significado:
        'forma del sistema de acumulación de costos por órdenes de trabajo que se utiliza para contabilizar la construcción a largo plazo o los contratos de servicios prestados definidos como proyectos. ',
    },
    {
      termino: 'Costo',
      significado:
        'son los egresos necesarios para adquirir o producir bienes y servicios. ',
    },
    {
      termino: 'Costo de conversión',
      significado:
        'son los costos de la mano de obra directa y los costos indirectos de fabricación que se requieren para convertir la materia prima (material directo) en un producto. ',
    },
  ],
  complementario: [
    {
      texto:
        'BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      texto:
        'Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto:
        'Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.',
      tipo: 'Artículo científico',
      link: 'https://www.google.com/',
    },
    {
      texto: 'Economía de Rosquilla. (s.f.).',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto: '2 minutos para entender el desarrollo sostenible – Spanish',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Norberto Alejo Cante',
        cargo: 'Instructor',
        centro: 'Centro de Servicios Financieros-Regional Distrito Capital',
      },
      {
        nombre: 'Jorge Alberto Leal Tocora',
        cargo: 'Instructor',
        centro: 'Centro de Servicios Financieros-Regional Distrito Capital',
      },
      {
        nombre: 'Jasbleidy Contreras Beltrán',
        cargo: 'Instructor',
        centro: 'Centro de Servicios Financieros-Regional Distrito Capital',
      },
      {
        nombre: 'Maryuri Agudelo Franco',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Vilma Lucía Perilla M.',
        cargo: 'Revisora pedagógica y metodológica',
        centro: 'Centro de gestión Industrial – Regional Distrito Capital',
      },
      {
        nombre: 'Uriel Darío González Montoya',
        cargo: 'Acompañamiento pedagógico',
        centro: 'Regional Tolima – Centro Agropecuario La Granja',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
