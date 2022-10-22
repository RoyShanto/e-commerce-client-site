import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product/Product';

const Products = () => {
    const { categoryName } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/products/${categoryName}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [categoryName])

    return (
        <div className='container'>
            <h1>All Products</h1>
            {products.length ?
            <div className="row row-cols-1 row-cols-md-3 g-5">
                {products.map(p => <Product product={p} key={p._id}/>)}
            </div> :
            <div class="spinner-grow mt-5" style={{width: "3rem", height: "3rem"}} role="status">
                <span class="visually-hidden">Loading...</span>
            </div>}
        </div>
    );
};

export default Products;