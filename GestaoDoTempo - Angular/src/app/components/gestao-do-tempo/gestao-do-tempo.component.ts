import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestao-do-tempo',
  templateUrl: './gestao-do-tempo.component.html',
  styleUrls: ['./gestao-do-tempo.component.scss']
})
export class GestaoDoTempoComponent implements OnInit {

  constructor() { }

    leitorDeArquivos = new FileReader();
    SelecionarAlterarImagem = document.querySelector("#selecionarAlterarImagem");
    ImagemUsuario: any = document.querySelector('#imagem_usuario');
    UploadImgUsuario: any = document.querySelector('.UploadImgUsuario'); // Está como class pois o id está sendo usado para abrir os arquivos quando clicar em selecionar foto.
    iniciarBtn = document.getElementById("#iniciar");
    fimBtn = document.getElementById("#fim");

    
  ngOnInit(): void {
  }

 
    // COMEÇO | Imagem Usuário

    leEAtualiza(){

        let imagemEnviada = this.UploadImgUsuario.files[0]; // Guarda o arquivo/imagem nessa variavel.

        this.leitorDeArquivos.readAsDataURL(imagemEnviada); // readAsDataURL é usado para ler o conteúdo do tipo File, ou seja, o arquivo enviado.

        //Quando a operação de leitura acaba o evento loadend começa.
        this.leitorDeArquivos.addEventListener('loadend', function(load){
        
            console.log("Upload Concluído");
            this.ImagemUsuario.src = load.target.result // O atributo result contém a URL do arquivo.
               
        })
    }

    SelecionarAlterarImagem.addEventListener('submit', function(submit){
        submit.preventDefault(); // O método preventDefault() cancela o evento se for cancelável, significando que a ação padrão que pertence ao evento não ocorrerá. Nesse caso está impedindo que a página recarregue.
        leEAtualiza(); 
    })

    // COMEÇO | Botão Iniciar e Parar
    
    
    iniciarBtn.addEventListener("click", function inicio() {
        let fimBtn: any = "";
        let iniciarBtn: any = "";
        let horario: any = "";
        let tempo_total: any = "";
        let cronometro: any = "";

      fimBtn.classList.remove("Ativar_Desativar_Botoes"); // Ativa | Botão de fim ao clicar no botão de Iniciar.
      iniciarBtn.classList.add("Ativar_Desativar_Botoes"); // Desativa | Botão Iniciar quando clica nele.
      horario.classList.add("Barra_Status_Ativo"); // Ativa | Status Ativo - sessão verde.
      horario.classList.remove("Barra_Status_Fim"); // Desativa | Horário de FIM - sessão vermelha.
      tempo_total.classList.remove("Barra_Status_Tempo_Total"); // Desativa | Tempo Total de Uso - sessão vermelha.
      cronometro.classList.add("Barra_Status_Cronometro"); // Ativa | Cronômetro.
    });

    fimBtn.addEventListener("click", function fim() {
        let fimBtn: any = "";
        let iniciarBtn: any = "";
        let horario: any = "";
        let tempo_total: any = "";
        let cronometro: any = "";

      fimBtn.classList.add("Ativar_Desativar_Botoes"); // Ativa | Botão de fim ao quando clicar no botão de Iniciar.
      iniciarBtn.classList.remove("Ativar_Desativar_Botoes"); // Desativa | Botão Iniciar quando clica nele.
      horario.classList.remove("Barra_Status_Ativo"); // Desativa | Status Ativo - sessão verde.
      horario.classList.add("Barra_Status_Fim");  // Ativa | Horário de FIM - sessão vermelha.
      tempo_total.classList.add("Barra_Status_Tempo_Total"); // Ativa | Tempo Total de Uso - sessão vermelha.
      cronometro.classList.remove("Barra_Status_Cronometro"); // Desativa | Cronômetro.
    });

    // INÍCIO | Local.

    let local = "Local Indefinido";

    let trabalho = function() {
        local = "Trabalho";
    }

    trabalho();

    let escola = function(){
        local = "Escola";
    }

    escola();

    let casa = function(){
        local = "Casa";
    }

    casa();

    let outro = function(){
        local = "Local Indefinido";
    }

    outro();
    

    // INÍCIO | Horário.

        let Hora1: any = 0;
        let Minuto1: any = 0;
        let Hora2: any = 0;
        let Minuto2: any = 0;
        let HoraInicio: any = 0;
        let HoraFim: any = 0;
        let SomaMinutos: any = 0;
        let HoraTotal: any = 0;
        let MinutoTotal: any = 0;
        let cronometro_horario: any = "";

     
    let inicio = function() {
        let today=new Date();
        let h=today.getHours();
        let m=today.getMinutes();
        let itens = "ATIVO - " +local+ " |  Início: "+h+":"+m+ "⠀⠀⠀⠀⠀⠀⠀⠀⠀"
        let horario2: any = document.getElementById("horario")
        horario2.innerText = itens

 
        Hora1 = h;
        Minuto1 = m;



        // INÍCIO | Cronômetro

        let segundos: any = 0;
        let minutos: any = 0;
        let horas: any = 0;

          
        segundo(){


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

            
            let seconds: any = document.getElementById("cronometro")
            seconds.innerText = horas+" : "+minutos+" : "+segundos;
        
        }

        cronometro_horario = setInterval(function(){ segundo() },1000)
    }  

    inicio();


    
    let fim = function() {
        let today=new Date();
        let h=today.getHours();
        let m=today.getMinutes();
        let itens = "Horário de FIM: " +h+":"+m+ "⠀⠀⠀⠀⠀⠀⠀⠀⠀";
        let horario2: any = document.getElementById("horario")
        horario2.innerText = itens
        

        Hora2 = h;
        Minuto2 = m;

        clearInterval(cronometro_horario); // Para o cronômetro.
        
        let timer: any = document.getElementById('cronometro')
        timer.innerText = ""; // Usado para não aparecer o cronometro quando clicar no botão de fim.


        // INÍCIO | Cálculo do tempo de uso.

        

        if (Hora1 == 0){
            HoraInicio = (24 * 60) + Minuto1;
        }

        else {
            HoraInicio = (Hora1 * 60) + Minuto1;
        }

        if (Hora2 == 0) {
            HoraFim = (24 * 60) + Minuto2;
        }

        else {
            HoraFim = (Hora2 * 60) + Minuto2;
        }

        if (HoraInicio > HoraFim) {
            SomaMinutos = (24 * 60) - (HoraInicio - HoraFim)
        }

        else {
            SomaMinutos = HoraFim - HoraInicio
        }

        HoraTotal = Math.round(SomaMinutos / 60)
        MinutoTotal = SomaMinutos - (HoraTotal * 60)

        if (HoraTotal == 0){
            let tempotot: any = document.getElementById("tempo_total")
            tempotot.innerText = "Tempo Total de Uso |  " + MinutoTotal+ " Minuto(s) ";
        }

        else {
            let tempotot: any = document.getElementById("tempo_total")
            tempotot.innerText = "Tempo Total de Uso |  " + HoraTotal + "Hora(s) " + MinutoTotal + "Minuto(s)";
        }


    }

    fim ();








  
