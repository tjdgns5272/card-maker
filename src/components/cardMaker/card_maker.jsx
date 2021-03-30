import React from 'react';
import styles from './card_maker.module.css';
import CardMakerForm from "../cardMakerForm/card_maker_form";
import InputForm from "../inputForm/input_form";

const CardMaker = ({cards, addCard, onDelete, handleChange}) => {
    return (
        <section className={styles.card_maker}>
            <h1>Card Maker</h1>
            <section className={styles.userInfo}>
                {
                    Object.keys(cards).map(key =>
                        <CardMakerForm
                            key={key}
                            card={cards[key]}
                            onDelete={onDelete}
                            handleChange={handleChange}
                        />
                    )
                }
            </section>
            <InputForm onAdd={addCard}/>
        </section>
    )
};

export default CardMaker;