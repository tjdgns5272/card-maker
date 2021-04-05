import React, {memo} from 'react';
import styles from './card_preview.module.css';
import Card from "../card/card";

const CardPreview = memo(({cards}) => {
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
});

export default CardPreview;