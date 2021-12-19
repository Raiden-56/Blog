import React, { useState } from 'react';
import './style.css';

const Input = ({ type, placeholder, validation, onChange } : { type: 'text' | 'email' | 'password', placeholder: string, validation: (_:string) => boolean, onChange: (_: any) => any }) => {
    
    const [isValid, setValid] = useState<boolean>(true);
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown((previousState) => !previousState);
    };

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault()
        setValid(validation(event.target.value));
        onChange(event.target.value);
    }

    return (
        <div className="login-input-container">
            <input className="login-input" required type={type === 'email' ? 'email' : passwordShown ? 'text' : 'password'} placeholder={placeholder} onChange={handleChange} style={{ outlineWidth: isValid ? 0 : 5 }} />
            <div className="login-hide" onClick={togglePassword}>{type === 'password' ? <i className={!passwordShown ? "fas fa-eye" : "fas fa-eye-slash"}></i> : null}</div>
        </div>
    )
}

export default Input;