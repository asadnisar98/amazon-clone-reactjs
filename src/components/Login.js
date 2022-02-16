import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firease';
import './Login.css'

function Login() {

    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history("/");
        } )
        .catch(e => alert(e.message));
    }

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            history("/");
        }).catch(e => alert(e.message));
    }

  return (
    <div className="login">
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" />
          <h5>Password</h5>
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
          <button onClick={login} type="sumit" className="login__SigninButon">Sign In</button>
        </form>

        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        
        <button onClick={register} className="login__SignUpButon">Create Your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login
