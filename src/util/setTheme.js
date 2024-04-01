
const tg = window.Telegram.WebApp;

export default function setTheme(className){
    if('dark' === 'dark'){
        return className + '-dark';
    }else{
        return className + '-light';
    }
}