// Código fonte do menu-mobile
const Btn = document.querySelector('.menu-trigger'), 
    AddClass = document.querySelector('nav'); // -> Declarando duas variáveis constantes que vão receber uma classe no seu documento html
    Btn.addEventListener('click', function() { //  -> Sensor de clicks
    AddClass.classList.toggle('show')
})




// Códio da Auto-escrita 
const textTyper = document.querySelector('.text'),
    blinkCursor = document.querySelector('.cursor');

const textList = ['Alberto', 'Full-Stack Developer']
    typing = 150,
    erasing = 50,
    switchDelay = 2500;

let listIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textList[listIndex].length) {
        if(!blinkCursor.classList.contains('typing')) blinkCursor.classList.add('typing');
        textTyper.textContent += textList[listIndex].charAt(charIndex);
        charIndex ++;
        setTimeout(type, typing);
    } else {
        blinkCursor.classList.remove('typing');
        setTimeout(erase, switchDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if(!blinkCursor.classList.contains('typing')) blinkCursor.classList.add('typing')
        textTyper.textContent = textList[listIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasing);
    
    } else {
        blinkCursor.classList.remove('typing');
        listIndex++;
        if(listIndex >= textList.length) listIndex=0;
        setTimeout(type, typing + 1000);

    }
}
document.addEventListener('DOMContentLoaded', function(){
    if(textList.length) setTimeout(type, switchDelay + 250)
})