import React, {useEffect, useState} from 'react';
import styles from './Maker.module.css';
import {useHistory} from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import CardMaker from "../cardMaker/card_maker";
import CardPreview from "../cardPreview/card_preview";

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

    const [cards, setCards] = useState([
        {
            id: 1,
            name: 'Seonghun Park',
            company: 'Facebook',
            theme: 'Dark',
            occupation: 'Senior Developer',
            email: 'tjdgns5272@naver.com',
            memo: 'Cease the day :)',
            picName: 'SH',
            picURL: null
        },
        {
            id: 2,
            name: 'Namq Ryu',
            company: 'Google',
            theme: 'Colorful',
            occupation: 'Project Manager',
            email: 'skarb8277@gmial.com',
            memo: 'Noah is Back!',
            picName: 'Nooarhk',
            picURL: null
        },
        {
            id: 3,
            name: 'Dragon Doggy',
            company: 'KEPCO ',
            theme: 'Light',
            occupation: 'CEO',
            email: 'sod0318@hanmail.net',
            memo: "I won't bite you :)",
            picName: 'DG',
            picURL: null
        }
    ]);


    return (
        <section className={styles.maker}>
            <div className={styles.header}>
                <Header onLogout={onLogout}/>
            </div>

            <section className={styles.body}>
                <CardMaker
                    cards={cards}
                />
                <CardPreview cards={cards}/>
            </section>

            <div className={styles.footer}>
                <Footer/>
            </div>
        </section>
    )
};

export default Maker;