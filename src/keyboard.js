let  properties= {
    capsLock: false,
    lang: "en"
};
let pressed = new Set();
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
function createKeys(keyLayout) {
    const  keysContainer=document.querySelector('.keyboard__keys');
    keysContainer.innerHTML=''
    const fragment = document.createDocumentFragment();
    const codeKey=['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
     'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash',
      'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
       'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight',  'ArrowUp', 
       'ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
    keyLayout.forEach((key,i) => {
        const keyElement = document.createElement("button");
        keyElement.dataset.id=codeKey[i];
        const insertLineBreak = ['Backspace','Backslash','Enter','ArrowUp'].indexOf(codeKey[i]) !== -1;
        // Add attributes/classes
        keyElement.setAttribute("type", "button");
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
                    if (properties.capsLock){
                        keyElement.classList.add("keyboard__key--active");
                    }
                    break;
            case "Enter":
                keyElement.classList.add("keyboard__key--big");
                keyElement.innerText=key;
                break;
            case "space":
                keyElement.classList.add("keyboard__key--space");
                 break;
            case "Shift":
                keyElement.innerText=key;                                 
                break;
            case "Shift":
                keyElement.classList.add("keyboard__key--big");
                 keyElement.innerText=key;                                      
                break;
            case "Alt":
                keyElement.innerText=key;
                 break;
            case "Сtrl":
                 keyElement.innerText=key;
                  break;
            default:
                if (properties.capsLock){
                    keyElement.innerText=key.toUpperCase();;
                } else{
                    keyElement.innerText=key;
                }
                
                break;
            };
    fragment.appendChild(keyElement);
    if (insertLineBreak) {
         fragment.append(document.createElement("br"));
            }
        });       
keysContainer.append( fragment);
    };
  

    function getChar(event){   
        const inputText=document.querySelector('.textarea'); 
        
        let btn=event.target;
        pressed.add(btn.dataset.id);    
        if  (btn.textContent.length==0) { 
            inputText.value +=' ';        
            return
        } ;
        if  (btn.textContent.length==1) { 
          inputText.value +=btn.textContent;      
            return
        } ;
        if (btn.textContent=="Enter"){
            inputText.value +="\n";        
            return;
        };
        if (btn.textContent=="Tab"){
            inputText.value +="  ";
             return;
        };
        if (btn.textContent=="Backspace"){
            inputText.value = inputText.value.slice(0, (inputText.value.length - 1));
            return;
        };
        
        if (btn.textContent=='Caps'){
            let keys=document.querySelectorAll('.keyboard__key');
            properties.capsLock= ! properties.capsLock;
            btn.classList.toggle("keyboard__key--active");
            for (let i=0; i< keys.length;i++) {
                if (keys[i].innerText.length === 1) {
                    if (properties.capsLock) {
                        keys[i].textContent=keys[i].textContent.toUpperCase();
                    } else 
                    {keys[i].textContent=keys[i].textContent.toLowerCase();};
                };               
            }
            return;  
        }; 
        if (pressed.has('ControlLeft')&& pressed.has('ShiftLeft'))    
        {
             if  (properties.lang==='en'){properties.lang='ru' 
             createKeys(ruKeyLayout) ;   }
             else {properties.lang='en' ;
             createKeys(enKeyLayout);
             }   
          } else{
         if (pressed.has('ShiftRight')|| pressed.has('ShiftLeft')){            
            pressedSift ()  
        }
        };
    };
    function pressedSift (){
        const replacementEn=["~","!","@","#","$","%","^","&","*","(",")","_","+"];
        const replacementRu=["Ё","!","\"","№",";","%",":","?","*","(",")","_","+"];
        let keys=document.querySelectorAll('.keyboard__key');
        for (let i=0; i<13;i++){
            if (properties.lang=="en") {keys[i].textContent=replacementEn[i]; };
            if (properties.lang=="ru") {keys[i].textContent=replacementRu[i]; } ;       
        }
        for (let i=13; i< keys.length;i++) {
            if (properties.lang=="en"){
                switch(i){
                    case 25 :
                        keys[i].textContent="{";
                        break;
                    case 26 :
                        keys[i].textContent="}";
                        break;
                    case 27 :
                        keys[i].textContent="|";
                        break;
                    case 38 :
                        keys[i].textContent=":";
                        break;
                    case 39 :
                        keys[i].textContent='"';
                        break;
                    case 49 :
                        keys[i].textContent="<";
                        break;
                    case 50 :
                        keys[i].textContent=">";
                        break;
                    case 51 :
                        keys[i].textContent="?";
                        break;
                    default:   
                        if (keys[i].innerText.length === 1) {
                            if (properties.capsLock) { 
                                keys[i].textContent=keys[i].textContent.toLowerCase();                             
                                } else {
                                keys[i].textContent=keys[i].textContent.toUpperCase();
                                };                                       
                                         
                           };
                        
                        break;               
                    };
            };
            if (properties.lang=="ru"){
                switch(i){
                    case 27 :
                        keys[i].textContent="/";
                        break;
                    case 51 :
                        keys[i].textContent=",";
                        break;
                    default:   
                        if (keys[i].innerText.length === 1) {                                        
                            if (properties.capsLock) { 
                                keys[i].textContent=keys[i].textContent.toLowerCase();                             
                                } else {
                                keys[i].textContent=keys[i].textContent.toUpperCase();
                                };                                                 
                               };                   
                            
                        break;               
                    };
            };        
            };
      };

export {createKeys,getChar,properties,pressed,enKeyLayout, ruKeyLayout,pressedSift}