import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Categories = () => {
        const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(req => req.json())
        .then(data => setCategories(data))
    },[])
    return (
        <>
            <h1>All Categories</h1>
                {categories.length ?
                <div className='row row-cols-1 row-cols-md-3 g-5'>
                    {categories.map(c => <Category key={c._id} Category={c}/>)}
                </div> : 
                <div class="d-flex justify-content-center">
                    <div class="spinner-border text-info mt-5" style={{width: "3rem", height: "3rem"}} role="status"></div>
                </div>}
        </>
    );
};

export default Categories;