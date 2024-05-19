let cartas_dealer_numero = document.getElementById('dealer');
let cartas_jugador_numero = document.getElementById('jugador');
let botonemp = document.getElementById('boton_empezar')
let opc = document.getElementById('boton_hit')
let opc2 = document.getElementById('boton_stand')
let carta_numero_J = 0;
let carta_numero_D = 0;
let carta_palo = 0;
let turno = 0
let global_dealer = 0
let global_jugador = 0;
let asJ = 0;
let asJ2 = 0;
let asJ3 = 0;
let asJ4 = 0;
let asJ5 = 0;
let asJ6 = 0;
let asJ7 = 0;
let asJ8 = 0;
let asD = 0;
let asD2 = 0;
let asD3 = 0;
let asD4 = 0;
let asD5 = 0;
let turnoS = 0;
let shouldStopSecondFunction = false;

document.addEventListener('DOMContentLoaded', function () {
    opc.classList.add('ocultar')
    opc2.classList.add('ocultar')
});

function empezar() {
    botonemp.classList.add('ocultar');
    barajaJ();
};

function barajaJ(){
    carta_numero_J = Math.floor(Math.random() * 13) + 1;
    carta_palo = Math.floor(Math.random() * 4) + 1;
    calculo();
}

function barajaD(){
    carta_numero_D = Math.floor(Math.random() * 13) + 1;
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
    if (shouldStopSecondFunction) {
        return;
    }
    
    if (turno == 0) {
        if(carta_numero_J == 11|| carta_numero_J == 12 || carta_numero_J == 13){
            global_jugador = global_jugador + 10
        }
        else if(carta_numero_J == 1){
            global_jugador = global_jugador + 11
            asJ = 1
        }
        else{
            global_jugador = global_jugador + carta_numero_J
        }
        carta_jugador = carta_numero_J + palo;
        cartas_jugador_numero.textContent = carta_jugador;
        turno = 1;
        setTimeout(function () {
            barajaD()
        }, 2000);
    }
    else if (turno == 1) {
        if(carta_numero_D == 11|| carta_numero_D == 12 || carta_numero_D == 13){
            global_dealer = global_dealer + 10
        }
        else if(carta_numero_D == 1){
            global_dealer = global_dealer + 11
            asD = 1
        }
        else{
            global_dealer = global_dealer + carta_numero_D
        }
        carta_dealer = carta_numero_D + palo;
        cartas_dealer_numero.textContent = carta_dealer;
        turno = 2;
        setTimeout(function () {
            barajaJ()
        }, 2000);
    }
    else if (turno == 2) {
        if(carta_numero_J == 11|| carta_numero_J == 12 || carta_numero_J == 13){
            global_jugador = global_jugador + 10
        }
        else if(carta_numero_J == 1){
            global_jugador = global_jugador + 11
            asJ2 = 1
        }
        else{
            global_jugador = global_jugador + carta_numero_J
        }
        if(global_jugador > 21 && asJ == 1){
            global_jugador = global_jugador - 10
            asJ = 0
        }
        if(global_jugador == 21){
            blackjack()
        }
        carta_jugador = carta_jugador + '    ' + carta_numero_J + palo;
        cartas_jugador_numero.textContent = carta_jugador;
        turno = 3;
        setTimeout(function () {
            barajaD()
        }, 2000);
    }
    else if (turno == 3){
        carta_dealer = carta_dealer + '    ' + carta_numero_D + palo;
        if(carta_numero_D == 11|| carta_numero_D == 12 || carta_numero_D == 13){
            global_dealer = global_dealer + 10
        }
        else if(carta_numero_D == 1){
            global_dealer = global_dealer + 11
            asD2 = 1
        }
        
        else{
            global_dealer = global_dealer + carta_numero_D
        }
        if(global_dealer > 21 && asD == 1){
            global_dealer = global_dealer - 10
            asD = 0
        }
        if(global_dealer > 21 && asD2 == 1){
            global_dealer = global_dealer - 10
            asD2 = 0
        }
        if(global_dealer == 21){
            setTimeout(function () {
                blackjackD()
            }, 2000);
            cartas_dealer_numero.textContent = carta_dealer;
            return;
        }
        turno = 4;
        opciones()
    }
    else if (turno == 4){
        
            if(carta_numero_J == 11|| carta_numero_J == 12 || carta_numero_J == 13){
                global_jugador = global_jugador + 10
            }
            else if(carta_numero_J == 1){
                global_jugador = global_jugador + 11
                asJ3 = 1
            }
            else{
                global_jugador = global_jugador + carta_numero_J
            }
            if(global_jugador > 21 && asJ == 1){
                global_jugador = global_jugador - 10
                asJ = 0
            }
            if(global_jugador > 21 && asJ2 == 1){
                global_jugador = global_jugador - 10
                asJ2 = 0
            }
            if(global_jugador > 21 && asJ3 == 1){
                global_jugador = global_jugador - 10
                asJ3 = 0
            }
            if(global_jugador == 21){
                blackjack()
            }
            carta_jugador = carta_jugador + '    ' + carta_numero_J + palo;
            cartas_jugador_numero.textContent = carta_jugador;
            if (global_jugador > 21){
                blackjackD();
            }
            turno = 5;
    }
    else if (turno == 5){
        
        if(carta_numero_J == 11|| carta_numero_J == 12 || carta_numero_J == 13){
            global_jugador = global_jugador + 10
        }
        else if(carta_numero_J == 1){
            global_jugador = global_jugador + 11
            asJ4 = 1
        }
        else{
            global_jugador = global_jugador + carta_numero_J
        }
        if(global_jugador > 21 && asJ == 1){
            global_jugador = global_jugador - 10
            asJ = 0
        }
        if(global_jugador > 21 && asJ2 == 1){
            global_jugador = global_jugador - 10
            asJ2 = 0
        }
        if(global_jugador > 21 && asJ3 == 1){
            global_jugador = global_jugador - 10
            asJ3 = 0
        }
        if(global_jugador > 21 && asJ4 == 1){
            global_jugador = global_jugador - 10
            asJ4 = 0
        }
        if(global_jugador == 21){
            blackjack()
        }
        carta_jugador = carta_jugador + '    ' + carta_numero_J + palo;
        cartas_jugador_numero.textContent = carta_jugador;
        if (global_jugador > 21){
            blackjackD();
        }
        turno = 6;
}
    else if (turno == 6){
        
    if(carta_numero_J == 11|| carta_numero_J == 12 || carta_numero_J == 13){
        global_jugador = global_jugador + 10
    }
    else if(carta_numero_J == 1){
        global_jugador = global_jugador + 11
        asJ5 = 1
    }
    else{
        global_jugador = global_jugador + carta_numero_J
    }
    if(global_jugador > 21 && asJ == 1){
        global_jugador = global_jugador - 10
        asJ = 0
    }
    if(global_jugador > 21 && asJ2 == 1){
        global_jugador = global_jugador - 10
        asJ2 = 0
    }
    if(global_jugador > 21 && asJ3 == 1){
        global_jugador = global_jugador - 10
        asJ3 = 0
    }
    if(global_jugador > 21 && asJ4 == 1){
        global_jugador = global_jugador - 10
        asJ4 = 0
    }
    if(global_jugador > 21 && asJ5 == 1){
        global_jugador = global_jugador - 10
        asJ5 = 0
    }
    if(global_jugador == 21){
        blackjack()
    }
    carta_jugador = carta_jugador + '    ' + carta_numero_J + palo;
    cartas_jugador_numero.textContent = carta_jugador;
    if (global_jugador > 21){
        blackjackD();
    }
    turno = 7;
}

else if (turno == 7){
        
    if(carta_numero_J == 11|| carta_numero_J == 12 || carta_numero_J == 13){
        global_jugador = global_jugador + 10
    }
    else if(carta_numero_J == 1){
        global_jugador = global_jugador + 11
        asJ6 = 1
    }
    else{
        global_jugador = global_jugador + carta_numero_J
    }
    if(global_jugador > 21 && asJ == 1){
        global_jugador = global_jugador - 10
        asJ = 0
    }
    if(global_jugador > 21 && asJ2 == 1){
        global_jugador = global_jugador - 10
        asJ2 = 0
    }
    if(global_jugador > 21 && asJ3 == 1){
        global_jugador = global_jugador - 10
        asJ3 = 0
    }
    if(global_jugador > 21 && asJ4 == 1){
        global_jugador = global_jugador - 10
        asJ4 = 0
    }
    if(global_jugador > 21 && asJ5 == 1){
        global_jugador = global_jugador - 10
        asJ5 = 0
    }
    if(global_jugador > 21 && asJ6 == 1){
        global_jugador = global_jugador - 10
        asJ6 = 0
    }
    if(global_jugador == 21){
        blackjack()
    }
    carta_jugador = carta_jugador + '    ' + carta_numero_J + palo;
    cartas_jugador_numero.textContent = carta_jugador;
    if (global_jugador > 21){
        blackjackD();
    }
    turno = 8;
    }
else if (turno == 8){
        
    if(carta_numero_J == 11|| carta_numero_J == 12 || carta_numero_J == 13){
        global_jugador = global_jugador + 10
    }
    else if(carta_numero_J == 1){
        global_jugador = global_jugador + 11
        asJ7 = 1
    }
    else{
        global_jugador = global_jugador + carta_numero_J
    }
    if(global_jugador > 21 && asJ == 1){
        global_jugador = global_jugador - 10
        asJ = 0
    }
    if(global_jugador > 21 && asJ2 == 1){
        global_jugador = global_jugador - 10
        asJ2 = 0
    }
    if(global_jugador > 21 && asJ3 == 1){
        global_jugador = global_jugador - 10
        asJ3 = 0
    }
    if(global_jugador > 21 && asJ4 == 1){
        global_jugador = global_jugador - 10
        asJ4 = 0
    }
    if(global_jugador > 21 && asJ5 == 1){
        global_jugador = global_jugador - 10
        asJ5 = 0
    }
    if(global_jugador > 21 && asJ6 == 1){
        global_jugador = global_jugador - 10
        asJ6 = 0
    }
    if(global_jugador > 21 && asJ6 == 1){
        global_jugador = global_jugador - 10
        asJ7 = 0
    }
    if(global_jugador == 21){
        blackjack()
    }
    carta_jugador = carta_jugador + '    ' + carta_numero_J + palo;
    cartas_jugador_numero.textContent = carta_jugador;
    if (global_jugador > 21){
        blackjackD();
    }
    turno = 9;
}
    console.log('dealer' + global_dealer);
    console.log('jugador' +global_jugador);
    
}

