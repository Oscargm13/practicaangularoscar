import { Component, OnInit } from '@angular/core';
import { Cubos } from '../../models/Cubo';
import { CubosservicesService } from '../../services/cubosservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homecubos',
  templateUrl: './homecubos.component.html',
  styleUrl: './homecubos.component.css'
})
export class HomecubosComponent implements OnInit{
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
  ngOnInit(): void {
      this.loadCubos();
  }
}
