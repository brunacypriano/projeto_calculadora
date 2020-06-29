//Até a data de entrega foi implementado corretamente apenas o voice input. Ainda requer implementar as entradas via button para operações básicas e científicas.


var microfone = document.getElementById('microfone');
microfone.onclick = function () {
    microfone.classList.add("record");

    var recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition || window.mozSpeechRecognition
    || window.mcSpeechRecognition) ();
    recognition.lang = 'pt-BR';
    recognition.start();
    recognition.onresult = function(event){
            var input = event.results[0][0].transcript;
    document.querySelector("output").innerText = input;


    setTimeout(function(){
    validacao(input);
    },1000);
    microfone.classList.remove("record");
    }
}
function validacao(input){
    try{
        var result = eval(input);
        
        document.querySelector("output").innerText = result;
        
  
    }catch(e){
        console.log(e);
        document.querySelector("output").innerText = "";
    }

}