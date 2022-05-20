import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestaoDoTempoComponent } from './components/gestao-do-tempo/gestao-do-tempo.component';
import { TelaLoginComponent } from './components/login/tela-login/tela-login.component';

const routes: Routes = [
  {path: '', component: TelaLoginComponent},
  {path: 'gestaodotempo', component: GestaoDoTempoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
