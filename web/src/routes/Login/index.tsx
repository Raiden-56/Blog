import { Input } from './Input';
import { useState } from 'react';
import { Authentication } from '../../api';
import { LoginButton } from './LoginButton';
import { UserInterface } from '../../interfaces';
import { Link, useNavigate } from 'react-router-dom';
import { isEmail, isPassword } from '../../validators';
import './style.css';

const Login = ({ user, setUser, toggleModal }: { user: UserInterface | null, setUser: (_:any) => any, toggleModal: (_: { text: string }) => any }) => {
    
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleClick() {
        Authentication.Login({ email, password }).then((response) => {
            if (response.data) {
                setUser(response.data);
                navigate("/", { replace: true });
            } else toggleModal({ text: 'Invalid Email/Password, try again' });
        });
    }

    return (
        <div className="Login">
            <div className="Login-container">
                <h1 className="Login-title">Login</h1>
                <div className="Login-inputs">
                    <Input type="email" placeholder="Email" validation={isEmail} onChange={setEmail}/>
                    <Input type="password" placeholder="Password" validation={isPassword} onChange={setPassword}/>
                </div>
                <div className="Login-submit">
                    <LoginButton onClick={handleClick}/>
                    <p className="Login-text">Don't have an account ? <Link to="/signup" className="markdown-main">Create one</Link></p>
                </div>
                <div className="Login-sandwich"></div>
            </div>
        </div>
    )
}

export default Login;