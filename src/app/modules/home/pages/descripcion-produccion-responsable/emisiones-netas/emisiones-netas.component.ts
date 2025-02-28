import { Component } from '@angular/core';

@Component({
  selector: 'app-emisiones-netas',
  templateUrl: './emisiones-netas.component.html',
  styleUrls: ['./emisiones-netas.component.css']
})
export class EmisionesNetasComponent {
  descripcion_emisiones_netas = [
    {
      title: 'B2',
      text: 'La industria minera tiene la gran responsabilidad de conducir la producción sostenible de minerales que permitan la transición hacia una economía baja en carbono.',
      image: 'assets/images/icon-globe.png',
      route: '/sostenibilidad/etica-cumplimiento'

    },
    {
      title: 'Ore Sorting',
      text: 'Nos comprometemos a aplicar prácticas internacionalmente reconocidas en el diseño, construcción, operación, supervisión y cierre de nuestras instalaciones de relaves.',
      image: 'assets/images/localizacion.png',
      route: '/sostenibilidad/derechos-humanos'

    },
    {
      title: 'Gestión del agua',
      text: 'En el marco de nuestras responsabilidades, fomentamos una gestión eficiente del agua en todas nuestras operaciones.',
      image: 'assets/images/gota.png',
      route: '/sostenibilidad/transparencia'

    },
  ];
}
