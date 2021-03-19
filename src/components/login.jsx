import React from 'react';
import Header from "./header";
import Footer from "./footer";
import styles from './login.module.css'

const Login = ({authService}) => {
    const onLogin = event => {
        authService
            .login(event.currentTarget.textContent)
            .then(console.log)
    }
    const onLogout = event => {

    }
    return (
        <section className={styles.loginBox}>
            <Header onLogout={onLogout}/>
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