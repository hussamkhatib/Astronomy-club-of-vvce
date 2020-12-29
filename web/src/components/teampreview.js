import React from 'react'
import TeamMember from './team-member'
import styles from './teampreview.module.css'

const TeamPreview =  props => {  
    return (  
    <ul className={styles.list}>
{props.nodes && props.nodes.map( node => (
      <li
        key={node.name}>
        <TeamMember 
          height="240" 
          width="200" 
          {...node} />
      </li>
      ))}   
    </ul>      
    )
}

export default TeamPreview
