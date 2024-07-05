import { useState, useEffect } from "react";
import CategoryBar from "../components/categoryBar";
import Navbar from "../components/navbar";


const SearchPage = (props) => {
    const { categories ,searchText, setSearchText} = props;
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
        const data = await res.json();
        setProducts(data.products);
        console.log("API called with search text:", searchText);
    };

    useEffect(() => {      
        fetchProducts();
    }, [searchText]);

    useEffect(() => {
        fetchProducts();    
    }, []);

    

    return (
        <>
            <Navbar setSearchText={setSearchText} />
            <CategoryBar categories={categories} />
            <div className="products-container">
                {products.map((elem) => (
                    <div key={elem.id} className="product-card">
                        <img src={elem.thumbnail} alt={elem.title} className="product-image" />
                        <div className="product-info">
                            <h2 className="product-title">{elem.title}</h2>
                            <p className="product-description">{elem.description}</p>
                            <div className="product-rating">
                                {elem.rating} out of 5 stars
                                <span className="rating-count">({elem.stock} in stock)</span>
                            </div>
                            <p className="product-price">₹{elem.price}</p>
                            <button className="add-to-cart-button">Add to cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SearchPage;
