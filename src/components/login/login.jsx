import React, {useState, useRef} from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from './login.module.css';
import {useHistory} from "react-router-dom";

const Login = ({authService}) => {

    const history = useHistory();
    const inputRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const goToMaker = (userId) => {
        history.push({
            pathname: '/maker',
            state: {id: userId}
        })
    }
    const goToSignUp = () => {
        history.push('/signup')
    }
    const onSocialLogin = event => {
        authService
            .login(event.currentTarget.textContent)
            .then((userId) => goToMaker(userId.user.uid))
    }
    const onEmailLogin = event => {
        event.preventDefault();
        authService
            .signIn(email.trim(), password)
            .then((userId) => goToMaker(userId.user.uid))

    }

    const handleOnChange = (event) => {
        const type = event.target.name;
        if (type === 'email') {
            const inputEmail = event.target.value;
            setEmail(inputEmail);
        } else if (type === 'password') {
            const inputPassword = event.target.value;
            setPassword(inputPassword);
        }
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
                    <div className={styles.email_login}>
                        <form ref={inputRef} className={styles.input_login} onSubmit={onEmailLogin}>
                            <input
                                type="text"
                                className={styles.input}
                                placeholder="Email"
                                name="email"
                                onChange={handleOnChange}
                            />
                            <input
                                type="text"
                                className={styles.input}
                                placeholder={"Password"}
                                name="password"
                                onChange={handleOnChange}
                            />
                            <button className={styles.login_button} onClick={onEmailLogin}>Login</button>
                        </form>
                        <div className={styles.create_account}>
                            <div className={styles.signup_text}>Don't have account?</div>
                            <button className={styles.signup} onClick={goToSignUp}>Sign Up</button>
                        </div>
                    </div>
                    <ul className={styles.social_login}>
                        <button className={`${styles.list} ${styles.google}`} onClick={onSocialLogin}>
                            Google
                        </button>
                        <button className={`${styles.list} ${styles.facebook}`} onClick={onSocialLogin}>
                            Facebook
                        </button>
                        <button className={`${styles.list} ${styles.github}`} onClick={onSocialLogin}>
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