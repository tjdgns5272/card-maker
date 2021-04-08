import React, {useState, useRef} from 'react';
import { useHistory} from 'react-router-dom';
import styles from './signUp.module.css';
import Header from "../header/header";
import Footer from "../footer/footer";

const SignUp = ({authService}) => {

    const formRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const goToLogin = () => {
        history.push('/')
    }
    const handleChange = (event) => {
        const type = event.target.name;
        if (type === 'email') {
            const inputEmail = event.target.value;
            setEmail(inputEmail);
        } else if (type === 'password') {
            const inputPassword = event.target.value;
            setPassword(inputPassword);
        }
    }
    const onSignUp = async event => {
        event.preventDefault();
        formRef.current.reset();
        await authService
            .signUp(email, password)
            .then(console.log)
            .then(() => goToLogin())
    }

    return (
        <section className={styles.container}>
            <Header/>
            <h1 className={styles.signup_text}>Sign up here!</h1>
            <form ref={formRef} className={styles.form} onSubmit={onSignUp}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                />
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                />
                <button
                    className={styles.submit}
                    name='Submit'
                    onClick={onSignUp}
                >
                    Submit
                </button>
            </form>
            <div className={styles.login}>
                <div className={styles.login_text}>Already have account?</div>
                <button className={styles.sign_in} onClick={goToLogin}>Log in</button>
            </div>

            <div className={styles.footer}>
                <Footer/>

            </div>
        </section>
    )

};

export default SignUp;