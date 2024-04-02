
const tg = window.Telegram.WebApp;

export default function setTheme(className){
    if(tg.colorScheme === 'dark'){
        return className + '-dark';
    }else{
        return className + '-light';
    }
}