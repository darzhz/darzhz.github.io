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
const im = ["one","two","three","four"]
const imageBox = $.querySelector('.image_slider');
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
             if(x>=im.length-1){
                 imageBox.classList.toggle(im[x-1])
                 x=0;
              imageBox.classList.toggle(im[x])
             }
             imageBox.classList.toggle(im[x-1])
             imageBox.classList.toggle(im[x])
             x++
         }, 3500);
        }
})
//#endregion
// imageBox.addEventListener('click', ()=>{
   
// })
// function slideShow(){
//     let x= 0
//    let y = setInterval(() => {
//             if(x>=im.length-1){
//                 imageBox.classList.toggle(im[x-1])
//                 x=0;
//              imageBox.classList.toggle(im[x])
//             }
//             imageBox.classList.toggle(im[x-1])
//             imageBox.classList.toggle(im[x])
//             x++
//         }, 5000);
//         return y 
//     }
let wordz = ["i'm darsh!","i'm a &#60;webdeveloper&#47;&#62;","i'm a designer","i'm a designer...sortof","i wanna make some cool stuff","i'm darsh!"];
let translate = ["Hi.","नमस्ते.","こんにちは","Привет.","ഹായ്.","வணக்கம்.","أهلا.",".היי","Hi."];
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
}
