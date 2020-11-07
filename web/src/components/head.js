import React from 'react'
import styles from '../components/head.module.css'
import logo from './icon/logo.png'
const Head = props => {
    return (
        <>
        <img className={styles.image} src={logo} alt='logo'/>
        {/* <h1 className={styles.h1}>{props.title} </h1>  */}
        {/* <h3 className={styles.h3}>{props.subtitle}</h3> */}
        <p className={styles.p}>
        To Honour the contributions of the Missile Man o  f India, The Dr. APJ Abdul Kalam Memorial Astronomical club of VVCE was formed in the year 2018. Our vision is to create interest among the engineering students about space , astronomy and make them understand the importance of engineering in the field of research and technology.
        </p>
        </>
    )
}

export default Head
