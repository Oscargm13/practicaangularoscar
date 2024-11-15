import { Component, ViewChild, ElementRef } from '@angular/core';
import { Compra } from '../../models/Compra';
import { CubosservicesService } from '../../services/cubosservices.service';
import { Cubos } from '../../models/Cubo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrl: './comprar.component.css'
})
export class ComprarComponent {
  @ViewChild("selectId") selectId!: ElementRef;
  public compra!: Compra;
  public cubos!: Array<Cubos>;
  constructor(
    private service: CubosservicesService,
    private router: Router
  ){}
  public loadCubos():void {
    this.service.getCubos().subscribe(response => {
      console.log(response);
      this.cubos = response;
    })
  }
  public comprar():void {
    let id = this.selectId.nativeElement.value;
    this.service.postCompra(id).subscribe(response => {
      console.log(response + "insertado");
      this.router.navigate(["/compras"]);
    })
  }
  
  ngOnInit(): void {
      this.loadCubos();
  }
}
