import { EN_KEY_LAYOUT,  RU_KEY_LAYOUT, CODE_KEY, KEYS_DATA } from './constants';

const properties = {
    capsLock: false,
    lang: "en"
};
const pressed = new Set();

function createKeys(keyLayout) {
  const  keysContainer=document.querySelector('.keyboard__keys');
  keysContainer.innerHTML=''
  const fragment = document.createDocumentFragment();    
  keyLayout.forEach((key,i) => {
    const keyElement = document.createElement("button");
    keyElement.dataset.id = CODE_KEY[i];
    const insertLineBreak = ['Backspace','Backslash','Enter','ShiftRight'].indexOf(CODE_KEY[i]) !== -1;        
    // keyElement.setAttribute("type", "button");
    keyElement.classList.add("keyboard__key");
    switch(key){
      case "Backspace" :
       keyElement.classList.add("keyboard__key--big");
       keyElement.innerText=key;
       break;
      case "Caps":
       keyElement.classList.add("keyboard__key--big");
       keyElement.classList.add("keyboard__key--activebutonn");
       keyElement.innerText=key;
       if (properties.capsLock) keyElement.classList.add("keyboard__key--active");
       break;
      case "Enter":
        keyElement.classList.add("keyboard__key--big");
        keyElement.innerText=key;
        break;
      case "space":
        keyElement.classList.add("keyboard__key--space");
        break;
      case "Shift":
        keyElement.classList.add("keyboard__key--big");
        keyElement.innerText=key;                                      
        break;
      case "Alt":
      case "Сtrl":
        keyElement.innerText=key;
        break;
      
      default:
        if (properties.capsLock) {
          keyElement.innerText=key.toUpperCase();
        } else {
          keyElement.innerText=key;
        }                
        break;
    };
    fragment.appendChild(keyElement);
    if (insertLineBreak)fragment.append(document.createElement("br"));        
       
  });       
  keysContainer.append( fragment);
};

function pressedCaps(btn) {
  const keys = document.querySelectorAll('.keyboard__key');
  properties.capsLock = ! properties.capsLock;
  btn.classList.toggle("keyboard__key--active");
  keys.forEach((key)=>{
    if (key.innerText.length === 1) {
      if (properties.capsLock) {
        key.textContent=key.textContent.toUpperCase();
            } else {
              key.textContent=key.textContent.toLowerCase();
            };
            };               
        });
    }

function changeLang() {
  if (properties.lang === 'en') {
    properties.lang='ru' 
    createKeys(RU_KEY_LAYOUT);
    } else {
    properties.lang='en' ;
    createKeys(EN_KEY_LAYOUT);  
    }   
}

function pressedShift() {
    const keys=document.querySelectorAll('.keyboard__key');
    keys.forEach((key)=>{
      if (key.dataset.id in  KEYS_DATA ) {
        key.textContent = (properties.lang==="en") ? KEYS_DATA[key.dataset.id].enShift : KEYS_DATA[key.dataset.id].ruShift;
      } else {
          if (key.innerText.length === 1) {
            key.textContent = (properties.capsLock) ? key.textContent.toLowerCase() : key.textContent.toUpperCase();
          };         
      }
})
};


function getChar(btn) {
    
  const inputText=document.querySelector('.textarea'); 
  // const btn = event.target;
  pressed.add(btn.dataset.id);    
  if (btn.dataset.id === 'Space') { 
    inputText.value +=' ';        
    return
    };
  if (btn.dataset.id === "Enter"){
    inputText.value +="\n";        
    return;
    };
  if (btn.dataset.id === "Tab"){
    inputText.value +="  ";
    return;
    };
  if (btn.dataset.id === "Backspace"){
    inputText.value = inputText.value.slice(0, (inputText.value.length - 1));
    return;
    };
  if (btn.textContent.length === 1) { 
    inputText.value += btn.textContent;      
    return;
    };      
  if (btn.dataset.id === 'CapsLock') {
    pressedCaps(btn);
    return;  
    }; 
  if (pressed.has('ControlLeft') && pressed.has('ShiftLeft')){
    changeLang()              
  } else {
    if (pressed.has('ShiftRight') || pressed.has('ShiftLeft'))  pressedShift();      
  };
}

function upShift() {
  if (properties.lang ==='en'){        
      createKeys(EN_KEY_LAYOUT)
   } else if (properties.lang ==='ru'){       
      createKeys(RU_KEY_LAYOUT)
   }
  };

export {createKeys, getChar, properties, pressed, pressedShift, upShift, changeLang}