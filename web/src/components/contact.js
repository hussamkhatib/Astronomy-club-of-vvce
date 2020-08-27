import React from 'react'
import styles from './contact.module.css'
//import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  
    return (
        <form className={styles.parent} method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" data-netlify-recaptcha="true">

           <input type="hidden" name="bot-field" />
           <input type="hidden" name="form-name" value="contact" />
  <h2>Contact us</h2>
  <label>
    <span>Your Name</span>
    <input type="text" name="name" id="name" required/>
  </label>
  <label>
    <span>Your Email</span>
    <input type="email" name="email" id="email" required/>
  </label>
  <label>
    <span>Message</span>
    <textarea name="message" id="message" rows="5" required/>
  </label>
  {/* <div data-netlify-recaptcha="true"></div> */}
  {/* <ReCAPTCHA sitekey={process.env.GATSBY_RECAPTCHA_KEY} /> */}
  <button className={styles.btn} type="submit">okay, send</button>

  {/* <button type="reset" value="Clear" /> */}
</form>
    )
}

export default Contact
