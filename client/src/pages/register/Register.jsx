import './register.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
    const [username, setUsername] = useState("");  
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); // prevent page reload on submit
        setError(false);

        try {    
            const res = await axios.post('/auth/register', {
                username,
                email,
                password,
            }); 
            //console.log(res);
            if (res.data) { 
                window.location.href = '/login';
            }
        }
        catch (err) {
            setError(true);
            //console.log({ err, message:"ERROR" })
        }
    };
    
    return (
        <div className= 'register'>
            <span className='registerTitle'>Register</span>
            <form className='registerForm' onSubmit={handleSubmit}>
                <label >Username</label>
                <input
                    className='registerInput'
                    type='text'
                    placeholder="Enter your username" 
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label >Email</label>
                <input
                    className='registerInput'
                    type='email'
                    placeholder="Enter your email" 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    className='registerInput'
                    type='password'
                    placeholder="Enter your password" 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='registerButton' type='submit'>register</button>
            </form>
            <button className='registerLoginButton'>
                <Link className='link' to='/login'>Login</Link>
            </button>
            {error && <span style={ {color:"red", marginTop:'10px'}}>Username or email already exists</span>}
            {/* <span>Somthing went wrong</span> */}
        </div>
    )
}

