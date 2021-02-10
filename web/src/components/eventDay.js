import React from 'react'
import styles from './eventday.module.css'
import Calendar from './icon/Calendar'

const eventDay = props => {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>
                {props.title}
            </h3>
            <time className={styles.time}>
                <Calendar />
                {props.eventDate}
            </time>
            <p className={styles.desc}>
                {props.description}
            </p>
            <a className={styles.register} href='./'>
                REGISTER
            </a>
        </div>
    )
}

export default eventDay