function opciones(){
    opc.classList.add('mostrar')
    opc2.classList.add('mostrar')
}

function hit(){
    barajaJ()
}

function stand(){
    opc2.classList.remove('mostrar');
    opc.classList.remove('mostrar');
    opc2.classList.add('ocultar');
    opc.classList.add('ocultar');
    if (global_dealer > 17 || global_dealer == 17){
        cartas_dealer_numero.textContent = carta_dealer;
        setTimeout(function () {
            stop()
        }, 2000);
    }
    else if(global_dealer > global_jugador){
        cartas_dealer_numero.textContent = carta_dealer;
        setTimeout(function () {
            blackjackD()
        }, 2000);
    }
    else{seguirD()}
}

function stop(){
    if (global_dealer > global_jugador){
        blackjackD()
    }
    else if (global_dealer == global_jugador){
        alert('empate')
        shouldStopSecondFunction = true;
    }
    else {
        blackjack()
    }
}



function blackjack(){
    alert('has ganado')
    shouldStopSecondFunction = true;

}

function blackjackD(){
    alert('has perdido')
    shouldStopSecondFunction = true;
}
function seguirD(){
    cartas_dealer_numero.textContent = carta_dealer;
    setTimeout(function () {
        barajaSD()
    }, 2000);
}

function barajaSD(){
    carta_numero_D = Math.floor(Math.random() * 13) + 1;
    carta_palo = Math.floor(Math.random() * 4) + 1;
    calculoS();
}


