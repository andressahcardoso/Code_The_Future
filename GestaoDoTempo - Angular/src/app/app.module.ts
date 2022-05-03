import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestaoDoTempoComponent } from './components/gestao-do-tempo/gestao-do-tempo.component';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';

import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
//  import { AutenticacaoUsuarioService } from './components/tela-login/autenticacao-usuario.service';


@NgModule({
  declarations: [
    AppComponent,
    GestaoDoTempoComponent,
    TelaLoginComponent,
    DialogComponent
  ],
  entryComponents: [DialogComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
