import React, {memo} from 'react';
import styles from './card_edit_form.module.css';
import Button from "../button/button";

const CardEditForm = memo(({FileInput, card, onDelete, handleChange}) => {
    const {
        name,
        company,
        theme,
        occupation,
        email,
        memo,
    } = card;
    const handleDelete = (event) => {
        event.preventDefault();
        onDelete(card)
    }
    const onFileChange = file => {
        console.log(file)
        handleChange({
            ...card,
            picName: file.name,
            picURL: file.url,
        })
    };
    const onChange = (event) => {
        event.preventDefault()
        const {name, value} = event.currentTarget
        handleChange({...card, [name]: value})
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
                    <FileInput name={card.picName} onFileChange={onFileChange}/>
                </div>
                <Button name='Delete' onClick={handleDelete}/>
            </div>
        </form>
    )
});

export default CardEditForm;