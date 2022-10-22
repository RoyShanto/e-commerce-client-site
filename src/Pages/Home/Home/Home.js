import React from 'react';
import Categories from '../Categories/Categories';
// import './Home.css';
const Home = () => {
    return (
        <div className='container'>
            <h1>Home</h1>
            {/* <section className="row row-cols-1 row-cols-md-3 g-5"> */}
            <section>
                <Categories/>
            </section>
        </div>
    );
};

export default Home;