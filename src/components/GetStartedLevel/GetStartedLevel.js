import React from 'react'
import Icon from '../Utils/Icons/Icon';
import styles from './GetStartedLevel.module.css'

const GetStartedLevel = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.icon}>
                    <Icon name="success"/>
                </div>
                <div className={styles.textHolder}>
                <p className={styles.number}>3</p>
                    <p className={styles.text}>Get Started: Level 1</p>
                </div>
                
            </div>
        </div>
    )
}

export default GetStartedLevel
