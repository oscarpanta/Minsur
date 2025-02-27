import { Component, Input, OnInit } from '@angular/core';

import { BreadcrumbService } from 'src/app/core/services/breadcrumb.service';
interface Breadcrumb {
  label: string;
  url: string;
}
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit{
    @Input() link: string = '/';

  constructor(public breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    // Forzar la actualización del breadcrumb al iniciar el componente
    this.breadcrumbService.breadcrumbs = this.breadcrumbService.buildBreadcrumb(this.breadcrumbService.activatedRoute.root);
  }
}
