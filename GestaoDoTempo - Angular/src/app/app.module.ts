import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestaoDoTempoComponent } from './components/gestao-do-tempo/gestao-do-tempo.component';

@NgModule({
  declarations: [
    AppComponent,
    GestaoDoTempoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
