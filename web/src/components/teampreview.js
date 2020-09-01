import React from 'react'
import TeamMember from './team-member'
import styles from './teampreview.module.css'
import punith from './icon/punithsagar.png'

const TeamPreview =  props => {
  const pageNumbers = [];
      
  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
      pageNumbers.push(i);
  }
  
    return ( 
    <div className={styles.root}>
       <img className={styles.temp} src={punith} alt= 'alt'/>
       {/*  nav */}
        <ul className={styles.aaa}>
      {pageNumbers.map(number => (
        <li  onClick={() => props.paginate(number)} key={number}>
        </li>
      ))}
    </ul>


           {/* images */}
         <div className={styles.wrapper}>   
            <ul className={styles.list}>
        {props.nodes &&
          props.nodes.map((node,index) => (
            <li key={node.name} className={`div${index+1}`}>
              <TeamMember {...node} />
            </li>
          ))}   
          </ul>      
          </div>    
        </div>
    )
}

export default TeamPreview
