import React, {useEffect, useMemo, useState} from 'react';
import {Link, useLocation, useParams} from "react-router-dom";
import {_getProductById} from "../https/product-https";
import '../Styles/ProductPage.scss';

const ProductPage = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const {id} = useParams();
    useEffect(() => {
        _getProductById(id).then(data => setProduct(data))
        setLoading(false)
    }, [])
    return (
        <div style={{width:'100%', display: 'flex', alignItems:'center', height: '100%'}}>
            {loading && <div>Loading</div>}

            {product && <div className='ProductPage'>
                <div className='product_img_container'>
                    <img src={product.img}/>
                </div>
                <div className='product_info'>
                    <div className='title'>
                        {product.title}
                    </div>
                    <div className='box'>
                        <div className='category'>{product.category}</div>
                        <div className='price'>{product.price}</div>
                    </div>
                    <div className='Suppliers'>
                        <div>
                            Suppliers
                        </div>
                        {
                            product.suppliers.map((supplier, idx) => (
                                <a href={supplier.link}>{supplier.name}</a>
                            ))
                        }
                    </div>
                    <div className='link'>
                        <a href={product.link}>Buy Directly</a>
                        <button>Add To Card</button>
                    </div>
                </div>
            </div>
            }
        </div>
    );
};

export default ProductPage;