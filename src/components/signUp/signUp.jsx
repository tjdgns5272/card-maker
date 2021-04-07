import React, {useState, useRef} from 'react';
import {Link, useHistory} from 'react-router-dom';
import styles from './signUp.module.css';

const SignUp = ({authService}) => {

    const formRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const goToLogin = () => {
        history.push('/login')
    }
    const handleChange = (event) => {
        const type = event.target.name;
        if( type === 'email') {
            const inputEmail = event.target.value;
            setEmail(inputEmail);
        } else if ( type === 'password') {
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
            <h1 className={styles.title}>Sign Up</h1>
            <form ref={formRef} className={styles.form} onSubmit={onSignUp}>
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                />
                <button
                    className={styles.submit}
                    name='Submit'
                    onClick={onSignUp}
                />
            </form>
        </section>
    )

};

export default SignUp;