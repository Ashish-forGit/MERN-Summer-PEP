import ReactDOM from "react-dom/client";
import "./globalStyles.css";
import HomePage from "./src/pages/homePage";
import SearchPage from "./src/pages/amazonSearchPage";
import ProductInfo from "./src/pages/productInfo";
import SignUp from "./src/pages/signUp";
import { useState } from "react";
import AppContext from "./src/context/appContext";
import Cart from "./src/pages/cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Login from "./src/pages/logIn";

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);



const categories = [
    "Fresh",
    "Amazon MiniTV",
    "Sell",
    "Best Sellers",
    "Mobiles",
    "Todays Deals",
    "Prime",
    "Fashion",
    "Electronics",
];


const App = () => {
    const [searchText, setSearchText] = useState("");
    const [loggedInUser, setloggedInUser] = useState(null); 
    const [user, setUser] = useState(null); // Add user state
    

    const router = createBrowserRouter([
        {
            path: '/',
            element: !loggedInUser ? <SignUp /> : <HomePage/>
        },
        {
            path: '/search',
            element: !loggedInUser ? <SignUp /> :  <SearchPage  />
        },
        {
            path: '/search/:id',
            element: !loggedInUser ? <SignUp /> :  <ProductInfo />
        },
        {
            path: '/cart',
            element: !loggedInUser ? <SignUp /> :  <Cart />
        },
        {
            path: '/signup',
            element: loggedInUser ? <HomePage /> : <SignUp />
        },
        {
            path: '/login',
            element: loggedInUser ? <HomePage /> : <Login />
        },
    ]);

    const [cart, setCart] = useState([]);
    const addToCart = (elem)=>{
        
        //check if elem is present all ready in cart
        const isPresent = cart.findIndex((cI)=> cI.id === elem.id);
        if(isPresent == -1){
            const newCart = [...cart];
            newCart.push({
                id: elem.id,
                title: elem.title,
                image: elem.thumbnail,
                price: elem.price,
                count : 1
            });
            setCart(newCart);
            toast.success(`${elem.title} added to cart!`);
        }else{
            const newCart = cart.map((cartItem)=>{
                if(cartItem.id === elem.id){
                    const newCartItem = {...cartItem}
                    newCartItem.count += 1;
                    return newCartItem;

                } else{
                    return cartItem;
                }
            });
            setCart(newCart); 
        }

    }

    const removeFromCart = (id) => {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
        toast.warn(`Item removed from cart.`);
    };

    

    const appLogin = (user)=>{
        setloggedInUser(user);
    }

    const appLogout = () => {
        setUser(null);
        setloggedInUser(null);
        setCart([]);
      };

    const contextValues ={
        searchText,
        setSearchText,
        categories,
        cart,
        addToCart,
        removeFromCart,
        user, setUser,
        loggedInUser, setloggedInUser, appLogin,
        appLogout
    }
    console.log("status", loggedInUser);

    return (
        <AppContext.Provider value={contextValues}>
            <RouterProvider router={router} />
            <ToastContainer autoClose={1000} />
        </AppContext.Provider>
        
    );
};

root.render(<App />);