import './style.css';
import Input from './Input';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SignupButton from './SignupButton';
import { isEmail, isPassword } from '../../validators';

const Signup = () => {

    const [data, setDada] = useState<object>({});
    
    return (
        <div className="Signup">
            <div className="Signup-container">
                <h1 className="Signup-title">Signup</h1>
                <div className="Signup-inputs">
                    <Input type="email" placeholder="Email" validation={isEmail}/>
                    <Input type="text" placeholder="Username" validation={() => true}/>
                    <Input type="password" placeholder="Password" validation={isPassword}/>
                    <Input type="password" placeholder="Re Password" validation={isPassword}/>
                </div>
                <div className="Signup-submit">
                    <SignupButton/>
                    <p className="Signup-text">Already have an account ? <Link to="forget" className="markdown-main">Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup;