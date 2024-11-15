import { Injectable } from '@angular/core';
import { Cubos } from '../models/Cubo';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import axios from 'axios';
import { Login } from '../models/Login';
import { Compra } from '../models/Compra';

@Injectable({
  providedIn: 'root',
})
export class CubosservicesService {
  public cubo!: Cubos;
  constructor() {}

  public getCubos(): Observable<any> {
    let request = 'api/cubos';
    let url = environment.urlApiCubos + request;
    return new Observable((observer) => {
      axios.get(url).then((response) => {
        console.log(response.data);
        observer.next(response.data);
        observer.complete();
      });
    });
  }

  public getMarcas(): Observable<any> {
    let request = 'api/cubos/marcas';
    let url = environment.urlApiCubos + request;
    return new Observable((observer) => {
      axios.get(url).then((response) => {
        console.log(response.data);
        observer.next(response.data);
        observer.complete();
      });
    });
  }

  public getCubosMarca(marca: string): Observable<any> {
    let request = 'api/cubos/cubosmarca/' + marca;
    let url = environment.urlApiCubos + request;
    return new Observable((observer) => {
      axios.get(url).then((response) => {
        console.log(response.data);
        observer.next(response.data);
        observer.complete();
      });
    });
  }

  public getComentarios(id: number): Observable<any> {
    const url = environment.urlApiCubos + id;

    return new Observable((observer) => {
      axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          console.error(error);
          observer.error(error);
        });
    });
  }

  getToken(login: Login): Observable<any> {
    let request = '/api/Manage/Login';
    let url = environment.urlApiCubos + request;
    return new Observable((observer) => {
      axios.post(url, login).then((response) => {
        observer.next(response.data);
        observer.complete();
      });
    });
  }

  getPerfil(): Observable<any> {
    let tokken = environment.token;
    let request = '/api/Manage/PerfilUsuario';
    let url = environment.urlApiCubos + request;
    return new Observable((observer) => {
      axios
        .get(url, {
          headers: {
            Authorization: 'Bearer ' + tokken,
          },
        })
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        });
    });
  }
  getCompras(): Observable<any>{
    let tokken = environment.token;
    let request = 'api/Compra/ComprasUsuario';
    let url = environment.urlApiCubos + request;
    return new Observable((observer) => {
      axios
        .get(url, {
          headers: {
            Authorization: 'Bearer ' + tokken,
          },
        })
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        });
    });
  }
  postCompra(idCubo:number): Observable<any>{
    let compra = ""
    let tokken = environment.token;
    let request = 'api/compra/insertarpedido/' + idCubo;
    let url = environment.urlApiCubos + request;
    return new Observable((observer) => {
      axios
        .post(url, compra,{
          headers: {
            Authorization: 'Bearer ' + tokken,
          },
        })
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        });
    });
  }
}

