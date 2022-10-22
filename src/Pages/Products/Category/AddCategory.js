import React, { useEffect, useRef, useState } from 'react';

const AddCategory = (e) => {
    const [categories, setCategories] = useState([]);
    // const [image, setImage] = useState([]);
    const categoryRef = useRef();
    const imageRef = useRef();
    // const formData = new FormData();

    const handelCategory = e =>{
        const category = categoryRef.current.value;
        const image = imageRef.current.files[0];
        // const newCategory = {category, image}
        // console.log(newCategory);

        const formData = new FormData();
        formData.append('categoryName', category);
        formData.append('image', image);
        fetch('http://localhost:5000/addCategory', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                alert('successfully added the Category. ')
                e.target.reset();
            }
        })
        .catch(error => {
        console.error('Error:', error);
        });
        e.preventDefault();
    }
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(req => req.json())
            .then(data => setCategories(data))
    }, [categories])
    const handleDeleteCategory = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/category/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainingUsers = categories.filter(order => order._id !== id);
                        // console.log(remainingUsers)
                        setCategories(remainingUsers);
                    }
                })
        }
    }

    return (
        // <div className='d-flex'>
        <div className='row'>
            <div className="col-md-5 border p-md-5">
                <form onSubmit={handelCategory}>
                    <h1>Add Category</h1><br/>
                    <div className="w-75 mx-5">
                            <input type="text" className="form-control mb-3" ref={categoryRef} placeholder="Enter A New Category Name" required/> 
                        
                            <input type="file" accept='image/*' className="form-control mb-3" ref={imageRef} required/> 
                        
                            <button type="submit" className="form-control btn btn-primary">Add</button>
                    </div>
                </form>
            </div>
            <div className="col-md-7 border p-md-5">
                <h1>Category List: {categories.length ? <>{categories.length}</> : 
                <div class="spinner-grow ms-1" style={{width: "2rem", height: "2rem"}} role="status">
                    {/* <span class="visually-hidden">Loading...</span> */}
                </div>}</h1><br/>
                
                    {categories.map(c => 
                    // <div className='d-flex justify-content-around mb-3'>
                    <div className='row border border-info border-3 m-1 product-hover p-2'  key={c._id}>
                        <div className="col-md-3">
                            <img src={`data:image/png;base64,${c.categoryimage}`} alt="" width="180" height="100" />
                        </div>
                        {/* <div className="col-md-7 p-3"> */}
                        <div className="col-md-7 d-flex justify-content-center align-items-center">
                            <h3 className="m-0">{c.categoryName}</h3>
                        </div>
                        <div className="col-md-2 d-flex justify-content-center align-items-center">
                            <button className=' bg-danger rounded px-3 ' onClick={() => handleDeleteCategory(c._id)}>Delete</button>
                        </div>
                    </div>)}
                
            </div>
        </div>
    );
};

export default AddCategory;