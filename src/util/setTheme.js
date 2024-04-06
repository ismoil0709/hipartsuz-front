
const tg = window.Telegram.WebApp;

export default function setTheme(className){
    if(tg.colorScheme === 'dark'){
        document.querySelector('body').style.backgroundColor = '#1a1b1e';
        return className + '-dark';
    }else{
        return className + '-light';
    }
}