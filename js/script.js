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
    document.getElementById('TemperaturaF').innerHTML = 'Fahrenheit: '+ resposta;
    if (resposta > 0){
        document.getElementById('TermometroF').style = 'background: #000; height:'+ (resposta)/30 +'px;';
    }else{
        let negativo = (resposta*resposta)^(1/2);
        document.getElementById('TermometroF').style = 'background: #ff0000; height:'+ (negativo)/(30) +'px;';
    }
}
function CelciusToFahrenheit(){
    let C = parseFloat(document.getElementById("Celcius").value);
    let resposta = (C*9/5) + 32;
    document.getElementById('TemperaturaC').innerHTML = 'Celcius: '+ resposta;
    if (resposta > 0){
        document.getElementById('TermometroC').style = 'background: #000; height:'+ (resposta)/30 +'px;';
    }else{
        let negativo = (resposta*resposta)^(1/2);
        document.getElementById('TermometroC').style = 'background: #ff0000; height:'+ (negativo)/(30) +'px;';
    }
}
function LampadasPorMetro(){
    let watts = parseFloat(document.getElementById("PotenciaLampada").value);
    let x = parseFloat(document.getElementById("LarguraComodo").value);
    let y = parseFloat(document.getElementById("AlturaComodo").value);
    let resposta = Math.round((x*y)/(watts/18));
    document.getElementById('QuantLampadas').innerHTML = resposta +' Lampadas';
    document.getElementById('Lampadas-content').innerHTML = '';
    for (let i = 0; i < resposta; i++) {
        document.getElementById('Lampadas-content').innerHTML += '<span class="lampada"></span>';
    }
}
function CaixasNaCozinha(){
    let x = parseFloat(document.getElementById("ComprimentoCozinha").value);
    let y = parseFloat(document.getElementById("LarguraCozinha").value);
    let z = parseFloat(document.getElementById("AlturaCozinha").value);
    let resposta = Math.trunc((x*y*z)/(1.5));
    document.getElementById('QuantCaixas').innerHTML = resposta +' Caixas';
    document.getElementById('Box-Content').innerHTML = '';
    for (let i = 0; i < resposta; i++) {
        document.getElementById('Box-Content').innerHTML += '<div class="caixa"></div>';
    }
}