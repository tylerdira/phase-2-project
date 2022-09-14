import React, {useState} from "react";


function Login({handleLogin}) {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const config ={
            method: 'POST',
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(formData)
        }
        fetch('http://localhost:3001/login')
        .then(r => r.json())
        .then(data => {
            handleLogin(data.user)
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                placeholder="Email"
                value={formData.email}
                name='email'
                onChange={handleChange}></input>
                <input
                type='password'
                placeholder="Password"
                value={formData.password}
                name='password'
                onChange={handleChange}></input>
                <input type='submit' value='Login'></input>
            </form>
        </div>
    )
}


export default Login;