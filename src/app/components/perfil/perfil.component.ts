import { Component } from '@angular/core';
import { Perfil } from '../../models/Perfil';
import { CubosservicesService } from '../../services/cubosservices.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  public perfil!: Perfil;
  constructor(
    private service: CubosservicesService,
  ){}
  public loadPerfil():void {
    this.service.getPerfil().subscribe(response => {
      console.log(response);
      this.perfil = response;
    })
  }
  
  ngOnInit(): void {
      this.loadPerfil();
  }
}
