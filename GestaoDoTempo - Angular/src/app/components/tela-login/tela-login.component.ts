import { DOCUMENT } from '@angular/common';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss']
})

export class TelaLoginComponent implements OnInit {

  usuarioAutenticado: boolean = false;
  nome: any = '';
  senha: any = '';


  constructor(private router: Router) { }

 
  ngOnInit(): void {
  }

  fazerLogin(){

    this.nome = document.getElementsByName('username');

    console.log(this.nome)
    console.log(this.senha)

    if (this.nome === 'andressa' && this.senha === '123') {

      this.usuarioAutenticado = true;

      this.router.navigate(['/gestaodotempo'])

    }

    else {
      this.usuarioAutenticado = false;
    }

  }

        
}



