import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomecubosComponent } from './components/homecubos/homecubos.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { CubosmarcaComponent } from './components/cubosmarca/cubosmarca.component';
import { DetailscuboComponent } from './components/detailscubo/detailscubo.component';
import { FormsModule } from '@angular/forms';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ComprasComponent } from './components/compras/compras.component';
import { ComprarComponent } from './components/comprar/comprar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomecubosComponent,
    MenuComponent,
    LoginComponent,
    CubosmarcaComponent,
    DetailscuboComponent,
    PerfilComponent,
    ComprasComponent,
    ComprarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
