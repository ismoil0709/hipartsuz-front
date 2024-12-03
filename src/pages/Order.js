
import { useState } from 'react';
import './css/Order.css'
import setTheme from '../util/setTheme';
import axios from 'axios';
import getBaseUrl from '../util/getBaseUrl';
import {useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";

const click_path = 'https://i.ibb.co/ZHzkNqX/click.png';
const payme_path = 'https://i.ibb.co/r3Hv8XF/image.png';

const tg = window.Telegram.WebApp;

export default function Order() {
    const loc = useLocation();
    const [paymentType,setPaymentType] = useState('CASH');
    const [totalPrice,setTotalPrice] = useState(0);
    const { t, i18n } = useTranslation();

    useState(()=>{
        let price = 0;
        const products = JSON.parse(window.localStorage.getItem('cart')).products;
        products.forEach(product => {
            price += (product.price * product.count);
        });
        setTotalPrice(price);
    },[])

    const user_id = tg.initDataUnsafe?.user?.id;
    function changePaymentType(type) {
        const el = document.getElementsByClassName('active-payment')[0];
        el.classList.remove('active-payment');
        el.classList.add(setTheme('mantine-1o7lgtz'))
        el.classList.add('mantine-1o7lgtz')
        if (type === 'cash') {
            document.getElementById('payment-cash').classList.add('active-payment');
            setPaymentType('CASH'); 
        } else if (type === 'payme') {
            document.getElementById('payment-payme').classList.add('active-payment');
            setPaymentType('PAYME')
        } else if (type === 'click') {
            document.getElementById('payment-click').classList.add('active-payment');
            setPaymentType('CLICK')
        }
        const el1 = document.getElementsByClassName('active-payment')[0];
        el1.classList.remove(setTheme('mantine-1o7lgtz'));
        el1.classList.remove('mantine-1o7lgtz');
    }
    function sendOrder(){
        let comment = document.getElementById('mantine-r1').value;
        console.log(comment);
        let productIds = [];
        let productQuantities = [];

        const products = JSON.parse(window.localStorage.getItem('cart')).products;
        console.log(products);
        products.forEach(product => {
            productIds.push(product.id);
        });
        products.forEach(product => {
            productQuantities.push({
                'productId' : product.id,
                'quantity' : product.count
            });
        });
        const orderDto = {
            'userId'  : user_id,
            'productIds' : productIds,
            'paymentType' : paymentType,
            'time' : formatDate(new Date()),
            'totalPrice' : totalPrice,
            'comment' : comment,
            'productQuantities' : productQuantities
        };
        console.log(getBaseUrl());
        axios.post(`${getBaseUrl()}/order/create`,orderDto);
        tg.close();
    }
    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
      
        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
      }

    return (
        <div className={`mantine-Container-root mantine-15pjuqq ${setTheme('mantine-15pjuqq')}`}>
            <div className={`mantine-1tckvsj ${setTheme('mantine-1tckvsj')}`}>
                <div className={`mantine-Container-root mantine-15pjuqq`} style={{ width: "100%" }}>
                    <h3 className={`mantine-Text-root mantine-Title-root ${setTheme('mantine-1hrejo7')} mantine-1hrejo7`}>
                        <button onClick={() => window.location.href = '/cart?lan=' + new URLSearchParams(loc.search).get("lan")} className={`mantine-UnstyledButton-root mantine-Button-root mantine-olvkvg ${setTheme('mantine-olvkvg')}`} type="button" data-button="true">
                            <div className="mantine-3xbgk5 mantine-Button-inner">
                                <span className="mantine-qo1k2 mantine-Button-label">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-left">
                                        <path d="M15 6l-6 6l6 6"></path>
                                    </svg>
                                </span>
                            </div>
                        </button>
                        {t('checkout')}</h3>
                </div>
                <div className={`mantine-3zgt8p ${setTheme('mantine-3zgt8p')}`}></div>
            </div>
            <form className="mantine-a9xc5k"><div className="mantine-sg9f0p">
                <div onClick={() => changePaymentType('cash')} id='payment-cash' className={`active-payment`}>{t('cash')}</div>
                <div onClick={() => changePaymentType('payme')} id='payment-payme' className={`mantine-1o7lgtz ${setTheme('mantine-1o7lgtz')}`}>
                    <div className="mantine-Image-root mantine-15po0m8" style={{ width: "100%" }}>
                        <figure className="mantine-11nhzn5 mantine-Image-figure">
                            <div className="mantine-qqmv3w mantine-Image-imageWrapper">
                                <img className="mantine-3y8yz3 mantine-Image-image" src={payme_path} style={{ objectFit: 'cover', width: '90%',height : 'auto' }} alt='payme' />
                            </div>
                        </figure>
                    </div>
                </div>
                <div onClick={() => changePaymentType('click')} id='payment-click' className={`mantine-1o7lgtz ${setTheme('mantine-1o7lgtz')}`}>
                    <div className="mantine-Image-root mantine-15po0m8" style={{ width: '100%' }}>
                        <figure className="mantine-11nhzn5 mantine-Image-figure">
                            <div className="mantine-qqmv3w mantine-Image-imageWrapper">
                                <img className="mantine-3y8yz3 mantine-Image-image" src={click_path} style={{ objectFit: 'cover', width: '100%', height: 'auto' }} alt='payme' />
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
                <div className="mantine-InputWrapper-root mantine-Textarea-root mantine-ff7twp">
                    <label className={`mantine-InputWrapper-label mantine-Textarea-label mantine-ittua2 ${setTheme('mantine-ittua2')}`} htmlFor="mantine-r1" id="mantine-r1-label">Comments</label>
                    <div className="mantine-Input-wrapper mantine-Textarea-wrapper mantine-12sbrde">
                        <textarea className={`mantine-Input-input mantine-Textarea-input mantine-1cp6ct5 ${setTheme('mantine-1cp6ct5')}`} id="mantine-r1" aria-invalid="false" style={{ height: '131.6px', '!important': true }}></textarea>
                    </div>
                </div>
                <div className={`mantine-1v9lolw ${setTheme('mantine-1v9lolw')}`}></div>
                <div className={`mantine-16132zt ${setTheme('mantine-16132zt')}`}>
                    <div className="mantine-Container-root mantine-1y0ftcf">
                        <button onClick={sendOrder} className="mantine-UnstyledButton-root mantine-Button-root mantine-s9rjrk" data-button="true">
                            <div className="mantine-3xbgk5 mantine-Button-inner">
                                <span className="mantine-qo1k2 mantine-Button-label">{`${t('order')} ${totalPrice} ${t('currency')}`}</span>
                            </div>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}