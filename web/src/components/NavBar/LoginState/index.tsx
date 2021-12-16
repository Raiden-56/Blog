import { Link } from 'react-router-dom';
import { UserInterface } from '../../../interfaces';
import './style.css';

const LoginButton = ({ user }: { user: UserInterface | null }) => {
    
    return (
        <Link to={user ? '/me' : '/login'}>
            <button className="loginbutton">
                {user ? user.username : 'Login'}
                <span> </span>{user ? null : <i className="fas fa-sign-in-alt"></i>}
            </button>
        </Link>
    )
}

export default LoginButton;