import React, { useState } from "react";

function Signup() {

    const [signUpFormData, setSignUpFormData] = useState({
        email: '',
        password: ''
    })

    function handleChange(e) {
        setSignUpFormData({
            ...signUpFormData,
            [e.target.name]: e.target.value
        })

    }

    function handleSignUp(user) {
        setSignUpFormData(user)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signUpFormData)
        }
        fetch('http://localhost:3005/signup', config)
            .then(r => r.json())
            .then(data => {
                handleSignUp(data.user)

            })
        window.location.reload();
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='email'
                    value={signUpFormData.email}
                    placeholder='email'
                    onChange={handleChange}>
                </input>
                <input
                    type='text'
                    name='password'
                    value={signUpFormData.password}
                    placeholder='password'
                    onChange={handleChange}>
                </input>
                <input type='submit' value='Sign Up!'></input>
            </form>
        </div>
    )
}

export default Signup;