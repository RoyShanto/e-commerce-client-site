import React from 'react';
import { Link } from 'react-router-dom';
const Category = (props) => {
    const {categoryName, categoryimage} = props.Category;

    return (
        <Link to={`/products/${categoryName}`}>
        <div className="col">
            <div className="card card-hover p-1">
                <img src={`data:image/png;base64,${categoryimage }`} className="card-img-top " alt="..."/>
                <div className="info mt-5 pt-5">
                    <h1 className='p-2 bg-secondary '>{categoryName}</h1>
                    {/* <Link to={`/products/${categoryName}`}>
                        <button>Show Products</button>
                    </Link> */}
                    {/* <button onClick={() => handleProducts(categoryName)}>Show Products</button> */}
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Category;