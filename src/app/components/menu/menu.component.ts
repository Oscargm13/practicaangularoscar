import { Component } from '@angular/core';
import { CubosservicesService } from '../../services/cubosservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  public marcas!: Array<string>;
  constructor(
    private service: CubosservicesService,
    private router: Router
  ){}
  public loadMarcas():void {
    this.service.getMarcas().subscribe(response => {
      console.log(response);
      this.marcas = response;
    })
  }
  ngOnInit(): void {
      this.loadMarcas();
  }
}
