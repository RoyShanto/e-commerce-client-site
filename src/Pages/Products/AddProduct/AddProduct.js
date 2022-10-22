import React, { useEffect, useRef, useState } from 'react';
import './Product.css';
const AddProduct = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const categoryRef = useRef();
    const nameRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();
    const imgRef = useRef();


    useEffect(() => {
        fetch('http://localhost:5000/categories')
        .then(req => req.json())
        .then(data => setCategories(data))
    }, [])
    // console.log(categories);
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(req => req.json())
        .then(data => setProducts(data))
    }, [])

    const AddProduct = e => {
        const category = categoryRef.current.value;
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const description = descriptionRef.current.value;
        const img = imgRef.current.files[0];

        const formData = new FormData();
        formData.append('categoryName', category);
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('image', img);
         
        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfully added the Product.')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    const handleDeleteProducts = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainingProducts = products.filter(p => p._id !== id);
                        // console.log(remainingUsers)
                        setProducts(remainingProducts);
                    }
                })
        }
    }
    return (
        <div className='row '>
            {/* <div className="add-service my-3 d-flex justify-content-center align-items-center"> */}
            {/* <div className="border border-3 border-info p-3 pb-4 w-50 add-service-border"> */}
            <div className="col-md-3 border">
                {/* <div className="w-75 border p-md-5 p-2"> */}
                <h1>Add Product</h1>
                <form onSubmit={AddProduct} className='m-3'>
                    <div className="mb-3">
                    <select ref={categoryRef} className="form-control" id="cars">
                        <option value="Others">Select A Category</option>
                        {
                            categories.map(c => <option value={c.categoryName}>{c.categoryName}</option>)
                        }
                        </select>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" ref={nameRef} placeholder="Name" />
                    </div>
                    <div className="mb-3">
                        <input type="number" className="form-control" ref={priceRef} placeholder="Price" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" ref={descriptionRef} placeholder="Description" />
                    </div> 
                    <div className="mb-3">
                        <input type="file" className="form-control" ref={imgRef} placeholder="Image Link" required/>
                    </div>
                    <div className="d-flex justify-content-start">
                        <button type="submit" className="form-control btn btn-primary">Add Product</button>
                    </div>
                </form>
            </div>
            <div className='col-md-9'>
            <h1>Total Products: {products.length ? <>{products.length}</>: 
            <div class="spinner-grow ms-1" style={{width: "2rem", height: "2rem"}} role="status">
            {/* <span class="visually-hidden">Loading...</span> */}
            </div>
            }</h1>
            {
                products.map(product =>
                    < div className="row border border-info border-3 m-1 product-hover" key={product._id}>
                        <div className="col-md-2">
                            <img src={`data:image/png;base64,${product.productimage}`} alt="" width="180" height="100" />
                        </div>
                        <div className="col-md-9 text-start">
                            <b>Category:</b> {product.categoryName} <br />
                            <b>Name:</b> {product.name} <br />
                            <b>Price:</b> {product.price} <br />
                            <b>Description:</b> {product.description} <br />
                        </div>
                        <div className="col-md-1">
                            <button className="bg-danger rounded px-3 mt-4" onClick={() => handleDeleteProducts(product._id)}>Delete</button>
                        </div>
                    </div>)
            }
            </div>
        </div>
    );
};

export default AddProduct;