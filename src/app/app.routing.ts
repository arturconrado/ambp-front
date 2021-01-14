import { AssociadosComponent } from './associados/associados.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from "@angular/router";
import { DiretoriaComponent } from './diretoria/diretoria.component';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
  {path: 'diretoria', component: DiretoriaComponent},
  {path: 'associados', component: AssociadosComponent},
  {path: '', component: HomeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
