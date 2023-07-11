import * as A from "./model.js";
import * as B from "./generator.js";
import * as C from "./data.js";

function conselhoDiario(){
    document.getElementById('ask-advice').textContent = C.conselhoDiario[(Math.random()*8).toFixed(0)];
}

function mostrar(){
    document.getElementById('conselho-pedido').classList.add('show');
    document.getElementById('conselho-diario').classList.add('hide');
    document.getElementById('app-info').classList.add('hide')
    document.getElementById('status').classList.add('show');
}

function conselho( var1)
{	
    var num1 = (var1.toFixed(0)) % 32;
    var conselho = document.querySelector('#conselho');
    conselho.textContent = C.conselhos[num1];
}

function actividade(estudo,sono,distancia,telemovel){
    
    var tempo_estudo = document.getElementById('tempo_estudo');
    var tempo_sono = document.getElementById('tempo_sono');
    var distancia_percorrida = document.getElementById('distancia_percorrida');
    var uso_telemovel = document.getElementById('uso_telemovel');

    tempo_estudo.textContent = `${estudo} h`;
    tempo_sono.textContent = `${sono} h`;
    distancia_percorrida.textContent = `${distancia} Km`;
    uso_telemovel.textContent = `${telemovel} h`;

}

window.addEventListener('load', conselhoDiario);

const solicitar = document.querySelector(".solicitar");
solicitar.addEventListener("click", () =>{

    const estudo = B.generateEstudo();
    const sono = B.generateSono();
    const telefone = B.generateTelefone();
    const distancia = B.generateDistancia();

    const media = A.mediaDesempenho(estudo,sono,telefone,distancia);

    conselho(media);
    actividade(estudo,sono,telefone,distancia);
    mostrar();
})