import React from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE = '/default_logo.png'
const Card = ({card}) => {
    const {
        name,
        company,
        theme,
        occupation,
        email,
        memo,
        picURL
    } = card;
    const url = picURL || DEFAULT_IMAGE;
    return (
        <li className={`${styles.card} ${getStyles(theme)}`}>
            <img className={styles.avatar} src={process.env.PUBLIC_URL + url} alt="profile photo"/>
            <div className={styles.info}>
                <h1 className={styles.name}>{name}</h1>
                <p className={styles.company}>{company}</p>
                <p className={styles.occupation}>{occupation}</p>
                <p className={styles.email}>{email}</p>
                <p className={styles.memo}>{memo}</p>
            </div>
        </li>
    )
};

function getStyles(theme) {
    switch (theme) {
        case 'Dark' :
            return styles.dark
        case 'Light' :
            return styles.light
        case 'Colorful':
            return styles.colorful
        default:
            throw new Error(`unknown theme: ${theme}`)
    }
}

export default Card;