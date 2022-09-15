import React, { useState } from "react";
import Signup from "./Signup";

function Login({ handleLogin, setSignUpForm, signUpForm }) {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const config = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }
        fetch('http://localhost:3005/login', config)
            .then(r => r.json())
            .then(data => {
                handleLogin(data.user)

            })
    }

    function handleClick() {
        setSignUpForm(!signUpForm)
    }
    return (
        <div>
            <div className='login-form'>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder="Email"
                        value={formData.email}
                        name='email'
                        onChange={handleChange}></input>
                    <input
                        type='text'
                        placeholder="Password"
                        value={formData.password}
                        name='password'
                        onChange={handleChange}></input>
                    <input type='submit' value='Login'></input>
                </form>
            </div>
            <div className='sign-up-form'>
                <button onClick={handleClick}>Show/Hide Sign Up Form</button>
                {signUpForm ? <Signup /> : null}


            </div>

        </div>
    )
}


export default Login;