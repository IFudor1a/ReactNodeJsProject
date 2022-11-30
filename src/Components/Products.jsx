import React from 'react';
import {Link} from "react-router-dom";

const Products = ({products}) => {

    return (
        <div className='Products'>
            {
                Array.isArray(products) && products.map(product => (
                    <div className='product'>
                        <div className='img-container'>
                        <img src={product.img}/>
                        </div>
                        <div className='description'>
                            <Link to={`product/${product._id}`}>
                            <div className='title'>{product.title}</div>
                            <div className='price'>{product.price}</div>
                            </Link>
                            <button className='add_to_cart'>Add to cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Products;