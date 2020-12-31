import React from 'react'
import { imageUrlFor } from '../lib/image-url'
import styles from './team.module.css'
import {buildImageObj} from '../lib/helpers'
 
function TeamMember (props) {
    return (
        <>
            <h5 className={styles.h5}> {props.name} </h5>
            <h6 className={styles.h6}> {props.role} </h6>
            <img 
            className={styles.image} 
            src = {imageUrlFor(buildImageObj(props.image))
            .height(props.height)
            .width(props.width)
            .fit('crop')
            .url()} />
        </>
    )
}

export default TeamMember
