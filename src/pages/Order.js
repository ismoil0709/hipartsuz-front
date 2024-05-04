
import { useState } from 'react';
import './css/Order.css'
import setTheme from '../util/setTheme';
import axios from 'axios';
import BASE_URL from '../util/BASE_URL';

const image_path = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAACICAYAAAA8uqNSAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAXEgAAFxIBZ5/SUgAACGdJREFUeJztmnlsVUUUxt1xB4kL0bhEBRQ1LgOI4oYbmxjjviSKKHHBNf6BgJGgRhGJAiqCCijiFtxFxSUxcUV5IosUimyF0g1aoNCWFtrxO+/NLfPmzX3tq329JXy/5EuaOzPn3t75OnPO3O6xByGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghWUcp1Q6aCH2dRl9BH0FvQI9D50L7RP3spAXARJ8D7YB0BiqEZkBdon5+kmUwyd0zNEegWugXqH3Uv4OLisUOh06BukSkzlCbqN9DsxBikAporVE+tD5klRGTPAFF/WvEwaS0h8ZAOdBqKC8iyb1/g4bs8kYJMcgdnn6HQMOhaqfvytayimAyRkJ1kG5Feg9qG/W7aTIhBrkuTf/XPKvNqZ5+e0JHQp2h06CTocOyudpgIr5qBYbw6UPo4Kz94tmkCQa5ytO/u9Xe21Q9ZSG5SwE0DepkjekKLYGWG80Mufc+popaZvUdX98ei80JJuXyBQv0tf/8E9cV+FmunfvXX3rgkiV67Jo1enx+vh6cm6u745o9mf0XLtTj0PZ2UZEetWqVvujvv9NOfjeMvyUnRw9fuVI/vmKFvg738/SrMyvJfs01by1GEwxyvdNXcpOzzYoxGtrWyCRX8pqbTMwu0Ban/XzPvTuZnMju92h9eyz2RzApJTU1OqBs+3b90L//6pVVVdplzubNuh9MIeaZXFCgd9TVJbVv2bFDP7BsWaoxoFGrV+uC6uqUmHm4z5DUMduh56HsTGS2aIJBpjt9ZaU4Eepmthu7bRY0CLoVetFjnlyVOIfZD5rrtE3x3HuQ02ejbF317ZZBNsEUwhcbNuhn8/J0VW1tykQGSJ/ZpaW61jFHwPLKSt0XJgpii5lmlpTo8IhaS6RnYCDHJBVQ72zNZVYIMciDJl+QyWsPdYBOh0ZCNU7fn6H9ocnO9Zc897rBs/pcbNokdq3VVgwd4Iyf5YyXQ7z6Azt3BXkFW4WYowYTLytDTkWFnlZYqD9fvz5+zaUIq8F0bC2vYyXZYK1AMnY04kjcrtDLiBuYSYz3GQw2FNvLMGwzP27cmDRu0NKlrkmKofN3mZUkxCBS3n4PfQv9AP2p/DlFJXSNiSO5yVij56COnnu1geqcGPeZNslDCsJWMmPUcsdcNyTFtwwyAZN4G3KDSrNy/LxpUzy/kLYL5s3Ty7Aq2KyDOextYezatUnt7xYXx6/3QT5jb18fYiXpiXjBOIm9eOvW+vbPYEZPTjIfOi7bc9sshBikMaqCJsn24Ikp+Uhb6Hi1s4qRPGOgJ84wM2Zv6Eun7XMr5gNOm+QiHZLuaxnkQiSXi6yJuh3JqT1J35WVJRlAEteuVvs9SGBtPjUTLflIsPbIKiK5Ta/585MksQJWwIiX4ZrHJO9C+2d/hv8nKnHUvj0DY8g2kAMNhQ51Yh0K9YPGQN+oRGUix/KSK5Q6W0igEdb4+1XyFrYJOhCStt9c84gRk+5vGUQqCpt+Vg4h+gY5h430t9vvxtZgI9uIXH/BmnwxyEKY8M/y8iTlYisLKEUuNDB1mxFVQme11Dw3Gbzkg6BfPVuHTO4Co3lmwqVKuRRq54kjW8DsDM3mGuRoYz67vT90qko+yZXDujtTnsEyyFxMVDqDzHZWkMYaZNK6dToTylEF3e+pgowGZHt+mwWV2P83WBPwtDHOvkZ7NTBeziemqdT8QlYPSWInQM9CPzVgEJGb7H4AjXOuiYmOTnkOyyClpoppboOMs3ITSXSlNJZEOEySvF5g5SiWaqBu2ZjPZgUv+jioJ9QXKjITcH2GMeQcxC1x34KOsc1ltgs32R3hxLrS6SOlcbEz5mXlOZH1lbnNbZBHkHMEyBZzl2f76CGHZ4sXxw/QBixaFLZ6vA8dkPJLtDZUIkmV7ymDoT7mrzP0HCQkxn3OBEqucVFI36IGDHJgyEoTSMzTxxu7BQwilVCZFXsGyuLzrBVCEl0plYtR6Yi+Rq7jMcfv0LGZvOPIUDurGFkBPoGGQCdlGGN4YwyCa0ep1BPTEZ5+T6QxiDyj9y+vJQwiR+tvYlsJKpkK5BhS6j6MlUXK5PdRDldbZyyjUg/LlkJnZPJ+I0Wllrnrw/5C08S42TORH0MdTX5yOHS1yUdCcxAr3tkh5lgN9Qh9jhYwiKgXSmipgoKTVLHDVhhFEtKkMSiNeybnH+vUrnRIJngMIroxwxiyMuSl+atvVBXjxIx5+t6U9jkyMEjGZa5z4CXfYkauWqXXbNum3TPZ4upq/STanJWjBOqXyXttFajE/5f+L4OYOL1UciXkSiqcmSrxBda+Pjwk3u1OP/mK28HXt35MYm+PT8jTWNqnFhbG9Wp+fvz7iT1h9+bmxnMF0RT0GeAY6BKsEnLk/gY0GaWt58i8XpKIygHaY8uX65uRnHr6bITSmrvVgpd+hEqUlu8ZTVXWB7AMY51iYi2CSsx2tcTE7Wr6PGzd6x3ozJBYHdXOMw9Jgm+DBqe9fyw2K2wSI1Q5NLAp75OkQSW+3M6BzlOJj3JyAHdk2jGx2EMqcb4QtSkCVUFXttQ7262AGS6EnlI7P9BNbHBMLLYvdAcUg7ao6P79UI7R34ROaIFXtXtgVow/VOIMZIFKPrKX3Ob4qJ+RRIhKHO/7klv5eHd31M9HIgYmGOUxR4Uxzt5RPx+JGJjgMpX4hC//nDTXlMRSuezZ8Giy26AS/2xEUxBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYRkwn+azpzXWCctmwAAAABJRU5ErkJggg==';

