import React from 'react';
import styles from './card_maker.module.css';
import CardMakerForm from "../cardMakerForm/card_maker_form";
import InputForm from "../inputForm/input_form";

const CardMaker = ({FileInput, cards, addCard, onDelete, handleChange}) => {
    return (
        <section className={styles.card_maker}>
            <h1>Card Maker</h1>
            <section className={styles.userInfo}>
                {
                    Object.keys(cards).map(key =>
                        <CardMakerForm
                            key={key}
                            FileInput={FileInput}
                            card={cards[key]}
                            onDelete={onDelete}
                            handleChange={handleChange}
                        />
                    )
                }
            </section>
            <InputForm FileInput={FileInput} onAdd={addCard}/>
        </section>
    )
};

export default CardMaker;