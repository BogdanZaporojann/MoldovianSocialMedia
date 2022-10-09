import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";


export const Navbar = () => {
    return(

        <div className={styles.nav}>

            <div>
                <NavLink to="/profile">Profile</NavLink>
            </div>

            <div>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>

            <div>
                <NavLink to="/settings">Settings</NavLink>
            </div>

        </div>

    );
}