import { Component } from '@angular/core';
import { Compra } from '../../models/Compra';
import { CubosservicesService } from '../../services/cubosservices.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css'
})
export class ComprasComponent {
  public compras!: Array<Compra>;
  constructor(
    private service: CubosservicesService,
  ){}
  public loadCompras():void {
    this.service.getCompras ().subscribe(response => {
      console.log(response);
      this.compras = response;
    })
  }
  
  ngOnInit(): void {
      this.loadCompras();
  }
}
