import React, { useState } from 'react';
import './style.css';

export const Input = ({ type, placeholder, validation } : { type: 'email' | 'password', placeholder: string, validation: (_:string) => boolean }) => {
    
    const [isValid, setValid] = useState<boolean>(true);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault()
        setValid(validation(event.target.value));
    }

    return (
        <input className="login-input" required type={type} placeholder={placeholder} onChange={handleChange} style={{ outlineWidth: isValid ? 0 : 5 }} />
    )
}