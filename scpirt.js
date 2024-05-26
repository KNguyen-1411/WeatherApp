const default_value = "--";
const seachip=document.getElementById("tpinput");
var tp= document.getElementById("tp");
var nhietdo = document.getElementById("nd");
var doam = document.getElementById("doam");
var nhietdocamnhan = document.getElementById("ndcn");
var trangthai = document.getElementById("tt");
var icon = document.getElementById("icon");
var mtmoc= document.getElementById("value-m");
var mtlan= document.getElementById("value-l");
var sgio= document.getElementById("value-s");
var tamnhin=document.getElementById("value-t");

var link = "https://api.openweathermap.org/data/2.5/weather?appid=d24f59f8ce4d5028b46e8579340869e1&lang=vi&units=metric&q=";
function print(data){
    //ten tp
    tp.innerHTML = data["name"] ||default_value;
    //nhiet do
    nhietdo.innerHTML =Math.round(data["main"]["temp"] ) +"°" ||default_value;
    //do am
    doam.innerHTML =Math.round(data["main"]["humidity"] * 10) / 10 +"%" ||default_value;
    //nhiet do cam thay
    nhietdocamnhan.innerHTML =Math.round(data["main"]["feels_like"] * 10) / 10 +"°"||default_value;
    //Trang thai
    var tt = data["weather"][0]["description"];
    trangthai.textContent = (tt || default_value).charAt(0).toUpperCase() + (tt || default_value).slice(1);
    // icon
    var idicon = data["weather"][0]["icon"];
    icon.setAttribute('src', `https://openweathermap.org/img/wn/${idicon}@2x.png`);
    //add
    mtmoc.innerHTML=moment.unix(data["sys"]["sunrise"]).format('H:mm')||default_value;
    mtlan.innerHTML=moment.unix(data["sys"]["sunset"]).format('H:mm')||default_value;
    sgio.innerHTML=(((data["wind"]["speed"]))*3.6).toFixed(2)+" Km/h"||default_value;
    tamnhin.innerHTML=(data["visibility"]/1000)+" Km"||default_value;
}
seachip.addEventListener('change',(e) => {
    var linktmp=link + e.target.value;
    weather(linktmp);
});
async function weather(link){
    const res=await fetch(link);
    const data=await res.json();
    console.log(data);
    print(data);
}
weather(link+"Huế");


const body = document.getElementsByClassName("main");
const btn = document.getElementById("btn");

function chedo() {
    body[0].classList.toggle("dark");
    btn.classList.toggle("fa-moon");
    btn.classList.toggle("fa-sun");
}