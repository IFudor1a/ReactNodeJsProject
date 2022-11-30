import React, {useState} from 'react';
import {Link} from "react-router-dom";

const categories = [
    {id: 1, value: 'Телефоны и гаджеты', name: 'Телефоны и гаджеты'},
    {id: 2, value: 'Компьютеры', name: 'Компьютеры'},
    {id: 3, value: 'Аудио', name: 'Аудио'},
    {id: 4, value: "Телевизоры", name: "Телевизоры"},
    {id: 5, value: "Камеры", name: "Камеры"}
]
const SearchLabel = ({setProductPerPage, setCategory, setSearch, products}) => {
    const handleChange = e => {
        e.preventDefault()
        setCategory(e.target.value)
    }
    console.log(products)

    return (
        <div className='SearchLabel'>
            <div className='Categories'>
                <select name='categories' onChange={handleChange}>
                    <option key='0' value="" disabled selected hidden>CATEGORIES</option>
                    {categories && categories.map(category => (
                        <option key={category.id} value={category.value}>{category.name}</option>
                    ))}
                </select>
            </div>
            <div className='Search'>
                <div>
                <input placeholder='Search placeholder...' onChange={(e) => {setSearch(e.target.value)}}/>
                <div className='Search_results'>
                    {
                        products && products.map((product, idx) => (
                            <Link key={idx} to={`/product/${product._id}`}>
                                <div className='Search_results_inner'>
                                    <img src={product.img}/>
                                    <div className='description'>
                                        <div className='title'>{product.title}</div>
                                        <div className='price'>{product.price}</div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                </div>
                    <button>Search</button>
            </div>
            <div className='PaginationInput'>
                <input placeholder='Product per page...' onChange={(e) => {setProductPerPage(parseInt(e.target.value))}}/>
            </div>
        </div>
    );
};

export default SearchLabel;