function calculoS(){
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
    calculoS2()
}

function calculoS2(){
    if (shouldStopSecondFunction) {
        return;
    }
    
    if (turnoS == 0){
        carta_dealer = carta_dealer + '    ' + carta_numero_D + palo;
        cartas_dealer_numero.textContent = carta_dealer;
        if(carta_numero_D == 11|| carta_numero_D == 12 || carta_numero_D == 13){
            global_dealer = global_dealer + 10
        }
        else if(carta_numero_D == 1){
            global_dealer = global_dealer + 11
            asD3 = 1
        }
        else{
            global_dealer = global_dealer + carta_numero_D
        }
        
        if(global_dealer > 21 && asD == 1){
            global_dealer = global_dealer - 10
            asD = 0
        }
        if(global_dealer > 21 && asD2 == 1){
            global_dealer = global_dealer - 10
            asD2 = 0
        }
        if(global_dealer > 21 && asD3 == 1){
            global_dealer = global_dealer - 10
            asD3 = 0
        }
        if(global_dealer > 21){
            setTimeout(function () {
                blackjack()
                }, 1999);
                return;
        }
        else if(global_dealer == 21){
            setTimeout(function () {
                blackjackD()
            }, 1999);
            return;
        }
        else if(global_dealer > 17 || global_dealer == 17){
            setTimeout(function () {
                stop()
            }, 1999);
            return;
        }
        
        else if(global_dealer > global_jugador){
            setTimeout(function () {
                blackjackD()
                }, 1999);
                return;
        }
        else{
            setTimeout(function () {
                barajaSD()
            }, 2000);
            turnoS = 1;
        }
    }
    else if (turnoS == 1){
        carta_dealer = carta_dealer + '    ' + carta_numero_D + palo;
        cartas_dealer_numero.textContent = carta_dealer;
        if(carta_numero_D == 11|| carta_numero_D == 12 || carta_numero_D == 13){
            global_dealer = global_dealer + 10
        }
        else if(carta_numero_D == 1){
            global_dealer = global_dealer + 11
            asD4 = 1
        }
        else{
            global_dealer = global_dealer + carta_numero_D
        }
        
        if(global_dealer > 21 && asD == 1){
            global_dealer = global_dealer - 10
            asD = 0
        }
        if(global_dealer > 21 && asD2 == 1){
            global_dealer = global_dealer - 10
            asD2 = 0
        }
        if(global_dealer > 21 && asD3 == 1){
            global_dealer = global_dealer - 10
            asD3 = 0
        }

        if(global_dealer > 21 && asD4 == 1){
            global_dealer = global_dealer - 10
            asD4 = 0
        }
        if(global_dealer > 21){
            setTimeout(function () {
                blackjack()
                }, 1999);
                return;
        }
        else if(global_dealer == 21){
            setTimeout(function () {
                blackjackD()
            }, 1999);
            return;
        }
        else if(global_dealer > 17 || global_dealer == 17){
            setTimeout(function () {
                stop()
            }, 1999);
            return;
        }
        
        else if(global_dealer > global_jugador){
            setTimeout(function () {
                blackjackD()
                }, 1999);
                return;
        }
        else{
            setTimeout(function () {
                barajaSD()
            }, 2000);
            turnoS = 2;
        }
    }
    
    else if (turnoS == 2){
        carta_dealer = carta_dealer + '    ' + carta_numero_D + palo;
        cartas_dealer_numero.textContent = carta_dealer;
        if(carta_numero_D == 11|| carta_numero_D == 12 || carta_numero_D == 13){
            global_dealer = global_dealer + 10
        }
        else if(carta_numero_D == 1){
            global_dealer = global_dealer + 11
            asD5 = 1
        }

        else{
            global_dealer = global_dealer + carta_numero_D
        }
        
        if(global_dealer > 21 && asD == 1){
            global_dealer = global_dealer - 10
            asD = 0
        }
        if(global_dealer > 21 && asD2 == 1){
            global_dealer = global_dealer - 10
            asD2 = 0
        }
        if(global_dealer > 21 && asD3 == 1){
            global_dealer = global_dealer - 10
            asD3 = 0
        }
        if(global_dealer > 21 && asD4 == 1){
            global_dealer = global_dealer - 10
            asD4 = 0
        }
        if(global_dealer > 21 && asD5 == 1){
            global_dealer = global_dealer - 10
            asD5 = 0
        }
        if(global_dealer > 21){
            setTimeout(function () {
                blackjack()
                }, 1999);
                return;
        }
        else if(global_dealer == 21){
            setTimeout(function () {
                blackjackD()
            }, 1999);
            return;
        }
        else if(global_dealer > 17 || global_dealer == 17){
            setTimeout(function () {
                stop()
            }, 1999);
            return;
        }
        
        else if(global_dealer > global_jugador){
            setTimeout(function () {
                blackjackD()
                }, 1999);
                return;
        }
        else{
            setTimeout(function () {
                barajaSD()
            }, 2000);
            turnoS = 3;
        }
    }
    console.log('dealer' + global_dealer);
    console.log('jugador' +global_jugador);
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
