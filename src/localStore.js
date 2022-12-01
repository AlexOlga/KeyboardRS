import { createKeys, properties } from './keyboard';
import { EN_KEY_LAYOUT, RU_KEY_LAYOUT } from './constants';

function getLocalStorage() {
    if(localStorage.getItem('lang')) {
        properties.lang = localStorage.getItem('lang');
     if (properties.lang ==='en'){        
        createKeys(EN_KEY_LAYOUT)
     } else if (properties.lang==='ru'){       
        createKeys(RU_KEY_LAYOUT)
     }
    }
};

function setLocalStorage() {
    localStorage.setItem('lang', properties.lang);
}

export { getLocalStorage, setLocalStorage };