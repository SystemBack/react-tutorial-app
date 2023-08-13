import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import styles from './User.module.css'


const User = (  ) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const handleTabClick = ( path ) => {
        navigate(`/user/${path}`)
    }
    return (
    <div className={styles.tabContainer}>
        <Link to='/' className={styles.home}>Home</Link>
        <div>
            <span
                className={ pathname.includes('my-info') ? styles.tabActivated : styles.tab }
                onClick={ () => handleTabClick('my-info') }
            >
                My Information
            </span>
            <span
                className={ pathname.includes('liked-events') ? styles.tabActivated : styles.tab }
                onClick={ () => handleTabClick('liked-events') }
            >
                Liked Events
            </span>
        </div>
        <Outlet />
    </div>
    );
};

export default User;