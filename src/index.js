// Autor: Caique Sousa
import './style/index'
import 'wowjs'
import './pages/index-pages'
import './js/modernizr-custom'

// import logo1 from './assets/Logo Preto MM.jpg'
// import logo2 from './assets/LogoMM_so a bolinha.png'

// document.querySelectorAll('.logo1').innerHTML = `<img src="${logo1}" />`

const dataFinal = new Date("Sep 25, 2020 23:59:00").getTime()

    let crono = setInterval(function() {

    let dataAtual = new Date().getTime();
    let distance = dataFinal - dataAtual;
    let dias = Math.floor(distance / (1000 * 60 * 60 * 24));
    let horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("cronometro").innerHTML = dias + "d " + horas + "h "
    + minutos + "m ";

    if (distance < 0) {
        
    clearInterval(crono);
        document.getElementById("cronometrozero").innerHTML = "Encerou o evento";
    }
}, 1000)

let dataFinal2 = new Date("Sep 25, 2020 23:59:00").getTime()

    let crono2 = setInterval(function() {

    let dataAtual2 = new Date().getTime();
    let distance2 = dataFinal2 - dataAtual2;
    let dias2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
    let horas2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("cronometro2").innerHTML = dias2 + "d " + horas2 + "h "
    + minutos2 + "m ";

    if (distance2 < 0) {
        
    clearInterval(crono2);
        document.getElementById("cronometrozero2").innerHTML = "Encerou o evento";
    }
}, 1000)

let dataFinal3 = new Date("Sep 25, 2020 23:59:00").getTime()

    let crono3 = setInterval(function() {

    let dataAtual3 = new Date().getTime();
    let distance3 = dataFinal3 - dataAtual3;
    let dias3 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
    let horas3 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos3 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("cronometro3").innerHTML = dias3 + "d " + horas3 + "h "
    + minutos3 + "m ";

    if (distance3 < 0) {
        
    clearInterval(crono3);
        document.getElementById("cronometrozero3").innerHTML = "Encerou o evento";
    }
}, 1000)

let dataFinal4 = new Date("Sep 25, 2020 23:59:00").getTime()

    let crono4 = setInterval(function() {

    let dataAtual4 = new Date().getTime();
    let distance4 = dataFinal4 - dataAtual4;
    let dias4 = Math.floor(distance4 / (1000 * 60 * 60 * 24));
    let horas4 = Math.floor((distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos4 = Math.floor((distance4 % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("cronometro4").innerHTML = dias4 + "d " + horas4 + "h "
    + minutos4 + "m ";

    if (distance4 < 0) {
        
    clearInterval(crono4);
        document.getElementById("cronometrozero4").innerHTML = "Encerou o evento";
    }
}, 1000)



// new WOW().init();