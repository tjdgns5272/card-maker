import React from 'react';
import styles from './Maker.module.css';
import {BrowserRouter as Route, Link, useHistory} from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";

const Maker = ({authService}) => {
    const history = useHistory();

    const onLogout = event => {
        authService
            .logout()
            .then(console.log("You're Logged Out!"))
            .then(() => history.push("/home"))
    }
    return (
        <section className={styles.maker}>
            <div className={styles.header}>
                <Header onLogout={onLogout}/>
            </div>

            <div className={styles.body}>Maker</div>

            <div className={styles.footer}>
                <Footer/>
            </div>
        </section>
    )
};

export default Maker;