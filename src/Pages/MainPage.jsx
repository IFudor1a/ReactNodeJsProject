import React, {useEffect, useMemo, useState} from 'react';
import '../Styles/MainPage.scss'
import SearchLabel from "../Components/SearchLabel";
import Products from "../Components/Products";
import {_getProducts} from "../https/product-https";
import Pagination from "../Components/Pagination";

const MainPage = () => {
    const [products, setProducts] = useState()
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [productPerPage, setProductPerPage] = useState(10)
    const [category, setCategory] = useState()
    const [search, setSearch] = useState('')


    useEffect(() => {
        setLoading(true)
        _getProducts().then(r => setProducts(r)).then(r =>
            setLoading(false)
        )
    }, [])

    const paginate = (page) => {
        setCurrentPage(page)
    }

    const getFilteredList = () => {
        if (!category) {
            return products
        }
        return products.filter((product) => product.category === category)
    }
    const getSearchResults = () => {
        if (!search) {
            return []
        }
        console.log(search.toLowerCase())
        return  products.filter((product) => product.title.toLowerCase()
            .includes(search.toLowerCase()))

    }
    const searchFilteredList = useMemo(getSearchResults, [search])
    console.log(searchFilteredList)
    const filteredList = useMemo(getFilteredList, [category, products])
    const LastPostIndex = currentPage * productPerPage
    const FirstPostIndex = LastPostIndex - productPerPage
    const currentProducts = filteredList && filteredList.slice(FirstPostIndex, LastPostIndex)


    return (
        <div className='MainPage'>
            {Array.isArray(products) &&
            <SearchLabel setProductPerPage={setProductPerPage} setCategory={setCategory} setSearch={setSearch} products={searchFilteredList}/>}
            {loading && <div>Loading...</div>}
            {!loading && <Products products={currentProducts}/>}
            {Array.isArray(products) &&
            <Pagination products={filteredList} productPerPage={productPerPage} paginate={paginate}/>}
        </div>
    );
}

export default MainPage;