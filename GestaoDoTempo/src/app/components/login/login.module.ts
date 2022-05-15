import { NgModule } from '@angular/core';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [ TelaLoginComponent ],
    imports: [ CommonModule, ReactiveFormsModule ]
})
export class LoginModule { }