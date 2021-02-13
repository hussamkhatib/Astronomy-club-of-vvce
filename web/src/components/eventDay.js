
import React from 'react'
import styles from './eventday.module.css'
import Calendar from './icon/Calendar'

const eventDay = props => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

    const evDay = new Date(props.eventDate.replaceAll('-',','))
    console.log(evDay)
    
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>
                {props.title}
            </h3>
            <time className={styles.time}>
                <Calendar />
                {monthNames[evDay.getMonth()]} {evDay.getDate()}
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
