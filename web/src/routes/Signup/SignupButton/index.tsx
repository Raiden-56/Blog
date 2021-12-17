import './style.css';

const SignupButton = ({ onClick }: { onClick: () => any }) => {

    return (
        <button className="Signup-button" onClick={onClick}>Signup</button>   
    )
}

export default SignupButton;