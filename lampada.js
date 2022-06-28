const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function isLampBroken () {
    return lamp.src
    //O indexOf retorna a posição da string pesquisada, caso não encontre retorna -1
}

function lampOn () {
    lamp.src = 'img/ligada.jpg';
    
}
function lampOff () {
    lamp.src = 'img/desligada.jpg'
}

function lampBroken () {
    lamp.src = 'img/quebrada.jpg'
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
    //eventos para ligar e desligar a lâmpada.

lamp.addEventListener('mouseover', lampOn); 
lamp.addEventListener('mouseleave', lampOff);
    //eventos para quando o cursor do mouse passar pela imagem.

lamp.addEventListener('dblclick', lampBroken);
