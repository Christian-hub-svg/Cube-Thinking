"use strict"

function sortear(){

    lucky.innerHTML = ``;

    for(var index = 0; index < 22; index++){

        var letra = parseInt(Math.random() * 18);

        if(letra == 1){
            var nova_letra = `U `;
            lucky.innerHTML += `${nova_letra} `;
        } else if(letra == 2){
            var nova_letra = `D `;
            lucky.innerHTML += `${nova_letra} `;
        } else if(letra == 3){
            var nova_letra = `L `;
            lucky.innerHTML += `${nova_letra} `;
        } else if(letra == 4){
            var nova_letra = `R `;
            lucky.innerHTML += `${nova_letra} `;
        } else if(letra == 5){
            var nova_letra = `F `;
            lucky.innerHTML += `${nova_letra} `;
        } else if(letra == 6){
            var nova_letra = `B `;
            lucky.innerHTML += `${nova_letra} `;
        } else if(letra == 7){
            var nova_letra = `U' `;
            lucky.innerHTML += `${nova_letra} `;
        } else if(letra == 8){
            var nova_letra = `D' `;
            lucky.innerHTML += `${nova_letra} `;
        } else if(letra == 9){
            var nova_letra = `L' `;
            lucky.innerHTML += `${nova_letra} `;
        } else if(letra == 10){
            var nova_letra = `R' `;
            lucky.innerHTML += `${nova_letra} `;
        } else if(letra == 11){
            var nova_letra = `F' `;
            lucky.innerHTML += `${nova_letra} `;
        } else if(letra == 12){
            var nova_letra = `B' `;
            lucky.innerHTML += `${nova_letra} `;
        } else if(letra == 13){
            var nova_letra = `U2 `;
            lucky.innerHTML += `${nova_letra} `;
        } else if(letra == 14){
            var nova_letra = `D2 `;
            lucky.innerHTML += `${nova_letra} `;
        } else if(letra == 15){
            var nova_letra = `L2 `;
            lucky.innerHTML += `${nova_letra} `;
        } else if(letra == 16){
            var nova_letra = `R2 `;
            lucky.innerHTML += `${nova_letra} `;
        } else if(letra == 17){
            var nova_letra = `F2 `;
            lucky.innerHTML += `${nova_letra} `;
        } else {
            var nova_letra = `B2 `;
            lucky.innerHTML += `${nova_letra} `;
        }
    }

}