const tg = window.Telegram.WebApp;

export default function Order() {
    const [paymentType,setPaymentType] = useState('');
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
        let totalPrice = 15;

        const products = JSON.parse(window.localStorage.getItem('cart')).products;
        console.log(products);
        products.forEach(product => {
            productIds.push(product.id);
        });
        const order = {
            userId : user_id,
            productIds : productIds,
            paymentType : paymentType,
            time : formatDate(new Date()),
            totalPrice : totalPrice,
            comment : comment
        };
        axios.post(`${BASE_URL}/order/create`,{ 
            order
        })
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
                        <button onClick={() => window.location.href = '/cart'} className={`mantine-UnstyledButton-root mantine-Button-root mantine-olvkvg ${setTheme('mantine-olvkvg')}`} type="button" data-button="true">
                            <div className="mantine-3xbgk5 mantine-Button-inner">
                                <span className="mantine-qo1k2 mantine-Button-label">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-left">
                                        <path d="M15 6l-6 6l6 6"></path>
                                    </svg>
                                </span>
                            </div>
                        </button>Checkout</h3>
                </div>
                <div className={`mantine-3zgt8p ${setTheme('mantine-3zgt8p')}`}></div>
            </div>
            <form className="mantine-a9xc5k"><div className="mantine-sg9f0p">
                <div onClick={() => changePaymentType('cash')} id='payment-cash' className={`active-payment`}>Cash</div>
                <div onClick={() => changePaymentType('payme')} id='payment-payme' className={`mantine-1o7lgtz ${setTheme('mantine-1o7lgtz')}`}>
                    <div className="mantine-Image-root mantine-15po0m8" style={{ width: "100%" }}>
                        <figure className="mantine-11nhzn5 mantine-Image-figure">
                            <div className="mantine-qqmv3w mantine-Image-imageWrapper">
                                <img className="mantine-3y8yz3 mantine-Image-image" src={image_path} style={{ objectFit: 'cover', width: '100%', height: 'auto' }} alt='payme' />
                            </div>
                        </figure>
                    </div>
                </div>
                <div onClick={() => changePaymentType('click')} id='payment-click' className={`mantine-1o7lgtz ${setTheme('mantine-1o7lgtz')}`}>
                    <div className="mantine-Image-root mantine-15po0m8" style={{ width: '100%' }}>
                        <figure className="mantine-11nhzn5 mantine-Image-figure">
                            <div className="mantine-qqmv3w mantine-Image-imageWrapper">
                                <img className="mantine-3y8yz3 mantine-Image-image" src={image_path} style={{ objectFit: 'cover', width: '100%', height: 'auto' }} alt='payme' />
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
                                <span className="mantine-qo1k2 mantine-Button-label">Further 20000 so'm</span>
                            </div>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}