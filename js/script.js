function AreaCirculo(){
    let raio = parseFloat(document.getElementById("RaioDoCirculo").value);
    let resposta = 3.14 * (raio * raio);
    document.getElementById('RespostaRaio').innerHTML = 'Raio: '+ resposta.toFixed(3) +'cm';
    document.getElementById('CirculoVisual').style = 'width: '+ resposta/(3.14 *6*raio)+'px; height:'+ resposta/(3.14 *6*raio) +'px;';
}

function FahrenheitToCelcius(){
    let F = parseFloat(document.getElementById("Fahrenheit").value);
    let resposta = (F - 32) * (5/9);
    document.getElementById('TemperaturaF').innerHTML = 'Fahrenheit: '+ resposta.toFixed(2);
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
    document.getElementById('TemperaturaC').innerHTML = 'Celcius: '+ resposta.toFixed(2);
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

function LucroTaxista(){
    let Kmi = parseFloat(document.getElementById("KMinicial").value);
    let Kmf = parseFloat(document.getElementById("KMfinal").value);
    let litros = parseFloat(document.getElementById("Litros").value);
    let Recebido = parseFloat(document.getElementById("RecebidoS").value);
    let KmMedio = Kmf - Kmi;
    let lucro = Recebido - litros*4.87;
    document.getElementById('MediaKm').innerHTML = KmMedio +' Km rodados';
    document.getElementById('LucroTax').innerHTML = lucro.toFixed(2)+ 'R$ de lucro';
}

function MaiorValor(){
    let v1 = parseFloat(document.getElementById("Valor1").value);
    let v2 = parseFloat(document.getElementById("Valor2").value);
    if (v1 > v2){
        document.getElementById('ValorMaior').innerHTML = v1 + '?? o maior valor';
    }else{
        document.getElementById('ValorMaior').innerHTML = v2 + ' ?? o maior valor';
    }
}

function PossoVotar(){
    let ano = parseFloat(document.getElementById("AnoNascimento").value);
    let anoAtual = new Date().getFullYear()
    ano = anoAtual - ano
    if (ano > 16){
        document.getElementById('PossoVotar').innerHTML = 'Pode';
    }else{
        let anosFaltando = (16 - ano)
        document.getElementById('PossoVotar').innerHTML = 'Ainda n??o, faltam ' + anosFaltando + ' anos';
    }
}

function QuantoGastei(){
    let macas = parseFloat(document.getElementById("QuantMaca").value);
    if (macas < 12){
        let pago = (macas*0.3).toFixed(2)
        document.getElementById('QuantoGastei').innerHTML = pago + 'R$';
    }else{
        let pago = (macas*0.3).toFixed(2)
        document.getElementById('QuantoGastei').innerHTML = pago + 'R$';
    }
}
// fun????es fracamente ancoradas.

/*
15) Escreva um programa para ler o n??mero de lados de um pol??gono regular e a medida do lado (em cm). Calcular e imprimir o seguinte:
- Se o n??mero de lados for igual a 3 escrever TRI NGULO e o valor do seu per??metro.
- Se o n??mero de lados for igual a 4 escrever QUADRADO e o valor da sua ??rea.
- Se o n??mero de lados for igual a 5 escrever PENT??GONO.
Observa????o: Considere que o usu??rio s?? informar?? os valores 3, 4 ou 5.
16) Acrescente as seguintes mensagens ?? solu????o do exerc??cio anterior conforme o caso.
- Caso o n??mero de lados seja inferior a 3 escrever N??O ?? UM POL??GONO.
- Caso o n??mero de lados seja superior a 5 escrever POL??GONO N??O IDENTIFICADO.
Observa????o: Considere que o usu??rio poder?? informar qualquer valor para o n??mero de lados.
17) Escreva um programa para ler 2 valores inteiros e uma das seguintes opera????es a serem executadas 
(codificada da seguinte forma: 1. Adi????o, 2.Subtra????o, 3.Divis??o,  4.Multiplica????o). Calcular e escrever o resultado dessa opera????o sobre os 
dois valores lidos. Observa????o: Considere que s?? ser??o lidos os valores 1, 2, 3 ou 4.
*/

/*
    14) Escreva um programa para ler o n??mero de gols marcados pelo Gr??mio e o n??mero de gols marcados pelo Inter em um GRENAL. 
    Escrever o nome do vencedor. Caso n??o haja vencedor dever?? ser impressa a palavra EMPATE.
*/
    function ChamaOJogao(){
        let golsT1 = parseInt(document.getElementById("JogaoGolsT1").value);
        let golsT2 = parseInt(document.getElementById("JogaoGolsT2").value);
        let resultado = Jogao(golsT1, golsT2);
        document.getElementById('ResultadoJogao').innerHTML = resultado;
    }
    function Jogao(GolsT1 = 0, GolsT2 = 0, Time1 = "Gr??mio", Time2 = "Inter"){
        let resposta ={
            time: '',
            estado: 'Vit??ria'
        };
        let resultado = '';
        if (GolsT1 == GolsT2){
            resposta.estado = 'Empate';
            resultado = `Nenhum dos times ganhou, ${resposta.estado}`;
            return resultado;
        } else if (GolsT1 > GolsT2){
            resposta.time = Time1;
            resultado = `O time ${Time1} ganhou com ${GolsT1} gols`;
            return resultado;
        } else{
            resposta.time = Time2;
            resultado = `O time ${Time2} ganhou com ${GolsT2} gols`;
            return resultado;
        }
    }
/*
    15) Escreva um programa para ler o n??mero de lados de um pol??gono regular e a medida do lado (em cm). Calcular e imprimir o seguinte:
    - Se o n??mero de lados for igual a 3 escrever TRI NGULO e o valor do seu per??metro.
    - Se o n??mero de lados for igual a 4 escrever QUADRADO e o valor da sua ??rea.
    - Se o n??mero de lados for igual a 5 escrever PENT??GONO.
*/
    function VeOsLadoAi(){
        let lados = parseInt(document.getElementById("Lados").value);
        let cm = parseFloat(document.querySelectorAll('input.centimetros'));
        let resultado = LadosPoligon(lados, cm);
        document.getElementById('ResultadoPoligono').innerHTML = resultado;
    }
    function LadosPoligon(lados = 3, cm = [0,0] ){
        let resultado = '';
        switch (lados) {
            case 3:
                let soma = 0;
                for (let i = 0; i < 3; i++){
                    soma = soma + cm[i]
                }
                resultado = `Um tri??ngulo de per??metro ${soma}`;
                return resultado
            break;
            case 4:
                  let area = cm[0];
                  for (let i = 1; i <5; i++){
                    area = area*c[i];
                  }
                  resultado = `Um quadrado de ??rea ${area}`;
                  return resultado;
            break;
            case 5:
                resultado = 'Um PENTAGONO'
                return resultado;
            break;
            default:
                resultado = 'Digite um lado ai'
                return resultado;
            break;
          }
    }
