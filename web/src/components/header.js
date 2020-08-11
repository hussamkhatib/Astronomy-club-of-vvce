import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'
import logo from './icon/logo.svg'
import asteroid from './icon/asteroid.svg'
import astronaut from './icon/astronaut.svg'
import vector from './icon/vector.svg'
import team from './icon/team.svg'


import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        {siteTitle}
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>
  
    
     <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to='/'>  
            <img className={styles.logo} src={logo}></img>
            Home
            </Link>
          </li>
          <li>
            <Link to='/' className={styles.temp}>
            <img src={vector}></img>
              News</Link>
          </li>
          <li>
          <Link to='/archive/'>
          <img src={team}></img>  
            Team</Link>
          </li>
          <li>
          <Link to='/archive/'>
          <img src={asteroid}></img>
         Blog</Link>
          </li>
          <li>
          <Link to='/archive/'>
          <img src={astronaut}></img>
            Contact</Link>
          </li>

        </ul>
        </nav> 
        
    </div> 
  </div>
)

export default Header
