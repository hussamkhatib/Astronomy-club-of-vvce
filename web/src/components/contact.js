import React from 'react'
import styles from './contact.module.css'


const Contact = () => {
    return (
        <form className={styles.parent} method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
           <input type="hidden" name="bot-field" />
           <input type="hidden" name="form-name" value="contact" />
  <h2>Contact us</h2>
  <label>
    <span>Your Name</span>
    <input type="text" name="name" id="name" />
  </label>
  <label>
    <span>Your Email</span>
    <input type="email" name="email" id="email" />
  </label>
  <label>
    <span>Message</span>
    <textarea name="message" id="message" rows="5" />
  </label>
  <button className={styles.btn} type="submit">okay, send</button>
  {/* <input type="reset" value="Clear" /> */}
</form>
    )
}

export default Contact
