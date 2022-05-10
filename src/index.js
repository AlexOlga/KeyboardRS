import './normalize.css'
import './styles.css'
import {getLayout} from './layout'
getLayout();
import {createKeys, getChar,properties} from './keyboard';

const inputText=document.querySelector('.textarea');
const  keysContainer=document.querySelector('.keyboard__keys');
const  enKeyLayout = [
    "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0","-","=", "Backspace",
    "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p","[","]","\\",
     "Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l",";","'", "Enter",
     "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?", "Shift","▲",
     "Ctrl","Alt", "space","Alt","Ctr","◄","▼","►"
 ];
 const  ruKeyLayout = [
    "ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0","-","=", "Backspace",
    "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з","х","ъ","\\",
     "Caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д","ж","э", "Enter",
     "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "Shift","▲",
     "Ctrl","Alt", "space","Alt","Ctr","◄","▼","►"
 ];


window.addEventListener("DOMContentLoaded", createKeys(enKeyLayout));
let keys=document.querySelectorAll('.keyboard__key');
keysContainer.addEventListener("click",getChar);

document.addEventListener('keydown', function(event) {
    const activeKey=document.querySelector(`[data-id=${event.code}]`);
    activeKey.classList.add("keyboard__key--dark");    
});


function getKeyChar(event){
    let activeKey=document.querySelector(`[data-id=${event.code}]`);
    activeKey.classList.remove('keyboard__key--dark');

    if (event.code == 'ControlLeft' && 'ShiftLeft') {
        if  (properties.lang==='en'){properties.lang='ru' 
        createKeys(ruKeyLayout)    }
        else {properties.lang='en' 
        createKeys(enKeyLayout)
    }   
    return; 
  } ;

    switch(event.code){
        case 'CapsLock':
            event.preventDefault();
            properties.capsLock= ! properties.capsLock;
            activeKey.classList.toggle("keyboard__key--active");
            let keys=document.querySelectorAll('.keyboard__key');
            for (let i=0; i< keys.length;i++) {                              
                if (keys[i].innerText.length === 1) {
                    if (properties.capsLock) {
                        keys[i].textContent=keys[i].textContent.toUpperCase();
                        
                    } else 
                    { 
                        keys[i].textContent=keys[i].textContent.toLowerCase();};
                };               
            };
        break;    
        case 'Backspace':
        event.preventDefault();
        inputText.value = inputText.value.slice(0, (inputText.textContent.length - 1));
        break;
        case 'Tab':
        event.preventDefault();
        inputText.value += ' ';
        break;
        case 'ShiftLeft':
        case 'ShiftRight':
        case 'ControlLeft': 
        case 'AltLeft':
        case 'AltRight':
        case 'ControlRight':
        event.preventDefault();            
        break;
        case 'ArrowUp':
        case 'ArrowLeft':
        case 'ArrowDown':
        case 'ArrowRight':
        case 'Enter':
        break;
        default:
            inputText.value +=activeKey.textContent;
            break;          
}
};   
document.addEventListener('keyup',getKeyChar);   

function setLocalStorage() {
    localStorage.setItem('lang', properties.lang);
  }

window.addEventListener('beforeunload', setLocalStorage);
  function getLocalStorage() {
    if(localStorage.getItem('lang')) {
        properties.lang = localStorage.getItem('lang');
     if (properties.lang=='en'){        
        createKeys(enKeyLayout)
     } else if (properties.lang=='ru'){       
        createKeys(ruKeyLayout)
     }
    }
  };
  window.addEventListener('load', getLocalStorage);