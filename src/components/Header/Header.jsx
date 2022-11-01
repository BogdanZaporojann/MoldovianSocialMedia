import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

export const Header = (props) => {

    return(
      <div className={styles.header}>


          <img className={styles.image} src="data:image/jpeg;base64,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"/>
          <div className={styles.loginBlock}>
              {   props.isAuth
                  ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                  : <NavLink to={'/login'}>LOGIN</NavLink>}
          </div>

      </div>
    );
}