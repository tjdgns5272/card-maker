import React from 'react';
import styles from './card_maker_form.module.css';
import Button from "../button/button";
import ImageInput from "../iamgeInput/ImageInput";

const CardMakerForm = ({card, onDelete, handleChange}) => {
    const {
        name,
        company,
        theme,
        occupation,
        email,
        memo,
        picURL
    } = card;
    const handleDelete = (event) => {
        event.preventDefault();
        onDelete(card)
    }



    const onChange = (event) => {
        event.preventDefault()
        const {name, value, defaultValue} = event.currentTarget
        handleChange({name, value, defaultValue})
    }

    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" name="name" defaultValue={name} onChange={onChange}/>
            <input className={styles.input} type="text" name="company" defaultValue={company} onChange={onChange}/>
            <select className={styles.theme} name="theme" defaultValue={theme} onChange={onChange}>
                <option value="Dark">Dark</option>
                <option value="Light">Light</option>
                <option value="Colorful">Colorful</option>
            </select>
            <input className={styles.input} type="text" name="occupation" defaultValue={occupation} onChange={onChange}/>
            <input className={styles.input} type="text" name="email" defaultValue={email} onChange={onChange}/>
            <textarea className={styles.memo} name="memo" defaultValue={memo} onChange={onChange}/>
            <div className={styles.btnBox}>
                <div className={styles.image_input}>
                    <ImageInput name={name} />
                </div>
                <Button name='Delete' onClick={handleDelete}/>
            </div>
        </form>
    )
};

export default CardMakerForm;