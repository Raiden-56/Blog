import LoginState from './LoginState';
import { Link, useLocation } from 'react-router-dom';
import { UserInterface, RouteInterface } from '../../interfaces';
import './style.css';

const NavBar = ({ routes, user } : { routes: RouteInterface[], user: UserInterface | null }) => {

    const location = useLocation();

    return(
        <div className='nav'>
            <div className='nav-title'>Blog</div>
            <div className='nav-ul'>
                {routes.map((route, i) => {
                    return (
                        <Link to={route.url} className={`nav-li ${route.url === location.pathname ? 'nav-li-active' : null}`} key={'nav-li-' + i}>{route.name}</Link>
                    )
                })}
                <LoginState user={user} />
            </div>
        </div>
    )
}

export default NavBar;