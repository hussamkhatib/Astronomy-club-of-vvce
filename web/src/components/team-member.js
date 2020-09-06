import React from 'react'
import { imageUrlFor } from '../lib/image-url'
import styles from './team.module.css'
import {buildImageObj} from '../lib/helpers'

function TeamMember (props) {
    return (
        <>
        { props.image && props.image.asset && ( 
        <div className={styles.teams}
         key={props.slug.current}>   
           <img className={styles.image} 
           src = {imageUrlFor(buildImageObj(props.image))
           .height(props.height)
           .width(props.width)
           .fit('crop')
           .url()} />
           <h5 className={styles.h5}> {props.name} </h5>
           <h6 className={styles.h6}> {props.role} </h6>

        </div>)} 
   
        </>
    )
}

export default TeamMember
