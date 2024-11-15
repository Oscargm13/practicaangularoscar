import { Component, OnInit } from '@angular/core';
import { Cubos } from '../../models/Cubo';
import { CubosservicesService } from '../../services/cubosservices.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Comentarios } from '../../models/Comentarios';

@Component({
  selector: 'app-detailscubo',
  templateUrl: './detailscubo.component.html',
  styleUrl: './detailscubo.component.css'
})
export class DetailscuboComponent implements OnInit{
  public cubos!: Array<Cubos>;
  public comentarios!: Comentarios;
  constructor(
    private service: CubosservicesService,
    private router: Router,
    private _activeRoute: ActivatedRoute
  ){}
  public loadCubos():void {
    this.service.getCubos().subscribe(response => {
      console.log(response);
      this.cubos = response;
    })
  }
  public loadComentarios():void {
    this._activeRoute.params.subscribe((params: Params) => {
			let id = params["idComentario"];
			this.service.getComentarios(id).subscribe(response => {
				this.comentarios = response;
				console.log(response)
			})
		})
  }
  ngOnInit(): void {
      this.loadCubos();
      this.loadComentarios();
  }
}
