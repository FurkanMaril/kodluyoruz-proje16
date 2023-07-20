
let greetingsMessage = document.querySelector("#message")
let dateDOM = document.querySelector('#date');
let dateDay = document.querySelector('#dateDay');
let date = new Date();
let hour = date.getHours()
let minute = date.getMinutes()
let second = date.getSeconds()
let weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
let day = weekday[date.getDay()];

function getName(){
    let name = prompt("Adınız nedir? ");
    greetingsMessage.innerHTML = `Merhaba, <b>${name}</b> Hoş geldin!`;
    homeworkMessage.innerHTML = "tarihinde <b>Kodluyoruz Frontend Web Development Patikası'</b>nın Javascript bölümü 1. ödevindesiniz."; 
}

function getDate(){

    dateDOM.innerHTML = `${hour} : ${minute} : ${second} ${day}`
    dateDay.innerHTML = day;
}

setInterval(getDate, 1000); 
