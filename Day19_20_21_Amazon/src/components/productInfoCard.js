import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/appContext";

const ProductInfoCard = (props) => {
    const { data = [] } = props;
    const navigate = useNavigate();

    const handleProductInfo = (id) => {
        navigate(`/search/${id}`);
    };

    const contextData = useContext(AppContext)
    console.log(contextData);

    return (
        <div className="products-info-card">
            <h3>{data.title}</h3>
            <div className="products-item-cards-container">
                {data.map((elem) => (
                    <div key={elem.id} className="products-item-card" onClick={() => handleProductInfo(elem.id)}>
                        <img src={elem.thumbnail} alt={elem.title} />
                        <h6>{elem.title}</h6>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductInfoCard;
