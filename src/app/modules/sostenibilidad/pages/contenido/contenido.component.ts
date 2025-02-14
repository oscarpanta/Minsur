import { Component } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css'],
})
export class ContenidoComponent {
  cuidadoAmbiental = [
    {
      title: 'Emisiones y Energía',
      text: 'Asumimos la responsabilidad de conducir una producción sostenible de minerales que nos dirija hacia una economía baja en carbono.',
      image: 'assets/images/icon-globe.png',
      route: '/sostenibilidad/emisiones-energia'
    },
    {
      title: 'Agua y Biodiversidad',
      text: 'Fomentamos la gestión eficiente y responsable del recurso hídrico y la protección de ecosistemas que rodean nuestras operaciones.',
      image: 'assets/images/gota.png',
          route: '/sostenibilidad/agua-diversidad'
    },
    {
      title: 'Relaves',
      text: 'Aplicamos prácticas internacionales en el diseño, construcción, operación, supervisión y cierre de nuestras instalaciones de relaves.',
      image: 'assets/images/localizacion.png',
      route: '/sostenibilidad/relaves'

    },
  ];

  valorCompartido = [
    {
      title: 'Comunidades',
      text: 'Generamos vínculos de confianza con las comunidades vecinas a partir de un relacionamiento y una comunicación cercanas.',
      image: 'assets/images/icon_users.png',
      route: '/sostenibilidad/comunidad'


    },
    {
      title: 'Talento',
      text: 'Nuestro equipo es la fuerza impulsora de nuestro éxito. Juntos, construimos una cultura empresarial centrada en las personas.',
      image: 'assets/images/icon_star.png',
      route: '/sostenibilidad/talento'

    },
    {
      title: 'Gestión de proveedores',
      text: 'Nos enfocamos en garantizar una cadena de suministro responsable, alineando estándares ambientales, sociales y de gobernanza.',
      image: 'assets/images/icon_tuerca.png',
      route: '/sostenibilidad/gestion-proveedores'

    },
  ];
  gobernanzaResponsable = [
    {
      title: 'Ética y cumplimiento',
      text: 'Impulsamos una conducta ética y transparente en todas nuestras decisiones a través de sistemas de control que aseguran su cumplimiento, más allá de la legislación.',
      image: 'assets/images/icon_globe.png',
      route: '/sostenibilidad/etica-cumplimiento'

    },
    {
      title: 'Derechos Humanos',
      text: 'Aseguramos el respeto a los derechos humanos mediante una debida diligencia, evaluando y previniendo la vulneración de estos a lo largo de nuestra cadena de valor.',
      image: 'assets/images/gota.png',
      route: '/sostenibilidad/derechos-humanos'

    },
    {
      title: 'Transparencia',
      text: 'Promovemos un accionar transparente en todas nuestras decisiones de negocio y cadena de valor e implementamos los canales adecuados para asegurarlo.',
      image: 'assets/images/localizacion.png',
      route: '/sostenibilidad/transparencia'

    },
  ];

}
