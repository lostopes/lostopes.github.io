var nombres = Array();
nombres[0] = "Zampando tortas-2003.mp3"
nombres[1] = "Hobbits-último ensayo 2006.mp3"
nombres[2] = "El mundo es feliz-último ensayo 2006.mp3"            
nombres[3] = "Gandaralf-2003.mp3"
nombres[4] = "Boromir-2003.mp3"
nombres[5] = "Topes-única demo 2004.mp3"

/*
var urlDescentralizada=Array();

//zampando
urlDescentralizada[0]="https://siasky.net/_AzNXTJ2PmDODBz0UBMQk0BcGBdpqy5DmfkYzd33aANHyQ";
//topes
urlDescentralizada[1]="https://siasky.net/AACAXAG2BZUWgEh0rpdR2-mwO84W1gF67cCEA5QPRP-Feg";
//hobbits
urlDescentralizada[2]="https://siasky.net/fAfXKQx6YHbIU9brlltuKU6l2lNULzrTZFa16j0vIw6h-A";

//mundo e feli
urlDescentralizada[3]="https://siasky.net/AABcJ-7anXiALNuTXa9R2sjSfMrkbCc4ynO4637_ijly8g";

//gandaralf
urlDescentralizada[4]="https://siasky.net/_AYVhq5bXUXXlCBBl136gnImC_R8uUyTxJB3hzrtGjUHtQ";

//boromir
urlDescentralizada[5]="https://siasky.net/_AlZlTHQ4FnpaTp0wpNxdzHb0qxMHUz66g1IiHDBDvks1w";
*/




var fondo = 0;//Math.floor(Math.random() * (nombres.length - 1));


var images = [];

function preloadIMG(from=0, to=nombres.length) {
    
    for (var i = from; i < to; i++) {
        images[i] = new Image();
        images[i].src = 'img/fondo' + i + '.jpg';
    }
}

var fraseAudioGlobal=null;
function decirPalabra() {
    if(!fraseAudioGlobal){
        fraseAudioGlobal = new Audio('mp3/myth.mp3');
        fraseAudioGlobal.play();
    }else{
        if(fraseAudioGlobal.paused){
            fraseAudioGlobal.play();
        }else{
            fraseAudioGlobal.pause();
        }
    }
}

function init() {
    var divGeneral = document.getElementById("lista");
    let audios = Array();
    for (let i = 0; i < nombres.length; i++) {
        let k = (i + 1);
        //titulo o link
        let titulo = document.createElement("span");
        titulo.className = "titulos";
        //titulo.style.textAlign="left";            
        titulo.id = "link" + k
        titulo.href = ""
        titulo.innerHTML = nombres[i].replace(/.mp3/, '');
        divGeneral.appendChild(titulo);

        //div
        let div = document.createElement("div");
        div.style.marginBottom = "1.2em";
        div.style.marginTop = "-1.5em"; //para corregir problema/error de "hobbitFont"

        //audio
        let audioObj = document.createElement("audio");
        audioObj.id = 'au' + k;
        audioObj.controls = 'controls';
        audioObj.className = "reproductor";
        audioObj.autobuffer = "autobuffer";
        audioObj.src = 'mp3/' + nombres[i];
        //audioObj.src = urlDescentralizada[i];
        audioObj.type = 'audio/mpeg';

        div.appendChild(audioObj);
        divGeneral.appendChild(div);

        if (i < nombres.length - 1) {
            audioObj.onended = function() {
                setFondo(k);
                document.getElementById('au' + (k + 1)).play();
            };
        }
        audios[i] = audioObj;
        audioObj.onplay = function() {
            console.log(i);
            setFondo(i);
            for (index = 0; index < audios.length; index++) {
                if (index != i) {
                    audios[index].pause();
                    audios[index].currentTime = 0;
                }
            }
        };
    }
    document.getElementById("TierraMedia").appendChild(divGeneral);
}

function setFondo(fondo) {
    document.body.style.backgroundImage = "url('img/fondo" + fondo + ".jpg')";
}

function rotarFondo() {
    fondo = (fondo + 1) % 7;
    setFondo(f);
}



//rotarFondo();
/*var timer=setInterval( function(){
 rotarFondo();
 }, 60*1000);*/
