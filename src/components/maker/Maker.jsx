import React, {useEffect} from 'react';
import styles from './Maker.module.css';
import {useHistory} from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";

const Maker = ({authService}) => {
    const history = useHistory();

    const onLogout = () => {
        authService.logout();
    }
    useEffect(() => {
        authService.onAuthChange(user => {
            if (!user) {
                history.push('/')
            }
        })
    })
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