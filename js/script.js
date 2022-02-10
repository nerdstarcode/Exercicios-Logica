//s
function AreaCirculo(){
    var raio = parseFloat(document.getElementById("RaioDoCirculo").value);
    var resposta = 3.14 * (raio * raio);
    document.getElementById('RespostaRaio').innerHTML = 'Raio: '+ resposta +'cm';
    document.getElementById('CirculoVisual').style = 'width: '+ resposta/30+'px; height:'+ resposta/30 +'px;'
}