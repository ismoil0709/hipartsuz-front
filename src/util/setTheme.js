
const tg = window.Telegram.WebApp;

export default function setTheme(className){
    if('dark' === 'dark'){
        document.querySelector('body').style.backgroundColor = '#1a1b1e';
        return className + '-dark';
    }else{
        return className + '-light';
    }
}