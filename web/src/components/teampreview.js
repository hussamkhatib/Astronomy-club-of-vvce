import React from 'react'
import TeamMember from './team-member'
import styles from './teampreview.module.css'


const TeamPreview =  props => {
  const pageNumbers = [];
      
  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
      pageNumbers.push(i);
  }
  
    return (  
    <div className={styles.rootelem}>
       
       <div className={styles.currentimage}>
        <ul>
        {props.singleNode &&
          props.singleNode.map((node) => (
            <li key={node.name}> 
              <TeamMember height="280" width="200"
              {...node} />
              </li>
          ))}
  
          </ul>  
        </div>
        
        <ul className={styles.listnav}>
      {pageNumbers.map(number => (
        <li className={styles.none} onClick={() => {props.paginate(number)
        }} key={number}>
        </li>
      ))}
    </ul>


           {/* images */}
         <div className={styles.wrapper}>   
            <ul className={styles.list}>
        {props.nodes && props.nodes.map((node,index) => (
 //
            <li  onClick={() => props.switchImage(index)}
            key={node.name} className={`div${index+1}`}>
              <TeamMember height="120" width="100" {...node} />
            </li>
          ))}   
          </ul>      
          </div>    
        </div>
    )
}

export default TeamPreview
