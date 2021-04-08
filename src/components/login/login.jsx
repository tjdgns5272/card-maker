import React from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from './login.module.css';
import {useHistory} from "react-router-dom";

const Login = ({authService}) => {

    const history = useHistory();
    const goToMaker = (userId) => {
        history.push({
            pathname: '/maker',
            state: {id: userId}
        })
    }
    const goToSignUp = () => {
        history.push('/')
    }
    const onLogin = event => {
        authService
            .login(event.currentTarget.textContent)
            .then((userId) => goToMaker(userId.user.uid))
        console.log(history)
    }
    const handleChange = () => {

    }

    /*    useEffect(() => {
            authService
                .onAuthChange(user => {
                    user && goToMaker(user.uid)
                })
        });*/
    return (
        <section className={styles.loginBox}>
            <Header/>
            <section className={styles.login}>
                <h1 className={styles.login_text}>Login</h1>
                <section className={styles.login_service}>
                    <ul className={styles.email_login}>
                        <div className={styles.input_login}>
                            <input
                                type="text"
                                className={styles.input}
                                placeholder="Email"
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                className={styles.input}
                                placeholder={"Password"}
                                onChange={handleChange}
                            />
                            <button className={styles.login_button} onClick={onLogin}>Login</button>
                        </div>
                        <div className={styles.create_account}>
                            <div className={styles.signup_text}>Don't have account?</div>
                            <button className={styles.signup} onClick={goToSignUp}>Sign Up</button>
                        </div>
                    </ul>
                    <ul className={styles.social_login}>
                        <button className={`${styles.list} ${styles.google}`} onClick={onLogin}>
                            Google
                        </button>
                        <button className={`${styles.list} ${styles.facebook}`} onClick={onLogin}>
                            Facebook
                        </button>
                        <button className={`${styles.list} ${styles.github}`} onClick={onLogin}>
                            Github
                        </button>
                    </ul>
                </section>
            </section>
            <Footer/>
        </section>
    )
}

export default Login;