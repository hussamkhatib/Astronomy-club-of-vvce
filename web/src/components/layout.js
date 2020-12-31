import React from 'react'
import Header from './header'
import {Link} from 'gatsby'
import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>  
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
    <div>
     <div className={styles.footerWrapper}>
     <div className={styles.headingWrapper}>
     <h2 className={styles.heading}>
        Astronomy club of VVCE
      </h2>
      <h5 className={styles.sub}>
         TOGETHER TOWARD THE MYSTERY OF EXISTENCE
      </h5>
      <div className={styles.social}>
     <a className={styles.aSocial} href="https://www.instagram.com/astronomyclubofvvce/" target="_blank"> <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.2598 2.25983L7.25977 2.25983C4.49834 2.25983 2.25977 4.4984 2.25977 7.25983L2.25977 17.2598C2.25977 20.0212 4.49834 22.2598 7.25977 22.2598H17.2598C20.0212 22.2598 22.2598 20.0212 22.2598 17.2598V7.25983C22.2598 4.4984 20.0212 2.25983 17.2598 2.25983Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.2597 11.6299C16.3831 12.4621 16.241 13.3121 15.8535 14.0589C15.466 14.8057 14.8529 15.4113 14.1013 15.7896C13.3498 16.1678 12.4982 16.2995 11.6675 16.1658C10.8368 16.0322 10.0695 15.64 9.47456 15.045C8.87963 14.4501 8.48745 13.6828 8.35378 12.8521C8.22012 12.0214 8.35178 11.1698 8.73004 10.4183C9.1083 9.66674 9.7139 9.05362 10.4607 8.66613C11.2075 8.27863 12.0575 8.13647 12.8897 8.25988C13.7386 8.38577 14.5246 8.78135 15.1314 9.38819C15.7383 9.99503 16.1338 10.781 16.2597 11.6299Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.7598 6.75983H17.7698" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg></a>
<a className={styles.aSocial}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 6L12 13L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</svg></a>

      </div>
     </div>
     
      <nav className={styles.navbarfooter}>
        <h4 className={styles.navbarfooterHeader}>Quick links</h4>
        <Link to="/" className={styles.a}>Home</Link>
        <Link to="/" className={styles.a}>Events</Link>
        <Link to="/" className={styles.a}>Blog</Link>
        <Link to="/contact" className={styles.a}>Contact</Link>
        <Link to="/team" className={styles.a}>Team</Link>                
      </nav>
      </div>
      <small>
      &copy; {new Date().getFullYear()} all rights reserved  
      </small>
 
 </div>
    </footer>
  </>
)

export default Layout
