import React from 'react'
import TeamMember from './team-member'
import styles from './teampreview.module.css'
import { useMediaQuery } from 'react-responsive'

const TeamPreview =  props => {
  const pageNumbers = [];
  const isMobileOrTab = useMediaQuery({
    query: '(max-device-width: 719px)'
  })
  const isLaptopOrDesktop = useMediaQuery({
    query: '(min-device-width: 720px)'
  })
  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
      pageNumbers.push(i);
  }
  
    return (  
     <div className={styles.rootelem}>
       {isLaptopOrDesktop && <>
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
            <li onClick={() => props.switchImage(index)}
            key={node.name} className={`div${index+1}`}>
              <TeamMember height="120" width="100" {...node} />
            </li>
          ))}   
          </ul>      
          </div>    
         </> }

        {isMobileOrTab &&
          <div>   
          <ul className={styles.list}>
      {props.nodesMobile && props.nodesMobile.map((node,index) => (
          <li onClick={() => props.switchImage(index)}
          key={node.name} className={`div${index+1}`}>
            <TeamMember height="120" width="100" {...node} />
          </li>
        ))}   
        </ul>      
        </div>   
        }

        </div>
    )
}

export default TeamPreview
