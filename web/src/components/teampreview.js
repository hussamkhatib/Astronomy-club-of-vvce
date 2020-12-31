import React from 'react'
import TeamMember from './team-member'
import styles from './teampreview.module.css'

const TeamPreview =  props => {  
    return ( 
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Our Team</h2>
      <ul className={styles.list}>
        {props.nodes && props.nodes.map( node => (
          <li 
            className={styles.grid}
            key={node.name}>
            <TeamMember 
              height="160" 
              width="160" 
              {...node} />
          </li>
        ))}   
      </ul>  
    </div>
    )
}

export default TeamPreview
