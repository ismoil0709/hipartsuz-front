import './css/Home.css'
import React, { useState, useEffect } from 'react';
import setTheme from '../util/setTheme';
import scrollSpy from 'simple-scrollspy';
import axios from 'axios';
import getBaseUrl from "../util/getBaseUrl";

export default function () {

    const [products,setProducts] = useState([]);    
    useEffect(()=>{
        const onload =  async () => {
            // setProducts(
            //     [
            //         {
            //             'id' : 1,
            //             'name' : 'Pizza',
            //             'description' : 'Description',
            //             'price' : 10000,
            //             'imgPath' : 'https://picsum.photos/200/300?grayscale',
            //             'category' : {
            //                 'id' : 1,
            //                 'name' : 'New'
            //             },
            //             'discount' : '10'
            //         },
            //         {
            //             'id' : 2,
            //             'name' : 'Pizza',
            //             'description' : 'Description',
            //             'price' : 10000,
            //             'imgPath' : 'https://picsum.photos/200/300?grayscale',
            //             'category' : {
            //                 'id' : 2,
            //                 'name' : 'New'
            //             },
            //             'discount' : '10'
            //         },
            //         {
            //             'id' : 3,
            //             'name' : 'Pizza',
            //             'description' : 'Description',
            //             'price' : 10000,
            //             'imgPath' : 'https://picsum.photos/200/300?grayscale',
            //             'category' : {
            //                 'id' : 3,
            //                 'name' : 'New'
            //             },
            //             'discount' : '10'
            //         }
            //     ]
            // );
        
             await axios.get(`${getBaseUrl()}/product/get/all`).then((resp) => {
                console.log(resp);
                setProducts(resp.data);
            }
            );
        }
        onload();
    },[]);

    useEffect(()=>{
    
        scrollSpy('#nav-wrapp', {
            sectionClass: '.product-section',
            menuActiveTarget: '.mantine-s9arro',
            offset: 100,
            smoothScroll: true,
            smoothScrollBehavior: function(element) {
              element.scrollIntoView({ behavior: 'smooth' })
            },
            onActive: (el) => {
                el.scrollIntoView({behavior : 'smooth'})
            }
          });
    },[products]);

    products.sort(function(a,b){
        return a.category.id - b.category.id
    })
    let categories = products.reduce((acc, product) => {
        if (!acc.find((category) => category.id === product.category.id)) {
            acc.push(product.category);
        }
        return acc;
    }, []);
    function getCountOfProducts() {
        const cartData = window.localStorage.getItem('cart');
        if (cartData) {
            const products = JSON.parse(cartData).products;
            const uniqueProductIds = new Set();
            for (let i = 0; i < products.length; i++) {
                uniqueProductIds.add(products[i].id);
            }
            return uniqueProductIds.size;
        } else {
            return 0;
        }
    }    
    return (
        <div >
            <div className="mantine-Container-root mantine-15pjuqq">
                <div className={`mantine-1w6i6a8 ${setTheme('mantine-1w6i6a8')}`}>
                    <div className="mantine-Container-root mantine-15pjuqq">    
                        <div className="mantine-115iyaz" id="nav-wrapp">
                            {categories.map((category) => (
                                    <a
                                    href={`#c-${category.id}`}
                                        key={category.id}
                                        id={`category-${category.id}`}
                                        className={`mantine-s9arro ${setTheme('mantine-s9arro')}`}
                                    >
                                        {category.name}
                                    </a>
                                ))}
                        </div>
                    </div>
                </div>
                <div style={{ height: '60px' }}></div>
                {
                    categories.map((category => (
                        <div className='product-section' id={`c-${category.id}`} style={{ marginTop: '10px' }}>
                            <div className={`mantine-Grid-root mantine-9zohaa ${setTheme('mantine-9zohaa')}`}>
                                {
                                    products.filter(product => product.category.id === category.id).map(product => (
                                        <div className="mantine-Grid-col mantine-fhjbsl">
                                            <div onClick={() => { window.location.href = `/product?id=${product.id}` }} className={`mantine-Paper-root mantine-Card-root mantine-9tuz4g ${setTheme('mantine-9tuz4g')}`} style={{ cursor: 'pointer' }}>
                                                 {(product.discount > 0 && 
                                                <div className="mantine-Badge-root mantine-6h9eby">
                                                    <span className="mantine-h9iq4m mantine-Badge-inner">{product.discount}%
                                                    </span>
                                                </div>
                                                )}
                                                <div className="mantine-Card-cardSection mantine-1btp06s" padding="lg" data-first="true">
                                                    <div className="mantine-Image-root mantine-15po0m8" style={{ width: '120px' }}>
                                                        <figure className="mantine-11nhzn5 mantine-Image-figure">
                                                            <div className="mantine-qqmv3w mantine-Image-imageWrapper"><img
                                                                className="mantine-3y8yz3 mantine-Image-image"
                                                                src={product.imgPath}
                                                                style={{ objectFit: 'cover', width: '120px', height: '120px' }}
                                                                loading="lazy" alt="img" />
                                                            </div>
                                                        </figure>
                                                    </div>
                                                </div>
                                                <div className="mantine-Group-root mantine-6qpjlo">
                                                    <div className={`mantine-Text-root mantine-152y8ed ${setTheme('mantine-152y8ed')}`}>{product.name}</div>
                                                    </div>
                                                {(product.description != undefined && 
                                                    <div className="mantine-Text-root mantine-rwoji2">{product.description.substring(0,13)}...</div>
                                                    )}
                                                <div className="mantine-Text-root mantine-rwoji2"></div>
                                                {(product.discount > 0) && 
                                                <div className="mantine-Text-root mantine-qxe4dx">{product.price} so'm</div>
                                                }
                                                <span className={`mantine-qxe4dyy ${setTheme('mantine-qxe4dyy')}`}>{product.discount > 0 ? product.price - (product.price * product.discount) / 100 : product.price} so'm</span><button
                                                    className="mantine-UnstyledButton-root mantine-u169ik" type="button"><svg
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right">
                                                        <path d="M9 6l6 6l-6 6"></path>
                                                    </svg></button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )))
                }
                <div onClick={()=>window.location.href='/cart'} className="mantine-1nt18gn">
                    <div className="mantine-n3zmiq"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" className="tabler-icon tabler-icon-shopping-cart">
                        <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                        <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                        <path d="M17 17h-11v-14h-2"></path>
                        <path d="M6 5l14 1l-1 7h-13"></path>
                    </svg>
                    {getCountOfProducts() >0 && (
                        <div className="mantine-11i0awo" >{getCountOfProducts()}</div>
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
}