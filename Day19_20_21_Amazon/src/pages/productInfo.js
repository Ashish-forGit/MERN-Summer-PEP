import Navbar from "../components/navbar";
import CategoryBar from "../components/categoryBar";
import Footer from "../components/footer";
import '../../productInfo.css';
import useGetProductsById from "../hooks/useGetProductsById";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../context/appContext";

const ProductInfo = ({ setSearchText }) => {
    
    const { id } = useParams();
    
    const productInfo = useGetProductsById(id);
    const {addToCart} = useContext(AppContext)

    const navigate = useNavigate();
    const openSearchPage = ()=>{
        navigate("/search");
    }
    if (!productInfo) {
        return <div className="product-loading"> 🙏🏻Please Wait Product👜 is Loading...</div>;
    }

    return (
        <>
            <Navbar setSearchText={setSearchText} />
            <CategoryBar  />
            <div className="product-info-container">
                <div className="product-image-container">
                
                    <img src={productInfo.thumbnail} alt={productInfo.title} className="product-image-large" />
                    
                
                </div>
                <div className="product-details">
                    <h1 className="product-title">{productInfo.title}</h1>
                    <p className="product-description">{productInfo.description}</p>
                    <div className="product-rating">
                        {productInfo.rating} out of 5 stars
                        <span className="rating-count">({productInfo.stock} in stock)</span>
                    </div>
                    <p className="product-price">${productInfo.price}</p>
                    <button onClick={()=>{addToCart(productInfo)}} className="add-to-cart-button-info">Add to Cart</button>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default ProductInfo;
