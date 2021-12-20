import React, { useState } from 'react';
import SideMenu from '../SideMenu/SideMenu';
import styles from './Layout.module.css'
import Dashboard from '../Dashboard/Dashboard';

const Layout = () => {
    const [showModal, setShowModal] = useState(false);

    const showModalHandler = () => {
        setShowModal(true);
    }
    const hideModalHandler = () => {
        setShowModal(false);
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.sidemenuHolder}>
                <SideMenu
                    show={showModalHandler} 
                    showModal={showModal}
                    hide={hideModalHandler}
                />
            </div>
            <div className={styles.dashboardHolder}>
                <Dashboard 
                    show={showModalHandler}
                    hide={hideModalHandler}

                />
            </div>
           
        </div>
    )
}

export default Layout
