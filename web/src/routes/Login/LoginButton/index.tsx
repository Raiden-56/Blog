import './style.css';

export const LoginButton = ({ onClick }: { onClick: () => any }) => {

    return (
        <button className="Login-button" onClick={onClick}>Login</button>   
    )
}