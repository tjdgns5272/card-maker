import React, {useEffect} from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from './login.module.css'
import {useHistory} from "react-router-dom";

const Login = ({authService}) => {

    const history= useHistory();
    const goToMaker = (userId) => {
        history.push({
            pathname: '/maker',
            state: {id: userId}
        })
    }
    const onLogin = event => {
        authService
            .login(event.currentTarget.textContent)
            .then( (userId) => goToMaker(userId.user.uid))
    }

    useEffect(() => {
        authService
            .onAuthChange(user => {
                user && goToMaker(user.uid)
            })
    });

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