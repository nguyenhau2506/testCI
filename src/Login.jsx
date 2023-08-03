import React, { useState } from "react";
import "./style.css";
export const Login = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim() === "" || pass.trim() === "") {
            setError("Please fill in all fields.");
        } else {
            // Reset error state if no validation errors
            setError("");
            console.log("Valid credentials. Logging in...");
            // Your login logic goes here
        }
    };

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="youremail@gmail.com"
                    id="email"
                    name="email"
                />
                <label htmlFor="password">password</label>
                <input
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    type="password"
                    placeholder="********"
                    id="password"
                    name="password"
                />
                <button type="submit">Log In</button>
            </form>
            <button
                className="link-btn"
                onClick={() => props.onFormSwitch("register")}
            >
                Don't have an account? Register here.
            </button>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};
