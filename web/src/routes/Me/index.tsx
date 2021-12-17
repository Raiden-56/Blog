import './style.css';
import { useEffect } from "react";
import { Header } from './components';
import { useNavigate } from "react-router";
import { UserInterface } from "../../interfaces"

const Me = ({ user }: { user: UserInterface | null }) => {
    
    const navigate = useNavigate();

    useEffect(() => {
        console.log(user)
        if (!user) return navigate('/login', { replace: true });
    });/*[]*/

    return user ? (
        <div>
            <Header/>
            <div className="Me-username" style={{ marginLeft: 'calc(var(--avatar-margin-left) + var(--avatar-width) + 1rem)' }}>@{user.username} <span className="role-admin">#Admin</span></div>
            <div className="Me-bio" style={{ marginLeft: 'calc(var(--avatar-margin-left) + var(--avatar-width) + 1rem)' }}>Je suis un jeune developper depuis</div>
        </div>
    ) : null;
}

export default Me;