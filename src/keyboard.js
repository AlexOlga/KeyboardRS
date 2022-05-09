let  properties= {
    capsLock: false,
    lang: "en"
};
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
        };
export {createKeys,getChar,properties}