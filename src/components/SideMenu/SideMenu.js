import React, { useState, useEffect} from 'react';
import styles from './SideMenu.module.css';
import Icon from "../Utils/Icons/Icon";
import { sidemenuData } from '../../data';
import GetStartedLevel from '../GetStartedLevel/GetStartedLevel';
import Modal from '../Modal/Modal';


const SideMenu = (props) => {
    const {showModal, show} = props;
    const [activeTab, setActiveTab] = useState("");
    

    const sideMenuItems = sidemenuData.map((item) => {
        return (
            <ul key={item.id}>
                <li className={activeTab === item.name ? styles.active : styles.listItems}>{item.name}</li>
            </ul>
        )
    })

    useEffect(() => {
        setActiveTab("Transactions")
        return () => {
            setActiveTab("")
        }
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Icon name="logo" />
            </div>
            <div className={styles.home}>
                <div className={styles.homeText}>
                    <Icon name="home" />
                    <p>Home</p>
                </div>
                <div className={styles.icon}>
                    <Icon name="caretUp" />
                </div>
            </div>
            <div className={styles.listContainer}>
                {sideMenuItems}
            </div>
            <div className={styles.levelsHolder} onClick={show}>
                <GetStartedLevel />
            </div>
                {showModal && <Modal />}
        </div>
    )
}

export default SideMenu
