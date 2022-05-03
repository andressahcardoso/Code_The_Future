import { DOCUMENT } from '@angular/common';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@Component({
  selector: 'app-gestao-do-tempo',
  templateUrl: './gestao-do-tempo.component.html',
  styleUrls: ['./gestao-do-tempo.component.scss']
})

export class GestaoDoTempoComponent implements OnInit {

    local = "Local Indefinido";

    Hora1: any = 0;
    Minuto1: any = 0;
    Hora2: any = 0;
    Minuto2: any = 0;
    HoraInicio: any = 0;
    HoraFim: any = 0;
    SomaMinutos: any = 0;
    HoraTotal: any = 0;
    MinutoTotal: any = 0;
    cronometro_horario: any = 0;

    fimBtn: any = 0;
    iniciarBtn: any = 0
    horario: any = 0;
    tempo_total: any = 0;
    cronometro: any = 0;

    segundos: number = 0;
    minutos: number = 0;
    horas: number = 0;

    text: any = 0;

    cor: string = "";
    border_color: string = "";
    iniciobtn: string = "";
    fimbtn: string = "Desativar_Botoes";
    Informaçoes: any = "";
    

    constructor(public dialog: MatDialog) { }

 
  ngOnInit(): void {
  }

    hist: any = [];


    // INÍCIO | Local.

    trabalho(){
        this.local = "Trabalho";
    }

    escola(){
        this.local = "Escola";
    }

    casa(){
        this.local = "Casa";
    }
 
    outro(){
        this.local = "Local Indefinido";
    }

    // INÍCIO | Botão de iniciar.

    inicio() {

        this.iniciobtn="Desativar_Botoes"
        this.fimbtn="Ativar_Botoes"

        // INÍCIO | Mudar a cor da barra de status.

        this.cor="Barra_Status_Ativo"
        this.border_color="Borda_Cronometro_Ativo"


        // INÍCIO | Horário inicial.

        let today=new Date();
        let h=today.getHours();
        let m=today.getMinutes();

        document.getElementById("horario")!.innerText =  `ATIVO - ${this.local}  |  Início: ${h}:${m}`

 
        this.Hora1 = h;
        this.Minuto1 = m;


        // INÍCIO | Cronômetro
        
        let segundos: any = 0;
        let minutos: any = 0;
        let horas: any = 0;

          
        let segundo = function(){

            segundos++; // Incrementa os segundos.

            if(segundos==60){
                minutos++; // Incrementa os minutos.
                segundos=0; // Zera os segundos.

                if (minutos < 10){
                    minutos ="0" + minutos;
                }
            }
  
            if(minutos==60){     
                horas++; // Incrementa as horas.
                minutos=0; // Zera os minutos.
                
                if (horas < 10){
                    horas="0" +horas;
                }
            }
   
            if (segundos < 10){  
                segundos= "0" +segundos;
            }  

            document.getElementById("cronometro")!.innerText =  `${horas}:${minutos}:${segundos}`;
        }

        segundo();

        this.cronometro_horario = setInterval(function(){ segundo() },1000)
    }  


    // INÍCIO | Botão de fim/parada.

    fim() {

        this.iniciobtn="Ativar_Botoes"
        this.fimbtn="Desativar_Botoes"

        // INÍCIO | Mudar a cor da barra de status.

        this.cor="Barra_Status_Fim"
        this.border_color="Borda_Cronometro_Fim"


        // INÍCIO | Horário final.

        let today=new Date();
        let h=today.getHours();
        let m=today.getMinutes();

        document.getElementById("horario")!.innerText =  `Horário de FIM: ${h}:${m}`
        
        this.Hora2 = h;
        this.Minuto2 = m;

        clearInterval(this.cronometro_horario); // Para o cronômetro.

      

        // INÍCIO | Cálculo do tempo de uso. 

        if (this.Hora1 == 0){
            this.HoraInicio = (24 * 60) + this.Minuto1;
        }

        else {
            this.HoraInicio = (this.Hora1 * 60) + this.Minuto1;
        }

        if (this.Hora2 == 0) {
            this.HoraFim = (24 * 60) + this.Minuto2;
        }

        else {
            this.HoraFim = (this.Hora2 * 60) + this.Minuto2;
        }

        if (this.HoraInicio > this.HoraFim) {
            this.SomaMinutos = (24 * 60) - (this.HoraInicio - this.HoraFim)
        }

        else {
            this.SomaMinutos = this.HoraFim - this.HoraInicio
        }


        this.HoraTotal = Math.round(this.SomaMinutos / 60)
        this.MinutoTotal = this.SomaMinutos - (this.HoraTotal * 60)


        if (this.HoraTotal == 0){
            document.getElementById("cronometro")!.innerText =  `Tempo Total de Uso | ${this.MinutoTotal} Minuto(s)`;
        }

        else {
            document.getElementById("cronometro")!.innerText =  `Tempo Total de Uso | ${this.HoraTotal} Hora(s) ${this.MinutoTotal} Minuto(s)`;
        }

    
        if (this.HoraInicio < this.HoraFim) {
            this.Informaçoes = ` \n Local: ${this.local} \n \n Horário de Início: ${this.Hora1}:${this.Minuto1} \n Horário de Fim: ${this.Hora2}:${this.Minuto2} \n \n`

            this.hist.push(this.Informaçoes)
        }


        

    }

    
    // INÍCIO | Nome Usuário.

    nome() {

        let person = prompt("Digite seu nome:");
            
        if (person == null || person == "") {
          this.text = "Usuário";
        } 

        else {
          this.text = person;
        }
        document.getElementById("user")!.innerHTML = `${this.text}`;

      }

      historico(){
        this.dialog.open(DialogComponent);

        console.log(this.hist)

        if (this.hist == 0){
            document.getElementById("history")!.innerText = `Seu histórico aparecerá aqui.`;
        }

        else {
            document.getElementById("history")!.innerText = `${this.hist}`;
        }

      }

        
}


