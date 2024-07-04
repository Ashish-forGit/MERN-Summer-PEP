import { useState } from "react";
import CategoryBar from "../components/CategoryBar";

import Navbar from "../components/navbar.js";


const SearchPage = (props) => {
    const { categories } = props;
    const [searchText, setSearchText] = useState("");
    const [products, setProducts] = useState([]);

    async function getData(searchText) {
        const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
        const data = await res.json();
        setProducts(data.products);
        console.log("API! Called");
    }

    return (
        <>
            <Navbar setSearchText={setSearchText} getData={getData} />
            <CategoryBar categories={categories} />
            <div className="products-container">
                {  products.map((elem) => {
                    return (
                        <div key={elem.id} className="product-card">
                            <img src={elem.thumbnail} alt={elem.title} className="product-image" />
                            <div className="product-info">
                                <h3 className="product-title">{elem.title}</h3>
                                <p className="product-description">{elem.description}</p>
                                <div className="product-rating">
                                    {Array.from({ length: Math.round(elem.rating) }).map((_, index) => (
                                        <span key={index}>&#9733;</span>
                                    ))}
                                    <span className="rating-count">{elem.rating} out of 5 stars</span>
                                </div>
                                <p className="product-price">₹{elem.price}</p>
                                <p className="product-discount">M.R.P: ₹{elem.mrp} ({elem.discount}% off)</p>
                                <p className="product-delivery">FREE delivery {elem.deliveryDate}</p>
                                <button className="add-to-cart-button">Add to cart</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default SearchPage;
