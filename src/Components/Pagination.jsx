import React from 'react';

const Pagination = ({products, productPerPage, paginate}) => {
    const pageNumbers = []
    const pageCount = products && (products.length / productPerPage);
    console.log(pageCount)
    for (let i =1; i <= pageCount; i++) {
        pageNumbers.push(i)
    }

    return (
        <div className='Pagination'>
            {
                pageNumbers && pageNumbers.map(page => (
                    <div className='button'>
                        <a onClick={() => paginate(page)}>{page}</a>
                    </div>
                ))
            }
        </div>
    );
};

export default Pagination;