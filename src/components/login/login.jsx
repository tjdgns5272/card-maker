import React from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from './login.module.css'
import {useHistory} from "react-router-dom";

const Login = ({authService}) => {

    const history= useHistory();
    const onLogin = event => {
        authService
            .login(event.currentTarget.textContent)
            .then(userObj => userObj.user.uid)
            .then(console.log)
            .then(console.log("You're Logged in!"))
            .then( () => history.push("/maker"))
    }

    return (
        <section className={styles.loginBox}>
            <Header />
            <section className={styles.login}>
                <h1 className={styles.login_text}>Login</h1>
                <ul className={styles.loginService}>
                    <li className={styles.list}>
                        <button className={styles.button} onClick={onLogin}>Google</button>
                    </li>
                    <li className={styles.list}>
                        <button className={styles.button} onClick={onLogin}>Facebook</button>
                    </li>
                    <li className={styles.list}>
                        <button className={styles.button} onClick={onLogin}>Github</button>
                    </li>
                </ul>
            </section>
            <Footer/>
        </section>
    )
}

export default Login;