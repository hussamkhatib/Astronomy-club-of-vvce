import React from 'react'
import EventDay from './eventDay'
import styles from './eventday.module.css'

const EventPreview = props => {
    return (
        <ul className={styles.container}>
           {props.nodes.map(node => (
                <li 
                key={node.id}
                className={styles.registercard}>
                    <EventDay 
                    {...node}/>
                </li>
           ))}         
        </ul>
    )
}

export default EventPreview
