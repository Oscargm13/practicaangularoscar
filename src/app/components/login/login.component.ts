import { Component, ElementRef, ViewChild } from '@angular/core';
import { Login } from '../../models/Login';
import { CubosservicesService } from '../../services/cubosservices.service';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild("cajauser") cajaUsuario!: ElementRef;
	@ViewChild("cajapass") cajaPass!: ElementRef;
	public login!: Login
	constructor(
		private _service: CubosservicesService,
		private router: Router
	){}
	public getToken(): void {
		let user = this.cajaUsuario.nativeElement.value;
		let pass = this.cajaPass.nativeElement.value;
		let login = new Login(user, pass);
		this._service.getToken(login).subscribe(response => {
			environment.token = response.response;
			console.log(response.response);
			this.router.navigate(["/perfil"])
		})
	}
}
