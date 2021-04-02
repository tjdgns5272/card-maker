import React from 'react';
import styles from './card_maker.module.css';
import CardEditForm from "../cardEditForm/card_edit_form";
import CardAddForm from "../cardAddForm/card_add_form";

const CardMaker = ({FileInput, cards, addCard, onDelete, handleChange}) => {
    return (
        <section className={styles.card_maker}>
            <h1>Card Maker</h1>
            <section className={styles.userInfo}>
                {
                    Object.keys(cards).map(key =>
                        <CardEditForm
                            key={key}
                            FileInput={FileInput}
                            card={cards[key]}
                            onDelete={onDelete}
                            handleChange={handleChange}
                        />
                    )
                }
            </section>
            <CardAddForm FileInput={FileInput} onAdd={addCard}/>
        </section>
    )
};

export default CardMaker;