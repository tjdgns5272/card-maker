import React from 'react';
import styles from './card_maker_form.module.css';
import Button from "../button/button";
import ImageInput from "../iamgeInput/ImageInput";

const CardMakerForm = ({card}) => {
    const {
        name,
        company,
        theme,
        occupation,
        email,
        memo,
        picURL
    } = card;
    const handleDelete = () => {

    }
    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" name="name" value={name} onChange={() => {}}/>
            <input className={styles.input} type="text" name="company" value={company} onChange={() => {}}/>
            <select className={styles.theme} name="theme" value={theme} onChange={() => {}}>
                <option value="Dark">Dark</option>
                <option value="Light">Light</option>
                <option value="Colorful">Colorful</option>
            </select>
            <input className={styles.input} type="text" name="occupation" value={occupation} onChange={() => {}}/>
            <input className={styles.input} type="text" name="email" value={email} onChange={() => {}}/>
            <textarea className={styles.memo} name="memo" value={memo} onChange={() => {}}/>
            <div className={styles.btnBox}>
                <div className={styles.image_input}>
                    <ImageInput name={name} onClick={handleDelete}/>
                </div>
                <Button name='Delete'/>
            </div>
        </form>
    )
};

export default CardMakerForm;