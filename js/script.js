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
        document.getElementById('ValorMaior').innerHTML = v1 + 'é o maior valor';
    }else{
        document.getElementById('ValorMaior').innerHTML = v2 + ' é o maior valor';
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
        document.getElementById('PossoVotar').innerHTML = 'Ainda não, faltam ' + anosFaltando + ' anos';
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
// funções fracamente ancoradas.

/*
15) Escreva um programa para ler o número de lados de um polígono regular e a medida do lado (em cm). Calcular e imprimir o seguinte:
- Se o número de lados for igual a 3 escrever TRI NGULO e o valor do seu perímetro.
- Se o número de lados for igual a 4 escrever QUADRADO e o valor da sua área.
- Se o número de lados for igual a 5 escrever PENTÁGONO.
Observação: Considere que o usuário só informará os valores 3, 4 ou 5.
16) Acrescente as seguintes mensagens à solução do exercício anterior conforme o caso.
- Caso o número de lados seja inferior a 3 escrever NÃO É UM POLÍGONO.
- Caso o número de lados seja superior a 5 escrever POLÍGONO NÃO IDENTIFICADO.
Observação: Considere que o usuário poderá informar qualquer valor para o número de lados.
17) Escreva um programa para ler 2 valores inteiros e uma das seguintes operações a serem executadas 
(codificada da seguinte forma: 1. Adição, 2.Subtração, 3.Divisão,  4.Multiplicação). Calcular e escrever o resultado dessa operação sobre os 
dois valores lidos. Observação: Considere que só serão lidos os valores 1, 2, 3 ou 4.
*/

/*
    14) Escreva um programa para ler o número de gols marcados pelo Grêmio e o número de gols marcados pelo Inter em um GRENAL. 
    Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.
*/
    function ChamaOJogao(){
        let golsT1 = parseInt(document.getElementById("JogaoGolsT1").value);
        let golsT2 = parseInt(document.getElementById("JogaoGolsT2").value);
        let resultado = Jogao(golsT1, golsT2);
        document.getElementById('ResultadoJogao').innerHTML = resultado;
    }
    function Jogao(GolsT1 = 0, GolsT2 = 0, Time1 = "Grêmio", Time2 = "Inter"){
        let resposta ={
            time: '',
            estado: 'Vitória'
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
    15) Escreva um programa para ler o número de lados de um polígono regular e a medida do lado (em cm). Calcular e imprimir o seguinte:
    - Se o número de lados for igual a 3 escrever TRI NGULO e o valor do seu perímetro.
    - Se o número de lados for igual a 4 escrever QUADRADO e o valor da sua área.
    - Se o número de lados for igual a 5 escrever PENTÁGONO.
*/
    function VeOsLadoAi(){
        let lados = parseInt(document.getElementById("JogaoGolsT1").value);
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
                resultado = `Um triângulo de perímetro ${soma}`;
                return resultado
            break;
            case 4:
                  let area = cm[0];
                  for (let i = 1; i <5; i++){
                    area = area*c[i];
                  }
                  resultado = `Um quadrado de área ${area}`;
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
    