import { useEffect, useState } from 'react';
import './css/ShowProduct.css'
import setTheme from '../util/setTheme';
import axios from 'axios';
import BASE_URL from '../util/BASE_URL';

const tg = window.Telegram.WebApp;

export default function () {
    const [product_count, setProduct_count] = useState(1);
    const [product, setProduct] = useState({});

    useEffect(() => {
        const product_id = window.location.href.substring(window.location.href.indexOf('id') + 3);
        axios.get(`${BASE_URL}/product/get/ ${product_id}`).then((resp) => {
            console.log(resp);
            setProduct(resp.data);
        });
    }, []);
    function modifyCount(value) {
        if (value >= 1) {
            setProduct_count(value);
        }
    }
    function addToCart() {
        let products = [];
        let isNewProduct = true;
    
        if (localStorage.getItem('cart')) {
            products = JSON.parse(localStorage.getItem('cart')).products;    
            for (let i = 0; i < products.length; i++) {
                if (products[i].id === product.id) {
                    products.splice(i, 1);
                    isNewProduct = false;
                    break;
                }
            }
        }
    
        const price = product.discount > 0 ? product.price - (product.price * product.discount) / 100 : product.price;
            products.push({
            id: product.id,
            name: product.name,
            imgPath: product.imgPath,
            price: price,
            count: product_count,
            total: product_count * price
        });
    
        localStorage.setItem('cart', JSON.stringify({
            'products': products
        }));
    
        window.location.href = '/';
            return isNewProduct;
    }
    
    return (
        <div className={`mantine-Paper-root mantine-Modal-modal mantine-adyf3h ${setTheme('mantine-adyf3h')}`}
            style={{
                transitionProperty: 'opacity',
                transitionDuration: '600ms',
                transitionTimingFunction: 'ease',
                opacity: '1'
            }}
            role="dialog" aria-labelledby="mantine-r1-title" aria-describedby="mantine-r1-body" aria-modal="true"
            tabIndex="-1">
            <div className="mantine-121w2fi mantine-Modal-header"  >
                <div className="mantine-Text-root mantine-Modal-title mantine-cx9mud" id="mantine-r1-title"></div><button
                    onClick={() => { window.location.href = '/' }}
                    className="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-Modal-close mantine-1dcetaa"
                    type="button"><svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="16"
                        height="16">
                        <path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                            fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg></button>
            </div>
            <div id="mantine-r1-body" className="mantine-l553vn mantine-Modal-body">
                <div className="mantine-7s19p3">
                    <div className="mantine-Image-root mantine-15po0m8" style={{
                        width: '100%',
                        minHeight: '350px'
                    }}>
                        <figure className="mantine-11nhzn5 mantine-Image-figure">
                            <div className="mantine-qqmv3w mantine-Image-imageWrapper"><img
                                className="mantine-3y8yz3 mantine-Image-image"
                                src={product.imgPath}
                                style={{
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: 'auto'
                                }}
                                loading="lazy" /></div>
                        </figure>
                    </div>
                </div>
                <h4 className={`mantine-Text-root mantine-Title-root mantine-1dv2r7k ${setTheme('mantine-1dv2r7k')}`}>{product.name}</h4>
                <div className={`mantine-Text-root mantine-1pbxw0k ${setTheme('mantine-1pbxw0k')}`}>{product.description === undefined ? product.name : product.description}</div>
                <div className="mantine-1r5gzak">
                    <h5 className={`mantine-Text-root mantine-Title-root mantine-1s1l1dq ${setTheme('mantine-1s1l1dq')}`}>Quantity:</h5>
                    <div className={`mantine-1523trd ${setTheme('mantine-1523trd')}`}><button
                        onClick={() => modifyCount(product_count - 1)}
                        className={`mantine-UnstyledButton-root mantine-Button-root mantine-13fglg0 ${setTheme('mantine-13fglg0')}`}
                        type="button" data-button="true">
                        <div className="mantine-3xbgk5 mantine-Button-inner"><span
                            className="mantine-qo1k2 mantine-Button-label"><svg
                                xmlns="http://www.w3.org/2000/svg" width="18"
                                height="18" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round"
                                className="tabler-icon tabler-icon-minus">
                                <path className={`${setTheme('icon')}`} d="M5 12l14 0"></path>
                            </svg></span></div>
                    </button>
                        <div className={`mantine-Text-root mantine-1pbxw0k ${setTheme('mantine-1pbxw0k')}`}>{product_count}</div><button
                            onClick={() => modifyCount(product_count + 1)}
                            className={`mantine-UnstyledButton-root mantine-Button-root mantine-13fglg0 ${setTheme('mantine-13fglg0')}`}
                            type="button" data-button="true">
                            <div className="mantine-3xbgk5 mantine-Button-inner"><span
                                className="mantine-qo1k2 mantine-Button-label"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="18"
                                    height="18" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round"
                                    className="tabler-icon tabler-icon-plus">
                                    <path className={`${setTheme('icon')}`} d="M12 5l0 14"></path>
                                    <path className={`${setTheme('icon')}`} d="M5 12l14 0"></path>
                                </svg></span></div>
                        </button>
                    </div>
                </div>
                <div className={`mantine-16132zt ${setTheme('mantine-16132zt')}`}>
                    <div className="mantine-Container-root mantine-1y0ftcf">
                        {(product.discount > 0 &&
                            <div className="mantine-1o499t4">
                                <div className="mantine-Text-root mantine-1dxpbjr">Discount {product.discount}%</div>
                                <div className={`mantine-Text-root mantine-ywpxau ${setTheme('mantine-ywpxau')}`}>{product.price} so'm</div>
                            </div>
                        )}
                        <button
                            onClick={addToCart}
                            className="mantine-UnstyledButton-root mantine-Button-root mantine-s9rjrk"
                            type="button" data-button="true">
                            <div className="mantine-3xbgk5 mantine-Button-inner"><span
                                className="mantine-qo1k2 mantine-Button-label">ADD TO CART FOR {product.discount > 0 ? (product.price - ((product.price * product.discount) / 100)) * product_count : product.price * product_count} so'm</span></div>
                        </button></div>
                </div>
                <div className="mantine-1avyp1d" style={{ height: '80px' }}></div>
            </div>
        </div>
    );
}