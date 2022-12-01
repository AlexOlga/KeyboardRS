export default function getLayout(){
    const head=document.createElement(`header`);
    head.classList.add('header');
    const titleH1=document.createElement(`h1`);
    const bodyTeg=document.body;
    const wraper=document.createElement(`div`);
    wraper.classList.add('wraper');
    bodyTeg.append( wraper);
    wraper.append( head); 
    titleH1.innerText = "Виртуальная клавиатура";
    head.append( titleH1); 
    const main=document.createElement(`main`);
    wraper.append( main); 
    const rubric=document.createElement(`p`);
    rubric.classList.add('text');
    rubric.innerText = "Клавиатура создана в операционной системе Windows. Для переключения языка используйте комбинацию: левыe ctrl + shift";
    main.append( rubric); 
    const textarea = document.createElement(`textarea`);
    textarea.classList.add('textarea');
    textarea.placeholder = "Тут будет текст";
    main.append(textarea); 
    const keyboard=document.createElement(`div`);
    keyboard.classList.add('keyboard');
    main.append(keyboard); 
    const keysContainer=document.createElement(`div`);
    keysContainer.classList.add('keyboard__keys');
    keyboard.append(keysContainer);    
}