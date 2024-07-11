import { useState } from "react";
import useLogIn from "../hooks/useLogIn";
import { Link } from 'react-router-dom';
import '../../signUpPage.css';


const Login = () => {
    const { login, loading, error } = useLogIn();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});



    const validate = () => {
        let validation = true;
        let tempErrors = {};

        if (!email) {
            validation = false;
            tempErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            validation = false;
            tempErrors.email = "Email is invalid.";
        }

        if (!password) {
            validation = false;
            tempErrors.password = "Password is required.";
        } else if (password.length < 6) {
            validation = false;
            tempErrors.password = "Password must be at least 6 characters.";
        }

        setErrors(tempErrors);
        return validation;
    };

    const handleSubmit = () => {
        if (validate()) {
            login({ email, password });
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
                <img src="https://www.logo.wine/a/logo/Amazon_(company)/Amazon_(company)-Logo.wine.svg" height={100} width={200}/>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="error">{errors.email}</p>}
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p className="error">{errors.password}</p>}
                {error && <p className="error">{error}</p>}
                <button onClick={handleSubmit} disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                </button>
                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;
