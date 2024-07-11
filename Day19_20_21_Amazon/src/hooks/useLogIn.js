import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../context/appContext';

const useLogin = () => {
    
    const { setloggedInUser, appLogin, setUser } = useContext(AppContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const login = async ({ email, password }) => {
        setLoading(true);
        setError(null);
        try {

            const URL = 'https://amazon-clone-c5qy.onrender.com/api/v1/auth/login'
            const OPTIONS = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email, password}) 
                }

            const res = await fetch(URL, OPTIONS);
            const data = await res.json();
            setUser({ name: data.data.user.name, email: data.data.user.email });

            if (data.status == "success") {
                appLogin(data.data.user);
                localStorage.setItem("authorization", data.data.token) // storing token
            }
            
            if (!res.ok) {
                throw new Error(data.message || 'Something went wrong');
            }

            // Handle successful login, e.g., save token, redirect, etc.
            console.log('Login successful', data);
            toast.success("User LogedIn")
            setloggedInUser({ name: data.data.user.name, email: data.data.user.email }); // Set user data
            
        
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { login, loading, error };
};

export default useLogin;
