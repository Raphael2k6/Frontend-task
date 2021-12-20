import React from 'react';
import styles from './Modal.module.css';
import Icon from '../Utils/Icons/Icon';

const Modal = () => {
    return (
        <div className={styles.modal}>
            <div className={styles.header}>
                <div className={styles.start}>
                    <div>
                        <p>Your quick start guide</p>
                        <div className={styles.level}>
                            <p>LEVEL 1</p>
                            <p>50% completed</p>
                        </div>
                    </div>
                    <div>
                        <Icon name="caretDown" />
                    </div>
                </div>
                <div className={styles.nft}>
                    <Icon name="nftIcon" />
                    <p>Complete 2 levels and recieve your free NFT </p>
                </div>
            </div>
            <div className={styles.step1}>
                <div>
                    <Icon name="checklist" />
                </div>
                <div>
                    <p>Open your account</p>
                </div>
            </div>
            <div className={styles.account}>
                <span>You have successfully opened your account</span>
            </div>
            <div className={styles.step2}>
                <div>
                    <Icon name="identity" />
                </div>
                <div>
                    <p>Verify your identity</p>
                </div>
            </div>
            <div className={styles.id}>
                <span>Unlock features with your passport</span>
            </div>
            <div className={styles.step3}>
                <div>
                    <Icon name="phoneIcon" />
                </div>
                <div>
                    <p>Verify your phone number</p>
                </div>
            </div>
            <div className={styles.phone}>
                <span>Secure your account using your phone number</span>
            </div>
            <div className={styles.step4}>
                <div>
                    <Icon name="bank" />
                </div>
                <div>
                    <p>Connect your bank account</p>
                </div>
            </div>
            <div className={styles.bank}>
                <span>Secure your account using your phone number</span>
            </div>
        </div>
    )
}

export default Modal
