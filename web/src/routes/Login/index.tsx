import { Input } from './Input';
import { Link } from 'react-router-dom';
import { LoginButton } from './LoginButton';
import { isEmail, isPassword } from '../../validators';
import './style.css';

const Login = () => {
    
    return (
        <div className="Login">
            <div className="Login-container">
                <h1 className="Login-title">Login</h1>
                <div className="Login-inputs">
                    <Input type="email" placeholder="Email" validation={isEmail}/>
                    <Input type="password" placeholder="Password" validation={isPassword}/>
                </div>
                <div className="Login-submit">
                    <LoginButton/>
                    <p className="Login-text">Don't have an account ? <Link to="/signup" className="markdown-main">Create one</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login;