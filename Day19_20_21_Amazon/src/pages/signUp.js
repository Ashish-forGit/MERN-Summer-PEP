import { useState } from "react";
import useSignUp from "../hooks/useSignUp";
import '../../signUpPage.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { signUp } = useSignUp();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
        let validation = true;
        let tempErrors = {};

        if (!name) {
            validation = false;
            tempErrors.name = "Name is required.";
        }

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
        } else if (!/(?=.*[0-9])(?=.*[!@#$%^&*])/.test(password)) {
            validation = false;
            tempErrors.password = "Password must contain at least one number and one special character.";
        }

        if (!confirmPassword) {
            validation = false;
            tempErrors.confirmPassword = "Confirm Password is required.";
        } else if (password !== confirmPassword) {
            validation = false;
            tempErrors.confirmPassword = "Passwords do not match.";
        }

        setErrors(tempErrors);
        return validation;
    };

    const handleSubmit = () => {
        if (validate()) {
            signUp({ name, email, password });
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
            <img src="https://www.logo.wine/a/logo/Amazon_(company)/Amazon_(company)-Logo.wine.svg" height={100} width={200}/>
                <h3>Enter Your Details</h3>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <p className="error">{errors.name}</p>}
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
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                <button onClick={handleSubmit}>Sign Up</button>
                <p>Already have an account? <Link to="/login">Log In</Link></p>
            </div>
        </div>
    );
};

export default SignUp;
