import './normalize.css'
import './styles.css'
import getLayout from './layout';
import { createKeys, getChar, pressed, upShift } from './keyboard';
import { EN_KEY_LAYOUT } from './constants';
import { getLocalStorage, setLocalStorage } from './localStore';

getLayout();

const keysContainer=document.querySelector('.keyboard__keys');

window.addEventListener("DOMContentLoaded", createKeys(EN_KEY_LAYOUT));

keysContainer.addEventListener("mousedown", (event)=>{getChar( event.target)});

keysContainer.addEventListener("mouseup", (event) => {
        const btn = event.target;
        pressed.delete(btn.dataset.id);
        if (btn.dataset.id==='ShiftRight' || btn.dataset.id ==='ShiftLeft') upShift();

});

document.addEventListener('keydown', (event) => {
    const activeKey = document.querySelector(`[data-id=${event.code}]`);
    if (activeKey){
        activeKey.classList.add("keyboard__key--dark"); 
        pressed.add(event.code);
        event.preventDefault();
        getChar(activeKey) 
    };    
});

document.addEventListener('keyup', (event) => {
    const activeKey = document.querySelector(`[data-id=${event.code}]`);
    if (activeKey){
        activeKey.classList.remove('keyboard__key--dark'); 
         pressed.delete(event.code); 
     if (event.code === 'ShiftRight' || event.code === 'ShiftLeft') upShift();    
    }
   });



window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);

 


  