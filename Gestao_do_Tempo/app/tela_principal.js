;(function(){

    // COMEÇO | Imagem Usuário

    const leitorDeArquivos = new FileReader(),
            SelecionarAlterarImagem = document.querySelector("#selecionarAlterarImagem");
            ImagemUsuario = document.querySelector('#imagem_usuario');
            UploadImgUsuario = document.querySelector('.UploadImgUsuario'); // Está como class pois o id está sendo usado para abrir os arquivos quando clicar em selecionar foto.

    
    function leEAtualiza(){

        let imagemEnviada = UploadImgUsuario.files[0]; // Guarda o arquivo/imagem nessa variavel.

        leitorDeArquivos.readAsDataURL(imagemEnviada); // readAsDataURL é usado para ler o conteúdo do tipo File, ou seja, o arquivo enviado.

        //Quando a operação de leitura acaba o evento loadend começa.
        leitorDeArquivos.addEventListener('loadend', function(load){
        
            console.log("Upload Concluído");
            ImagemUsuario.src = load.target.result // O atributo result contém a URL do arquivo.
               
        })
    }

    SelecionarAlterarImagem.addEventListener('submit', function(submit){
        submit.preventDefault(); // O método preventDefault() cancela o evento se for cancelável, significando que a ação padrão que pertence ao evento não ocorrerá. Nesse caso está impedindo que a página recarregue.
        leEAtualiza(); 
    })


    // COMEÇO | Botão Iniciar e Parar

    var iniciarBtn = document.getElementById("#iniciar");
    var fimBtn = document.getElementById("#fim");
    
    iniciarBtn.addEventListener("click", function inicio() {
      fimBtn.classList.remove("Ativar_Desativar_Botoes"); // Ativa | Botão de fim ao clicar no botão de Iniciar.
      iniciarBtn.classList.add("Ativar_Desativar_Botoes"); // Desativa | Botão Iniciar quando clica nele.
      horario.classList.add("Barra_Status_Ativo"); // Ativa | Status Ativo - sessão verde.
      horario.classList.remove("Barra_Status_Fim"); // Desativa | Horário de FIM - sessão vermelha.
      tempo_total.classList.remove("Barra_Status_Tempo_Total"); // Desativa | Tempo Total de Uso - sessão vermelha.
    });

    fimBtn.addEventListener("click", function fim() {
      fimBtn.classList.add("Ativar_Desativar_Botoes"); // Ativa | Botão de fim ao quando clicar no botão de Iniciar.
      iniciarBtn.classList.remove("Ativar_Desativar_Botoes"); // Desativa | Botão Iniciar quando clica nele.
      horario.classList.remove("Barra_Status_Ativo"); // Desativa | Status Ativo - sessão verde.
      horario.classList.add("Barra_Status_Fim");  // Ativa | Horário de FIM - sessão vermelha.
      tempo_total.classList.add("Barra_Status_Tempo_Total"); // Ativa | Tempo Total de Uso - sessão vermelha.
    });

})()


    // INÍCIO | Local.

    local = "Local Indefinido";

    function trabalho() {
        local = "Trabalho";
    }

    function escola(){
        local = "Escola";
    }

    function casa(){
        local = "Casa";
    }

    function outro(){
        local = "Local Indefinido";
    }
    

    // INÍCIO | Horário.
     
    function inicio() {
        today=new Date();
        h=today.getHours();
        m=today.getMinutes();
        document.getElementById('horario').innerHTML="ATIVO - " +local+ " |  Início: "+h+":"+m+ "⠀⠀⠀⠀⠀⠀⠀⠀⠀";  

        Hora1 = h;
        Minuto1 = m;
    }

    
    function fim() {
        today=new Date();
        h=today.getHours();
        m=today.getMinutes();
        document.getElementById('horario').innerHTML="Horário de FIM: " +h+":"+m+ "⠀⠀⠀⠀⠀⠀⠀⠀⠀";

        Hora2 = h;
        Minuto2 = m;


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
            document.getElementById('tempo_total').innerText= "Tempo Total de Uso |  " + MinutoTotal+ " Minuto(s) ⠀⠀⠀⠀⠀⠀⠀⠀";
        }

        else {
            document.getElementById('tempo_total').innerText= "Tempo Total de Uso |  " + HoraTotal + "Hora(s) " + MinutoTotal + "Minuto(s) ⠀⠀⠀⠀⠀⠀⠀⠀";
        }
    }
