let cartas_dealer_numero = document.getElementById('dealer');
let cartas_jugador_numero = document.getElementById('jugador');
let botonemp = document.getElementById('boton_empezar')
let carta_numero = 0;
let carta_palo = 0;
let turno = 0
let global_dealer = 0
let global_jugador = 0

function empezar() {
    botonemp.classList.add('ocultar');
    baraja();
};

function baraja(){
    carta_numero = Math.floor(Math.random() * 13) + 1;
    carta_palo = Math.floor(Math.random() * 4) + 1;
    calculo();
}


function calculo(){
    if (carta_palo == 1) {
        palo = ' ♥'
    }
    else if (carta_palo == 2) {
        palo = ' ◆'
    }
    else if (carta_palo == 3) {
        palo = ' ♠'
    }
    else if (carta_palo == 4) {
        palo = ' ♣'
    }
    calculo2()
}

function calculo2(){
    if (turno == 0) {
        carta_jugador = carta_numero + palo;
        cartas_jugador_numero.textContent = carta_jugador;
        turno = 1;
        setTimeout(function () {
            baraja()
        }, 2000);
        global_jugador = carta_numero;
    }
    else if (turno == 1) {
        carta_dealer = carta_numero + palo;
        cartas_dealer_numero.textContent = carta_dealer;
        turno = 2;
        setTimeout(function () {
            baraja()
        }, 2000);
        global_dealer = carta_numero;
    }
    else if (turno == 2) {
        carta_jugador = carta_jugador + '    ' + carta_numero + palo;
        cartas_jugador_numero.textContent = carta_jugador;
        turno = 3;
        baraja(function () {
            baraja()
        }, 2000);
        global_jugador = global_jugador + carta_numero;
        
    }
    else if (turno == 3){
        carta_dealer = carta_dealer + '    ' + carta_numero + palo;
        global_dealer = global_dealer + carta_numero;
        turno = 4;
    }
    else if (turno == 4){
        if (global_jugador > 21){
            cartas_jugador_numero.textContent = 'BUST';
        }
        else{
            carta_jugador = carta_jugador + '    ' + carta_numero + palo;
            cartas_jugador_numero.textContent = carta_jugador;
            turno = 5;
        }
    }
    console.log('dealer' + global_dealer);
    console.log('jugador' +global_jugador);
}

function hit(){
    baraja()
}

// function calculo() {
//     if (carta_palo == 1) {
//         coraz()
//     }
//     else if (carta_palo == 2) {
//         diamante()
//     }
//     else if (carta_palo == 3) {
//         picas()
//     }
//     else if (carta_palo == 4) {
//         trebol()
//     }
// }

// function coraz() {
//     if (turno == 0) {
//         carta_jugador = carta_numero + ' ♥';
//         cartas_jugador_numero.textContent = carta_jugador;
//         turno = 1;
//         setTimeout(function () {
//             baraja()
//         }, 2000);
//         global_jugador = carta_numero;
//     }
//     else if (turno == 1) {
//         carta_dealer = carta_numero + ' ♥';
//         cartas_dealer_numero.textContent = carta_dealer;
//         turno = 2;
//         setTimeout(function () {
//             baraja()
//         }, 2000);
//         global_dealer = carta_numero;
//     }
//     else if (turno == 2) {
//         carta_jugador = carta_jugador + '    ' + carta_numero + ' ♥';
//         cartas_jugador_numero.textContent = carta_jugador;
//         turno = 3;
//         baraja(function () {
//             baraja()
//         }, 2000);
//         global_jugador = global_jugador + carta_numero;
//         console.log(global_jugador);
//     }
//     else if (turno == 3){
//         carta_dealer = carta_dealer + '    ' + carta_numero + ' ♥';
//         global_dealer = carta_numero + global_dealer;
//         console.log(global_dealer)
//         turno = 4;
//     }
// }

// function diamante() {
//     if (turno == 0) {
//         carta_jugador = carta_numero + ' ◆';
//         cartas_jugador_numero.textContent = carta_jugador;
//         turno = 1;
//         setTimeout(function () {
//             baraja()
//         }, 2000);
//         global_jugador = carta_numero;
//     }
//     else if (turno == 1) {
//         carta_dealer = carta_numero + ' ◆';
//         cartas_dealer_numero.textContent = carta_dealer;
//         turno = 2;
//         setTimeout(function () {
//             baraja()
//         }, 2000);
//         global_dealer = carta_numero;
//     }
//     else if (turno == 2) {
//         carta_jugador = carta_jugador + '    ' + carta_numero + ' ◆';
//         cartas_jugador_numero.textContent = carta_jugador;
//         turno = 3;
//         setTimeout(function () {
//             baraja()
//         }, 2000);
//         global_jugador = global_jugador + carta_numero;
//         console.log(global_jugador)
        
//     }
//     else if(turno == 3){
//         carta_dealer = carta_dealer + '    ' + carta_numero + ' ◆';
//         global_dealer = global_dealer + carta_numero ;
//         console.log(global_dealer);
//         //PONER BOTON
//         turno = 4;
//     }
// }

// function picas() {
//     if (turno == 0) {
//         carta_jugador = carta_numero + ' ♠';
//         cartas_jugador_numero.textContent = carta_jugador;
//         turno = 1;
//         setTimeout(function () {
//             baraja()
//         }, 2000);
//         global_jugador = carta_numero;
//     }
//     else if (turno == 1) {
//         carta_dealer = carta_numero + ' ♠';
//         cartas_dealer_numero.textContent = carta_dealer;
//         turno = 2;
//         setTimeout(function () {
//             baraja()
//         }, 2000);
//         global_dealer = carta_numero;
//     }
//     else if (turno == 2) {
//         carta_jugador = carta_jugador + '    ' + carta_numero + ' ♠';
//         cartas_jugador_numero.textContent = carta_jugador;
//         turno = 3;
//         setTimeout(function () {
//             baraja()
//         }, 2000);
//         global_jugador = global_jugador + carta_numero;
//         console.log(global_jugador);
//     }
//     else if (turno == 3){
//         carta_dealer = carta_dealer + '    ' + carta_numero + ' ♠';
//         global_dealer = global_dealer + carta_numero ;
//         console.log(global_dealer);
//         //PONER BOTON
//         turno = 4;
//     }
// }

// function trebol() {
//     if (turno == 0) {
//         carta_jugador = carta_numero + ' ♣';
//         cartas_jugador_numero.textContent = carta_jugador;
//         turno = 1;
//         setTimeout(function () {
//             baraja()
//         }, 2000);
//         global_jugador = carta_numero;
//     }
//     else if (turno == 1) {
//         carta_dealer = carta_numero + ' ♣';
//         cartas_dealer_numero.textContent = carta_dealer;
//         turno = 2;
//         setTimeout(function () {
//             baraja()
//         }, 2000);
//         global_dealer = carta_numero;
//     }
//     else if (turno == 2) {
//         carta_jugador = carta_jugador + '    ' + carta_numero + ' ♣';
//         cartas_jugador_numero.textContent = carta_jugador;
//         turno = 3;
//         setTimeout(function () {
//             baraja()
//         }, 2000);
//         global_jugador = global_jugador + carta_numero;
//         console.log(global_jugador);
//     }
//     else if (turno == 3) {
//         carta_dealer = carta_dealer + '    ' + carta_numero + ' ♣';
//         global_dealer = global_dealer + carta_numero ;    
//         console.log(global_dealer);
//         //PONER BOTON
//         turno = 4;
//     }
// }

