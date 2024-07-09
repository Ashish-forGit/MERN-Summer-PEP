
import { useNavigate } from "react-router-dom";


const ProductInfoCard = (props) => {
    const { data = [] } = props;
    const navigate = useNavigate();

    const handleProductInfo = (id) => {
        navigate(`/search/${id}`);
    };

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
