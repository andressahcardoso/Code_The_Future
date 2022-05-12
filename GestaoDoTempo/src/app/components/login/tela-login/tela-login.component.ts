import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControlName, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    templateUrl: './tela-login.component.html',
    styleUrls: ['./tela-login.component.scss']
})

export class TelaLoginComponent implements OnInit { 

    loginForm!: FormGroup;
    userName!: FormControlName;
    
    
    constructor(private formBuilder: FormBuilder, public router: Router ) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required], 
            password: ['', Validators.required]
        })
    }
    
    
    login() {

        if(this.loginForm.value.userName == "senac" && this.loginForm.value.password == "123"){
            console.log(this.loginForm.value)
            this.router.navigate(['gestaodotempo']);
        }

        else{
            console.log(this.loginForm.value)
            alert("Senha ou usuário inválido! ");
        }
    }
}