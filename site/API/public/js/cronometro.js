"use strict"

//definindo as variaveis de tempo
var min = 0;
var seg = 0;
var ms = 0;

//definindo quantos milésimos valem 1 seg
var tempo = 10;
var cron;
var tempos_descartaveis = [];

function iniciar(){
    //setInterval serve para executar determinada função em x tempo
    //no caso ele chama a função timer a cada 0,01 seg
    cron = setInterval(() => { timer(); }, tempo);
    id_iniciar.disabled = true;
}

function parar(){
    //parando o setInterval 
    clearInterval(cron);
    id_iniciar.disabled = false;
}

function reiniciar(){
    //fazendo a mesma coisa q para só q zerando os valores
    clearInterval(cron);
    min = 0;
    seg = 0;
    ms = 0;

    document.getElementById('counter').innerHTML = '00:00:00';

    id_iniciar.disabled = false;
}

function timer(){
    ms++;
    if(ms == 100){
        ms = 0;
        seg++;

        if(seg == 60){
            seg = 0;
            min++;

            if(min == 100){
                alert(`Tempo limite estourado`);
                min = 99;
                seg = 60;
                ms = 99;
            }
        }
    }

    var format =
    (min < 10 ? '0' + min : min) + ':' + (seg < 10 ? '0' + seg : seg) + ':' + (ms < 10 ? '0' + ms : ms);
    document.getElementById('counter').innerHTML = format;
}