import React, {useEffect, useState} from 'react';
import styles from './Maker.module.css';
import {useHistory} from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import CardMaker from "../cardMaker/card_maker";
import CardPreview from "../cardPreview/card_preview";

const Maker = ({authService}) => {
    const history = useHistory();
    const [cards, setCards] = useState({
            '1':
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
            '2':
                {
                    id: 2,
                    name: 'Namq Ryu',
                    company: 'Google',
                    theme: 'Colorful',
                    occupation: '조빱같은 Manager',
                    email: 'skarb8277@gmial.com',
                    memo: 'Noah is Back!',
                    picName: 'Nooarhk',
                    picURL: null
                }
            ,
            '3':
                {
                    id: 3,
                    name: 'Dragon Doggy',
                    company: 'KEPCO ',
                    theme: 'Light',
                    occupation: 'CEO',
                    email: 'sod0318@hanmail.net',
                    memo: "Teach me how to Doggy!",
                    picName: 'YDG',
                    picURL: null
                }
        })
    ;

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
    const deleteCard = (card) => {
        const updated = {...cards};
        delete updated[card.id];
        setCards(updated)
    }
    const addOrUpdateCard = (card) => {
        const updated = {...cards};
        updated[card.id] = card;
        setCards(updated)

    };
    /*const update = cards.map(item => {
        if (card.id === item.id) {
            return {...card}
        }
        return item
    })
    setCards(update)*/
    /*
    const modifiedCards = cards.map(item => {
        if (card.defaultValue === item[`${card.name}`]) {
            return {...item, [card.name]: card.value}
        } return item
    })
    setCards(modifiedCards);*/

    return (
        <section className={styles.maker}>
            <div className={styles.header}>
                <Header onLogout={onLogout}/>
            </div>

            <section className={styles.body}>
                <CardMaker
                    cards={cards}
                    addCard={addOrUpdateCard}
                    onDelete={deleteCard}
                    handleChange={addOrUpdateCard}
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