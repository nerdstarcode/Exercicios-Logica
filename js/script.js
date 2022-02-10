//s
function AreaCirculo(){
    let raio = parseFloat(document.getElementById("RaioDoCirculo").value);
    let resposta = 3.14 * (raio * raio);
    document.getElementById('RespostaRaio').innerHTML = 'Raio: '+ resposta +'cm';
    document.getElementById('CirculoVisual').style = 'width: '+ resposta/(6*raio)+'px; height:'+ resposta/(6*raio) +'px;';
}
function FahrenheitToCelcius(){
    let F = parseFloat(document.getElementById("Fahrenheit").value);
    let resposta = (F - 32) * (5/9);
    document.getElementById('Temperatura').innerHTML = 'Fahrenheit: '+ resposta;
    if (resposta > 0){
        document.getElementById('Termometro').style = 'background: #000; height:'+ (resposta)/30 +'px;';
    }else{
        let negativo = (resposta*resposta)^(1/2);
        document.getElementById('Termometro').style = 'background: #ff0000; height:'+ (negativo)/(30) +'px;';
    }

}