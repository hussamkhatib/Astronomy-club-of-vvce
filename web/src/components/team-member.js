import React from 'react'
import { imageUrlFor } from '../lib/image-url'
import styles from './team.module.css'
import {buildImageObj} from '../lib/helpers'

function TeamMember (props) {
    return (
        <div className={styles.parent}>
        { props.image && props.image.asset && ( <div key={props.slug.current}>
          
           <img className={styles.image} 
           src = {imageUrlFor(buildImageObj(props.image))
           .height(140)
           .width(140)
           .fit('crop')
           .url()} />
           <h5 className={styles.h5}> {props.name} </h5>
           <h6 className={styles.h6}> {props.role} </h6>

        </div>)}
  
        </div>
    )
}

export default TeamMember
