import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
const Product = (props) => {
    // console.log(props.product);
    const {_id, name, price, description, productimage } = props.product;
    // console.log(name, price);
    return (
    <div className="col">
            <div className="card card-hover p-1">
                <img src={`data:image/png;base64,${productimage}`} className="card-img-top " alt="..."/>
                <div className="info">
                    <h1 className='mt-5 pt-5'>{name}</h1>
                    <h3>Price: ${price}</h3>
                    <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                    <Link to={`/product_details/${_id}`}>
                        <button>View Product</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;