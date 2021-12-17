import { MouseEvent } from 'react';
import './style.css';

const ConfirmButton = ({ onClick }: { onClick: (_: { text: string }) => any }) => {
    
    function handleClick(event: MouseEvent) {
        event.preventDefault();
        onClick({ text: '' });
    }

    return (
        <button className="Modal-ConfirmButton" onClick={handleClick}>Confirm !</button>
    )
}

export default ConfirmButton;