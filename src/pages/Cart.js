import { useEffect, useState } from 'react';
import './css/Cart.css';
import setTheme from '../util/setTheme';

export default function () {
    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [length,setLength] = useState(0);

    useEffect(() => {
        const cart = JSON.parse(window.localStorage.getItem('cart'));
        if (cart?.products) {
            let products = [];
            products = cart.products;
            console.log(products);
            const initialTotalPrice = cart.products.reduce((acc, product) => acc + product.price * product.count, 0);
            setProductsList(products);
            setTotalPrice(initialTotalPrice);
        } else {
            setProductsList([]);
        }
    }, []);
    function setProductsList(products){
        setProducts(products);
        setLength(products.length)
    }
    function handleIncrement(id) {
        const prdcts = products;
        let newTotalPrice = totalPrice;
        prdcts.map((product) => {
            if (product.id === id) {
                product.count = product.count + 1;
                product.total = product.price * product.count;
                newTotalPrice += product.price;
            }
        })
        setProductsList(prdcts);
        setTotalPrice(newTotalPrice);
        updateLocalStorage(prdcts);
    }


    function handleDecrement(id) {
        const prdcts = products;
        let newTotalPrice = totalPrice;
        prdcts.map((product) => {
            if(product.id === id){
                if(product.count -1 === 0){
                    prdcts.splice(prdcts.indexOf(product),1);
                                
                }
            }
            if (product.id === id) {
                if(product.count -1 > 0){
                product.count = product.count - 1;
                product.total = product.count * product.price;
                newTotalPrice -= product.price; 
                }
            }
        });
        setProductsList(prdcts);
        setTotalPrice(newTotalPrice);
        updateLocalStorage(prdcts);
    }


    function updateLocalStorage(updatedProducts) {
        window.localStorage.setItem('cart', JSON.stringify({ products: updatedProducts }));
    }

    return (
        <div className={`mantine-Container-root mantine-15pjuqq ${setTheme('mantine-15pjuqq')}`}>
            <div className={`mantine-1tckvsj ${setTheme('mantine-1tckvsj')}`} >
                <div className="mantine-Container-root mantine-15pjuqq" style={{ width: '100%' }}>
                    <h3 className={`mantine-Text-root mantine-Title-root mantine-1hrejo7 ${setTheme('mantine-1hrejo7')}`}><button
                        className={`mantine-UnstyledButton-root mantine-Button-root mantine-olvkvg ${setTheme('mantine-olvkvg')}`} type="button"
                        onClick={()=>window.location.href='/'}
                        data-button="true">
                        <div className="mantine-3xbgk5 mantine-Button-inner"><span
                            className="mantine-qo1k2 mantine-Button-label"><svg xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="tabler-icon tabler-icon-chevron-left">
                                <path d="M15 6l-6 6l6 6"></path>
                            </svg></span></div>
                    </button>Basket</h3>
                </div>
                <div className={`mantine-3zgt8p ${setTheme('mantine-3zgt8p')}`}></div>
            </div>
            <div className="mantine-1hnnj0w">
                {(length === 0 && <div>
                    <div className="mantine-1kaq23z"><img src="https://apex-tg-site.lavina.tech/static/media/pitsapart.d7047adf9bd1a887cbd4.png"
                        height="250" />
                        <h1 className={`mantine-Text-root mantine-Title-root mantine-1l71p2l ${setTheme('mantine-1l71p2l')}`}>No products yet</h1>
                            <div className={`mantine-Text-root mantine-60chd3 ${setTheme('mantine-60chd3')}`}>Your cart is empty, open "Menu" and select
                             liked product.</div><button
                                onClick={() => { window.location.href = '/' }}
                                className="mantine-UnstyledButton-root mantine-Button-root mantine-8exz2f" type="button"
                                data-button="true">
                            <div className="mantine-3xbgk5 mantine-Button-inner"><span
                                className="mantine-qo1k2 mantine-Button-label">Menu</span></div>
                        </button>
                    </div>
                </div>)}
                {(length != 0) &&
                    (
                        <div>
                            {products.map((product) => (
                                <div className={`mantine-aqummf ${setTheme('mantine-aqummf')} prdct-${product.id}`}>
                                    <div className="mantine-1jggmkl">
                                        <div className="mantine-Image-root mantine-15po0m8" style={{ width: "80px" }}>
                                            <figure className="mantine-11nhzn5 mantine-Image-figure">
                                                <div className="mantine-qqmv3w mantine-Image-imageWrapper">
                                                    <img className="mantine-3y8yz3 mantine-Image-image" src={product.imgPath} style={{ objectFit: 'cover', width: '80px', height: 'auto' }} />
                                                </div>
                                            </figure>
                                        </div>
                                        <div className="mantine-1phcad1">
                                            <h5 className={`mantine-Text-root mantine-Title-root mantine-1s1l1dq ${setTheme('mantine-1s1l1dq')}`}>{product.name}</h5>
                                            <span className="mantine-1ib17aw"></span>
                                        </div>
                                    </div>
                                    <div className="mantine-3zyj2n">
                                        <span className={`product-price ${setTheme('product-price')}`}>{product.total} so'm</span>
                                        <div className="mantine-1r5gzak">
                                            <div className="mantine-1523trd">
                                                <button onClick={() => { handleDecrement(product.id) }} className={`mantine-UnstyledButton-root mantine-Button-root mantine-13fglg0 ${setTheme('mantine-13fglg0')}`} type="button" data-button="true">
                                                    <div className="mantine-3xbgk5 mantine-Button-inner">
                                                        <span className="mantine-qo1k2 mantine-Button-label">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-minus">
                                                                <path d="M5 12l14 0"></path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </button>
                                                <div className={`mantine-Text-root mantine-1pbxw0k ${setTheme('mantine-1pbxw0k')}`}>{product.count}</div>
                                                <button onClick={() => handleIncrement(product.id)} className={`mantine-UnstyledButton-root mantine-Button-root mantine-13fglg0 ${setTheme('mantine-13fglg0')}`} type="button" data-button="true">
                                                    <div className="mantine-3xbgk5 mantine-Button-inner">
                                                        <span className="mantine-qo1k2 mantine-Button-label">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-plus">
                                                                <path d="M12 5l0 14"></path><path d="M5 12l14 0"></path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className={`mantine-16132zt ${setTheme('mantine-16132zt')}`}>
                                <div className="mantine-Container-root mantine-1y0ftcf">
                                    <button onClick={()=>window.location.href='/checkout'} className="mantine-UnstyledButton-root mantine-Button-root mantine-s9rjrk" type="button" data-button="true">
                                        <div className="mantine-3xbgk5 mantine-Button-inner">
                                            <span className="mantine-qo1k2 mantine-Button-label">ORDER FOR {totalPrice} so'm</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}