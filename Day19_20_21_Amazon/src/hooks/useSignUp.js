
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

const useSignUp = () => {
   
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Initialize navigate

    const signUp = async ({ name, email, password }) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://amazon-clone-c5qy.onrender.com/api/v1/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong');
            }
            if (data.data && data.data.user) {
                toast.success('User Registered')
                
                navigate('/login'); // Redirect to home page
            } else {
                throw new Error('User data is missing from the response');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { signUp, loading, error };
};

export default useSignUp;
