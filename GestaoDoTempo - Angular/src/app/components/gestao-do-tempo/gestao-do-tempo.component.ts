import { DOCUMENT } from '@angular/common';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-gestao-do-tempo',
  templateUrl: './gestao-do-tempo.component.html',
  styleUrls: ['./gestao-do-tempo.component.scss']
})

export class GestaoDoTempoComponent implements OnInit {

    imgsrc = '../assets/Usuario.png';

    local = "Local Indefinido";

    Hora1: any = 0;
    Minuto1: any = 0;
    Segundo1: any = 0;
    Hora2: any = 0;
    Minuto2: any = 0;
    Segundo2: any = 0;
    HoraInicio: any = 0;
    HoraFim: any = 0;
    horario: any = 0;

    SomaSegundos: any = 0;
    HoraTotal: any = 0;
    MinutoTotal: any = 0;
    SegundoTotal: any = 0;
    tempo_total: any = 0;
    segundos: number = 0;
    minutos: number = 0;
    horas: number = 0;

    fimBtn: any = 0;
    iniciarBtn: any = 0;
    
    cronometro_horario: any = 0;
    cronometro: any = 0;

    text: any = 0;

    cor: string = "";
    border_color: string = "";
    iniciobtn: string = "";
    fimbtn: string = "Desativar_Botoes";
    Informaçoes: any = "";
    
    isChecked1 = false;
    isChecked2 = false;
    isChecked3 = false;
    isChecked4 = false;


    constructor(public dialog: MatDialog, public _d: DomSanitizer) { }

    // INÍCIO | Foto

    fileChange(e: any) {
        const file = e.srcElement.files[0]; 
        this.imgsrc = window.URL.createObjectURL(file); 
    }
    

  ngOnInit(): void {
  }

    hist: any = [];

    // INÍCIO | CheckBox

    local1(){
        this.isChecked1 = true;
        this.isChecked2 = false;
        this.isChecked3 = false;
        this.isChecked4 = false;
    }

    local2(){
        this.isChecked1 = false;
        this.isChecked2 = true;
        this.isChecked3 = false;
        this.isChecked4 = false;
    }

    local3(){
        this.isChecked1 = false;
        this.isChecked2 = false;
        this.isChecked3 = true;
        this.isChecked4 = false;
    }

    local4(){
        this.isChecked1 = false;
        this.isChecked2 = false;
        this.isChecked3 = false;
        this.isChecked4 = true;
    }

    // INÍCIO | Local.

    SetLocal(local: any){
        this.local = local   
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
        let s=today.getSeconds();

        document.getElementById("horario")!.innerText =  `ATIVO - ${this.local}  |  Início: ${h}:${m}`

 
        this.Hora1 = h;
        this.Minuto1 = m;
        this.Segundo1 = s;


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
        let s=today.getSeconds();

        document.getElementById("horario")!.innerText =  `Horário de FIM: ${h}:${m}`
        
        this.Hora2 = h;
        this.Minuto2 = m;
        this.Segundo2 = s

        clearInterval(this.cronometro_horario); // Para o cronômetro.

      

        // INÍCIO | Cálculo do tempo de uso. 

        if (this.Hora1 == 0){
            this.HoraInicio = (24 * 3600) + (this.Minuto1 * 60) + this.Segundo1;
        }

        else {
            this.HoraInicio = (this.Hora1 * 3600) + (this.Minuto1 * 60) + this.Segundo1;
        }

        if (this.Hora2 == 0) {
            this.HoraFim = (24 * 3600) + (this.Minuto2 * 60) + this.Segundo2;
        }

        else {
            this.HoraFim = (this.Hora2 * 3600) + (this.Minuto2 * 60) + this.Segundo2;
        }

        if (this.HoraInicio > this.HoraFim) {
            this.SomaSegundos = (24 * 3600) - (this.HoraInicio - this.HoraFim)
        }

        else {
            this.SomaSegundos = this.HoraFim - this.HoraInicio
        }


        this.HoraTotal = Math.round(this.SomaSegundos / 3600)
        this.MinutoTotal = Math.round(this.SomaSegundos / 60)
        this.SegundoTotal = Math.round(this.SomaSegundos - (this.HoraTotal * 3600))
        

        // INÍCIO | Cálculo tempo total e Histórico

        if (this.HoraTotal == 0 && this.MinutoTotal == 0){
            document.getElementById("cronometro")!.innerText =  `Tempo Total de Uso | ${this.SegundoTotal} Segundo(s)`;

            this.Informaçoes = ` \n Local: ${this.local} \n \n Horário de Início: ${this.Hora1}:${this.Minuto1} \n Horário de Fim: ${this.Hora2}:${this.Minuto2} \n \n Tempo Total de Uso | ${this.SegundoTotal} Segundo(s) \n \n` // Histórico

            this.hist.push(this.Informaçoes) // Histórico
        }


        if (this.MinutoTotal > 0){
            document.getElementById("cronometro")!.innerText =  `Tempo Total de Uso | ${this.MinutoTotal} Minuto(s)`;

            this.Informaçoes = ` \n Local: ${this.local} \n \n Horário de Início: ${this.Hora1}:${this.Minuto1} \n Horário de Fim: ${this.Hora2}:${this.Minuto2} \n \n Tempo Total de Uso | ${this.MinutoTotal} Minuto(s) \n \n` // Histórico

            this.hist.push(this.Informaçoes) // Histórico
        }


        if (this.HoraTotal > 0) {
            document.getElementById("cronometro")!.innerText =  `Tempo Total de Uso | ${this.HoraTotal} Hora(s) ${this.MinutoTotal} Minuto(s)`;

            this.Informaçoes = ` \n Local: ${this.local} \n \n Horário de Início: ${this.Hora1}:${this.Minuto1} \n Horário de Fim: ${this.Hora2}:${this.Minuto2} \n \n Tempo Total de Uso | ${this.HoraTotal} Hora(s) ${this.MinutoTotal} Minuto(s) \n \n` // Histórico

            this.hist.push(this.Informaçoes) // Histórico
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


    // INÍCIO | Histórico

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
