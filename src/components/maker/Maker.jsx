import React, {useEffect, useState} from 'react';
import styles from './Maker.module.css';
import {useHistory} from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import CardMaker from "../cardMaker/card_maker";
import CardPreview from "../cardPreview/card_preview";

const Maker = ({FileInput, authService, cardRepository}) => {

    const historyState = useHistory().state;
    const [cards, setCards] = useState({});
    const [userId, setUserId] = useState(historyState && historyState.id);

    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    }
   useEffect(() => {
       if (!userId) {
           return;
       }
       const stopSync = cardRepository.syncCards(userId, cards => {
           setCards(cards);
       })
       return () => stopSync();
   }, [cardRepository, userId]);

    //Login
    useEffect(() => {
        authService.onAuthChange(user => {
            if (user) {
                setUserId(user.uid);
            } else {
                history.push('/')
            }
        })
    }, [authService, history])
    const deleteCard = (card) => {
        setCards( cards => {
            const updated = { ...cards };
            delete updated[card.id];
            return updated;
        })
        cardRepository.removeCard(userId, card);
/*
        const updated = {...cards};
        delete updated[card.id];
        setCards(updated)
*/
    }
    const addOrUpdateCard = (card) => {
        setCards(cards => {
            const updated = { ...cards};
            updated[card.id] = card;
            return updated;
        });
        cardRepository.saveCard(userId, card);
/*
        const updated = {...cards};
        updated[card.id] = card;
        setCards(updated)
*/
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
                    FileInput={FileInput}
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