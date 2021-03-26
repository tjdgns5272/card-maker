import React from 'react';
import styles from './card_maker_form.module.css';
import Button from "../button/button";
import ImageInput from "../inputImage/ImageInput";

const CardMakerForm = ({card}) => {
    const {
        name,
        company,
        theme,
        occupation,
        email,
        memo,
        picName,
        picURL
    } = card;
    const onSubmit = () => {

    }
    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" name="name" value={name}/>
            <input className={styles.input} type="text" name="company" value={company}/>
            <select className={styles.theme} name="theme" value={theme}>
                <option value="Dark">Dark</option>
                <option value="Light">Light</option>
                <option value="Colorful">Colorful</option>
            </select>
            <input className={styles.input} type="text" name="occupation" value={occupation}/>
            <input className={styles.input} type="text" name="email" value={email}/>
            <textarea className={styles.memo} name="memo" value={memo}/>
            <div className={styles.btnBox}>
                <div className={styles.image_input}>
                    <ImageInput name={name}/>
                </div>
                <Button name='Delete' onClick={onSubmit}/>
            </div>
        </form>
    )
};

export default CardMakerForm;