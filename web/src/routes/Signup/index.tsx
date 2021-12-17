import './style.css';
import Input from './Input';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SignupButton from './SignupButton';
import { Authentication } from '../../api';
import { UserInterface } from '../../interfaces';
import { isEmail, isPassword } from '../../validators';

const Signup = ({ user, setUser, toggleModal }: { user: UserInterface | null, setUser: (_:any) => any, toggleModal: (_: { text: string }) => any }) => {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleClick() {
        Authentication.Signup({ email, password, username }).then((response) => {
            console.log(response.status, response.statusText, response.data);
        });
    }

    return (
        <div className="Signup">
            <div className="Signup-container">
                <h1 className="Signup-title">Signup</h1>
                <div className="Signup-inputs">
                    <Input type="email" placeholder="Email" validation={isEmail} onChange={setEmail}/>
                    <Input type="text" placeholder="Username" validation={() => true} onChange={setUsername}/>
                    <Input type="password" placeholder="Password" validation={isPassword} onChange={setPassword}/>
                    <Input type="password" placeholder="Re Password" validation={isPassword} onChange={setPassword}/>
                </div>
                <div className="Signup-submit">
                    <SignupButton onClick={handleClick}/>
                    <p className="Signup-text">Already have an account ? <Link to="forget" className="markdown-main">Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup;