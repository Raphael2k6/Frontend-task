import React from 'react';
import Icon from '../Utils/Icons/Icon';
import styles from './Dashboard.module.css';
import { dashboardCardData, tableData } from '../../data';

const cards = dashboardCardData.map(card => {
    return (
        <div className={styles.card} key={card.id}>
            <div className={styles.cardContent}>
                <div className={styles.currencySymbol}>
                    <p>{card.currencySymbol}</p>
                </div>
                <div className={styles.amount}>
                    <p>{card.currency}</p>
                    <p>{card.amount}</p>
                </div>
            </div>
            <div className={styles.buttons}>
                <span>{card.send}</span>
                <span>{card.convert}</span>
            </div>

        </div>
    )
})

const tableInfo = tableData.map((e, i) => {
    return (
        <div className={styles.table__information__option} key={i}>
            <div>{e.From} </div>
            <div>{e.To} </div>
            <div>{e.Currency} </div>
            <div>{e.Amount} </div>
            <div className={e.status === true ? styles.green: styles.red}>{e.Action} </div>
        </div>
    )

});
const Dashboard = (props) => {
    const { hide } = props;
    return (
        <div className={styles.container} onClick={hide}>
            <p className={styles.overview}>Overview</p>
            <h1>Dashboard</h1>
            <hr />
            <div className={styles.cardHolder}>
                {cards}
            </div>
            <div className='mt-5'>
                <div className={styles.table}>
                    <div className={styles.table__header}>
                        <div>
                            From <Icon name="caretUpDown"/>
                        </div>
                        <div>
                            To <Icon name="caretUpDown"/>
                        </div>
                        <div>
                            Currency <Icon name="caretUpDown"/>
                        </div>
                        <div>
                            100 <Icon name="caretUpDown"/>
                        </div>
                        <div>
                            Action <Icon name="caretUpDown"/>
                        </div>
                    </div>
                    <div className={styles.table__information}>
                        {tableInfo}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
