;(function(){

    const leitorDeArquivos = new FileReader(),
            formulario = document.querySelector('.upload-imagem'),
            previaDaImagem = document.querySelector('.imagem'),
            inputArquivo = document.querySelector('.upload_imgUsuario'),
            btnAtualiza = document.querySelector('.btnAtualiza');

    
    function leEAtualiza(){
        //pega o arquivo enviado e guarda nesta variavel
        let imagemEnviada = inputArquivo.files[0];

        leitorDeArquivos.readAsDataURL(imagemEnviada);
        leitorDeArquivos.addEventListener('loadend', function(load){
        
            console.log(load.target.result);
            previaDaImagem.src = load.target.result
            
        })
    }

    formulario.addEventListener('submit', function(submit){
        submit.preventDefault();
        leEAtualiza();
    })


    btnAtualiza.addEventListener('click', function(){
        leEAtualiza();
    })
    
})()