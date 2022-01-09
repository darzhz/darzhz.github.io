//#region landing
const $ = document
const hamburger = $.querySelector('.hamburger')
const line = $.querySelector('.line')
const menu = $.querySelector('.sub-menu');
const me = $.querySelector('.me')
const about = $.querySelector('.about')
hamburger.addEventListener('click',()=>{
    menu.classList.toggle('oper');
    line.classList.toggle('rot')
})
const imageBox = $.querySelector('.image_slider').children;
let y;
me.addEventListener('click',()=>{
    about.classList.toggle('oper');
    let x= 0
    if(y != undefined){
        clearInterval(y)
        // console.log(y);
        y = undefined;
    }else{
     y = setInterval(() => {
        if(x> imageBox.length - 1){
                imageBox[x - 1].style.opacity = "0";
                imageBox[x - 1].style.display = "none";
                x = 0;
                imageBox[x].style.display = "block";
                imageBox[x].style.opacity = "1";
             }
             if(imageBox[x-1]){
             imageBox[x-1].style.opacity = "0";
            imageBox[x-1].style.display = "none";
         }
 
            imageBox[x].style.display = "block";
             imageBox[x].style.opacity = "1";
             x++;
             //console.log(x);
         }, 3500);
       }
})
//#endregion
let wordz = ["i'm darsh!","i'm a &#60;webdeveloper&#47;&#62;","i'm a designer","i'm a designer...sortof","i wanna make some cool stuff","i'm darsh!"];
let translate = ["Hi.","नमस्ते.","こんにちは","Привет.","ഹായ്.","أهلا.",".היי","Hi."];
let options = {
    strings: wordz,
    typeSpeed: 30,
    backSpeed: 40,
    backDelay: 1000,
    startDelay: 1000,
    fadeOut: false,
    loop:false
}
let options2 = {
    strings: translate,
    typeSpeed: 20,
    backSpeed: 40,
    backDelay: 1000,
    startDelay: 1000,
    fadeOut: true,
    loop:false
}
window.onload = (event) => {
let typed = new Typed(".typer", options);
let reg = new Typed("#words",options2);
let fileName;
if(innerWidth > 500){
    fileName = "particle.json";
}else{
    fileName = "particleMobile.json"
}
//i know i used a liberary for animations, i'm lazy..sue me..
particlesJS.load('bigboi', `./support/lib/${fileName}`, function() {
    console.log('callback - particles.js config loaded');
  });
}
let view = window.innerHeight * 0.01;
document.body.style.setProperty('--vh',`${view}px`);
window.addEventListener('resize',()=>{
    view = window.innerHeight * 0.01;
    document.body.style.setProperty('--vh',`${view}px`);
})
