import React from 'react';
import styles from './ImageInput.module.css';

const ImageInput = ({FileInput, name}) => {
    return (
        <div className={styles.image_input}>
            <button  className={styles.name}>{FileInput}</button>
        </div>
    )
};

export default ImageInput;