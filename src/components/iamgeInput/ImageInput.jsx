import React from 'react';
import styles from './ImageInput.module.css';

const ImageInput = ({name}) => {
    return (
        <div className={styles.image_input}>
            <button  className={styles.name}>{name}</button>
        </div>
    )
};

export default ImageInput;