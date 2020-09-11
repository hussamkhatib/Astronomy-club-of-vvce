import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'
import logo from './icon/logo.svg'
import Contactsvg from './contactsvg'
import Blogsvg from './blogsvg'
import Vector from './vector'
import Teamsvg from './teamsvg'


import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={styles.root}>

    <div className={styles.wrapper}>
     
   
      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      {/* <div className={styles.branding}>
        {siteTitle}
      </div> */}
    <img className={styles.logo} src ={logo} /> 
      </div>
     
     <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
        <li className={styles.hidden}>
            <Link to='/' >
            <img className={styles.logo} src={logo}></img>
              </Link>
          </li>

          <li>
            <Link to='/'>  
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"
             viewBox="0 0 24 24" fill="#FFF"><path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h18v-10h3zm-5 8h-14v-10.26l7-6.912 7 6.99v10.182zm-5-1h-4v-6h4v6z"/></svg>
            Home
            </Link>
          </li>

          <li>
            <Link to='/' >
             <Vector />
              News</Link>
          </li>
          <li>
          <Link to='/team'>
          <Teamsvg />
           Team</Link>
          </li>
          <li>
          <Link to='/archive/'>
           <Blogsvg />
         Blog</Link>
          </li>
          <li>
          <Link to='/contact'>
         <Contactsvg />
            Contact</Link>
          </li>

        </ul>
        </nav> 
        
    </div> 

)

export default Header
