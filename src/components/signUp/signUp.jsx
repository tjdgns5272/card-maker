import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { signUp } from "../../service/auth_service";
import styles from './signUp.module.css';

const SignUp = ({authService}) => {



    const [email, setEmail] = useState('');
    const [password, setPasswork] = useState('');

    const onSubmit = () => {

    }
    const handleChange = () => {

    }


    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Sign Up</h1>
            <form className={styles.form} onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
            </form>
        </section>
   )

};

export default SignUp;