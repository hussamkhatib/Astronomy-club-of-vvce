import React from 'react'
import TeamMember from './team-member'
import styles from './teampreview.module.css'
const TeamPreview = props => {
    return (
        <div className={styles.root}>
            <ul className={styles.list}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.name}>
              <TeamMember {...node} />
            </li>
          ))}  
          </ul>          
        </div>
    )
}

export default TeamPreview
