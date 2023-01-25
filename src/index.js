import './normalize.css'
import './styles.css'
import {getLayout} from './layout'
getLayout();
import {createKeys,getChar,properties,pressed,enKeyLayout, ruKeyLayout,pressedSift} from './keyboard';

const inputText=document.querySelector('.textarea');
const  keysContainer=document.querySelector('.keyboard__keys');



window.addEventListener("DOMContentLoaded", createKeys(enKeyLayout));
let keys=document.querySelectorAll('.keyboard__key');
keysContainer.addEventListener("mousedown",getChar);
keysContainer.addEventListener("mouseup",function (event){
        let btn=event.target;
        pressed.delete(btn.dataset.id); 
    
     if ((btn.dataset.id=='ShiftRight')|| (btn.dataset.id=='ShiftLeft')){
        upSift ();
}});

document.addEventListener('keydown', function(event) {
    const activeKey=document.querySelector(`[data-id=${event.code}]`);
    if (activeKey){
        activeKey.classList.add("keyboard__key--dark"); 
        pressed.add(event.code);
        if (pressed.has('ControlLeft')&& pressed.has('ShiftLeft'))    
       {
            if  (properties.lang==='en'){properties.lang='ru' 
            createKeys(ruKeyLayout) ;   }
            else {properties.lang='en' ;
            createKeys(enKeyLayout);
            }   
         } else{
        if( (event.code == 'ShiftRight')||(event.code == 'ShiftLeft')){
           
                pressedSift ()  
            } else{
              
                getKeyChar(event)
            }
        };       
    };
    
});


function getKeyChar(event){
   let activeKey=document.querySelector(`[data-id=${event.code}]`);
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
        case 'Space':
        case 'Backspace':
        break;
        default:
            event.preventDefault();
            inputText.value +=activeKey.textContent;
            break;          
}
};   


document.addEventListener('keyup',function (event){
    let activeKey=document.querySelector(`[data-id=${event.code}]`);
    if (activeKey){
        activeKey.classList.remove('keyboard__key--dark'); 
         pressed.delete(event.code); 
     if( (event.code == 'ShiftRight')||(event.code == 'ShiftLeft')){
        upSift ();}
    }
   });

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

 

  function upSift (){
    if (properties.lang=='en'){        
        createKeys(enKeyLayout)
     } else if (properties.lang=='ru'){       
        createKeys(ruKeyLayout)
     }
    };
  