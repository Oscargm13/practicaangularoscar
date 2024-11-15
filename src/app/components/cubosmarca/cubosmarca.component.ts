import { Component, DoCheck, OnInit } from '@angular/core';
import { Cubos } from '../../models/Cubo';
import { CubosservicesService } from '../../services/cubosservices.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-cubosmarca',
  templateUrl: './cubosmarca.component.html',
  styleUrl: './cubosmarca.component.css'
})
export class CubosmarcaComponent implements OnInit{
  public cubos!: Array<Cubos>;
  constructor(
    private service: CubosservicesService,
    private router: Router,
    private _activeRoute: ActivatedRoute
  ){}
  public loadCubosMarca():void {
    this._activeRoute.params.subscribe((params: Params) => {
			let marca = params["marca"];
			this.service.getCubosMarca(marca).subscribe(response => {
				this.cubos = response;
				console.log(response)
			})
		})
  }
  ngOnInit(): void {
      this.loadCubosMarca();
  }
  
}
