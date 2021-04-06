import React, {memo} from 'react';
import styles from './footer.module.css'
const Footer = memo(() => {
    return (
        <div className={styles.footer}>
            <h1 className={styles.footer_text}>Code by SH</h1>
        </div>
        )
});


export default Footer;