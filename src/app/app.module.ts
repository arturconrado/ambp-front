import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DiretoriaComponent } from './diretoria/diretoria.component';
import { AssociadosComponent } from './associados/associados.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DiretoriaComponent,
    AssociadosComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
