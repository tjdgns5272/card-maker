import React from 'react';
import styles from './card_preview.module.css';
import Card from "../card/card";

const CardPreview = ({cards}) => {
    return (
        <section className={styles.card_preview}>
            <h1 className={styles.title}>Card Preview</h1>
            <ul className={styles.userInfo}>
                {
                    Object.keys(cards).map(key =>
                        <Card
                            key={key}
                            card={cards[key]}
                        />
                    )
                }
            </ul>
        </section>
    )
};

export default CardPreview;