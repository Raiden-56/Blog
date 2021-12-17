import React, { useState } from 'react';
import './style.css';

const Input = ({ type, placeholder, validation, onChange } : { type: 'email' | 'text' | 'password', placeholder: string, validation: (_:string) => boolean, onChange: (_:any) => any, }) => {
    
    const [isValid, setValid] = useState<boolean>(true);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault()
        setValid(validation(event.target.value));
        onChange(event.target.value);
    }

    return (
        <input className="signup-input" required type={type} placeholder={placeholder} onChange={handleChange} style={{ outlineWidth: isValid ? 0 : 5 }} />
    )
}

export default Input;