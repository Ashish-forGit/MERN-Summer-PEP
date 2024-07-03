import ReactDOM from "react-dom/client";
import './globalStyles.css'
import { IoSearchSharp } from "react-icons/io5";

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const HomePage = () => {
  return (
    <div className="homepage-root-container">
      <nav className="homepage-nav">
        <h4>Amazon.in</h4>
        <p>address: <br/> LPU University</p>
        <div className="homepage-search-container">
            <select></select>
            <input></input>
            <button><IoSearchSharp /></button>
        </div>
        <h5>Profile</h5>
        <h5>Cart</h5>
      </nav>
      <div className="category-bar">Category bar</div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <HomePage />
      
    </div>
  );
};

root.render(<App />);
