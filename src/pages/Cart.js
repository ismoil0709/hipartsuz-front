import { useState } from 'react';
import './css/Cart.css';

export default function () {
    const cart = {
        id: '1',
        products: [{
            id: 0,
            price: 100,
            description: 'description',
            name: 'Pizza',
            img_path: 'https://media.istockphoto.com/id/938742222/photo/cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=D1z4xPCs-qQIZyUqRcHrnsJSJy_YbUD9udOrXpilNpI=',
            discount: '10',
            count: '11',
            category: {
                id: '0',
                name: 'New'
            }
        }]
    }

    return (
        <div className="mantine-Container-root mantine-15pjuqq">
            <div className="mantine-1tckvsj">
                <div className="mantine-Container-root mantine-15pjuqq" style={{ width: '100%' }}>
                    <h3 className="mantine-Text-root mantine-Title-root mantine-1hrejo7"><button
                        className="mantine-UnstyledButton-root mantine-Button-root mantine-olvkvg" type="button"
                        data-button="true">
                        <div className="mantine-3xbgk5 mantine-Button-inner"><span
                            className="mantine-qo1k2 mantine-Button-label"><svg xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="tabler-icon tabler-icon-chevron-left">
                                <path d="M15 6l-6 6l6 6"></path>
                            </svg></span></div>
                    </button>Basket</h3>
                </div>
                <div className="mantine-3zgt8p"></div>
            </div>
            <div className="mantine-1hnnj0w">
                {(cart.length === 0 && <div>
                    <div className="mantine-1kaq23z"><img src="https://apex-tg-site.lavina.tech/static/media/pitsapart.d7047adf9bd1a887cbd4.png"
                        height="250" />
                        <h1 className="mantine-Text-root mantine-Title-root mantine-1l71p2l">Пока нет товаров</h1>
                        <div className="mantine-Text-root mantine-60chd3">Ваша корзина пуста, откройте «Меню» и выберите
                            понравившийся товар.</div><button
                                onClick={() => { window.location.href = '/' }}
                                className="mantine-UnstyledButton-root mantine-Button-root mantine-8exz2f" type="button"
                                data-button="true">
                            <div className="mantine-3xbgk5 mantine-Button-inner"><span
                                className="mantine-qo1k2 mantine-Button-label">Меню</span></div>
                        </button>
                    </div>
                </div>)}
                {(cart.length != 0) && 
                (
                    <div>
                        {cart.products.map((prodcut) => (
                            <div className={`mantine-aqummf ${prodcut.id}`}>
                                <div className="mantine-1jggmkl">
                                    <div className="mantine-Image-root mantine-15po0m8" style={{ width: "80px;" }}>
                                        <figure className="mantine-11nhzn5 mantine-Image-figure">
                                            <div className="mantine-qqmv3w mantine-Image-imageWrapper">
                                                <img className="mantine-3y8yz3 mantine-Image-image" src={prodcut.img} style={{ objectFit: 'cover', width: '80px', height: 'auto' }} />
                                            </div>
                                        </figure>
                                    </div>
                                    <div className="mantine-1phcad1">
                                        <h5 className="mantine-Text-root mantine-Title-root mantine-1s1l1dq">ApexLava</h5>
                                        <span className="mantine-1ib17aw"></span>
                                    </div>
                                </div>
                                <div className="mantine-3zyj2n">
                                    <span>20000 сум</span>
                                    <div className="mantine-1r5gzak">
                                        <div className="mantine-1523trd">
                                            <button className="mantine-UnstyledButton-root mantine-Button-root mantine-13fglg0" type="button" data-button="true">
                                                <div className="mantine-3xbgk5 mantine-Button-inner">
                                                    <span className="mantine-qo1k2 mantine-Button-label">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-minus">
                                                            <path d="M5 12l14 0"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </button>
                                            <div className="mantine-Text-root mantine-1pbxw0k"></div>
                                            <button className="mantine-UnstyledButton-root mantine-Button-root mantine-13fglg0" type="button" data-button="true">
                                                <div className="mantine-3xbgk5 mantine-Button-inner">
                                                    <span className="mantine-qo1k2 mantine-Button-label">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-plus">
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
                        <div className="mantine-16132zt">
                            <div className="mantine-Container-root mantine-1y0ftcf">
                                <button className="mantine-UnstyledButton-root mantine-Button-root mantine-s9rjrk" type="button" data-button="true">
                                    <div className="mantine-3xbgk5 mantine-Button-inner">
                                        <span className="mantine-qo1k2 mantine-Button-label">ОФОРМИТЬ ЗА 20000 сум</span>
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