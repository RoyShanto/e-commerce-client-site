import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id])
    console.log(product);
    // const addressRef = useRef();
    // const mobileRef = useRef();
    // const address = addressRef.current.value || '';
    // const mobileNo = mobileRef.current.value || '';
    
    return (
        <div>
            {product.name ? 
            <div className="container py-5">
                <form>
                    <div className="row p-2 border border-2 border-success" >
                        <div className="col-md-6">
                            <img className="img-fluid" src={`data:image/png;base64,${product.productimage}`} alt="" />
                        </div>
                        <div className="col-md-6">
                            <h2>{product.name}</h2>
                            <div className='container-fluid p-0 border border-info'>
                                <table class="table table-hover border m-0 ">
                                    <tbody>
                                        <tr>
                                            <th scope="row" className='bg-info'>Name</th>
                                            <td>{product.name}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className='bg-info'>Brand</th>
                                            <td>N/A</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className='bg-info'>Price</th>
                                            <td>{product.price}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className='bg-info'>Price</th>
                                            <td>{product.price}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className='bg-info'>Price</th>
                                            <td>{product.price}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className='bg-info'>Price</th>
                                            <td>{product.price}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className='bg-info'>Description</th>
                                            <td>sdfas dfgd dsf dfsdfsdf {product.description}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='row pt-2'>
                                <div className='col-md-6'><button type="submit" className="bg-warning py-2 w-75 border rounded fw-bold">Pay Order</button></div>
                                <div className='col-md-6'><button type="submit" className="bg-warning py-2 w-75 border rounded fw-bold">Add To Card</button></div>
                            </div>
                        </div>
                    </div>
                </form>
            </div> : 
            <div class="spinner-grow mt-5" style={{width: "3rem", height: "3rem"}} role="status">
                <span class="visually-hidden">Loading...</span>
            </div>}
        </div>
    );
};

export default ProductDetails;