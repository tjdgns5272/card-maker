import React, {useRef} from 'react';
import styles from './input_form.module.css'
import Button from "../button/button";


const InputForm = ({FileInput, name, onAdd}) => {
    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const occupationRef = useRef();
    const emailRef = useRef();
    const memoRef = useRef();

    const onSubmit = (event) => {
        event.preventDefault();
        const card = {
            id: Date.now(),
            name: nameRef.current.value || '',
            company: companyRef.current.value || '',
            theme: themeRef.current.value,
            occupation: occupationRef.current.value || '',
            email: emailRef.current.value || '',
            memo: memoRef.current.value || '',
            picName: '',
            picURL: '',
        }
        formRef.current.reset();
        onAdd(card);
    };

    const picURL = name || 'No File'
    return (
        <form ref={formRef} className={styles.form}>
            <input ref={nameRef}
                   className={styles.input}
                   type="text"
                   name="name"
                   placeholder="name"/>
            <input ref={companyRef}
                   className={styles.input}
                   type="text"
                   name="company"
                   placeholder="company"/>
            <select ref={themeRef}
                    className={styles.theme}
                    name="theme"
                    placeholder="theme">
                <option placeholder="Dark">Dark</option>
                <option placeholder="Light">Light</option>
                <option placeholder="Colorful">Colorful</option>
            </select>
            <input ref={occupationRef}
                   className={styles.input}
                   type="text"
                   name="occupation"
                   placeholder="occupation"/>
            <input ref={emailRef}
                   className={styles.input}
                   type="text"
                   name="email"
                   placeholder="email"/>
            <textarea ref={memoRef}
                      className={styles.memo}
                      name="memo"
                      placeholder="memo"/>
            <div className={styles.btnBox}>
                <div className={styles.image_input}>
                    <FileInput />
                </div>
                <Button name='Add' onClick={onSubmit}/>
            </div>
        </form>
    )
};

export default InputForm;