import React from 'react';
import styles from './card_maker.module.css';
import CardMakerForm from "../cardMakerForm/card_maker_form";
import InputForm from "../inputForm/input_form";

const CardMaker = ({cards, addCard}) => {
    return (
        <section className={styles.card_maker}>
            <h1>Card Maker</h1>
            <section className={styles.userInfo}>
                {
                    cards.map(card =>
                        <CardMakerForm
                            key={card.id}
                            card={card}
                        />
                    )
                }
            </section>
            <InputForm onAdd={addCard}/>
        </section>
    )
};

export default CardMaker;