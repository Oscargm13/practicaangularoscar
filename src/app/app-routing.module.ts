import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecubosComponent } from './components/homecubos/homecubos.component';
import { LoginComponent } from './components/login/login.component';
import { CubosmarcaComponent } from './components/cubosmarca/cubosmarca.component';
import { DetailscuboComponent } from './components/detailscubo/detailscubo.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ComprasComponent } from './components/compras/compras.component';
import { ComprarComponent } from './components/comprar/comprar.component';

const routes: Routes = [
  {path: '', component: HomecubosComponent},
  {path: 'cubosmarca/:marca', component: CubosmarcaComponent},
  {path: 'details/:id', component: DetailscuboComponent},
  {path: 'login', component: LoginComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'compras', component: ComprasComponent},
  {path: 'comprar', component: ComprarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
