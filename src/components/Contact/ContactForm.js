import React, { useState } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import classes from './Contact.module.css'
import logo01 from './../img/logos/01b.png'
import logo02 from './../img/logos/02b.png'
import logo03 from './../img/logos/03b.png'
import logo04 from './../img/logos/04b.png'
import logo05 from './../img/logos/05b.png'
import logo06 from './../img/logos/06b.png'
import logo07 from './../img/logos/07b.png'
import logo08 from './../img/logos/08b.png'
import logo09 from './../img/logos/09b.png'
import logo10 from './../img/logos/10b.png'

const handleURL = (url) => {
  return () => window.open(url, "_blank")
}

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className={classes.ContactForm}>
      <h2 className={classes.Header}>let's connect</h2>
      <div className={classes.Container}>
        
        <div className={classes.Row}>
          <div className={classes.Column}>
            <div className={classes.blockColLeft}>
              <div className={classes.Text}>
                <h3>follow us on instagram</h3>
              </div>
              <FaInstagramSquare className={classes.Icon} color="#092765" size='50px' style={{paddingRight: '3%', borderRadius: '15px', cursor: 'pointer'}}
              onClick={handleURL('https://www.instagram.com/thunderstruckcollective/')} />
            </div>
            <div className={classes.blockColRight}>
            <div className={classes.Text}>
                <h3>send us an email</h3>
              </div>
            <form onSubmit={handleSubmit}>
              <div className={classes.Input}>
                <label htmlFor="name">Name:&nbsp;</label>
                <input  type="text" id="name" required />
              </div>
              <div className={classes.Input}>
                <label htmlFor="email">Email:&nbsp;</label>
                <input  type="email" id="email" required />
              </div>
              <div className={classes.Input}>
                <label htmlFor="message">Message:&nbsp;</label>
                <textarea id="message" required />
              </div>
              <button className={classes.Button} style={{backgroundColor: "rgb(0, 31, 97)", color: "white", padding: '5px', borderRadius: '7px' }} type="submit">{status}</button>
            </form>
            </div>
          </div>        
        </div>
      </div>
        <div className={classes.Logos}>
          <img className={classes.Logo01} src={logo01} alt="me"></img>
          <img className={classes.Logo02} src={logo02} alt="me"></img>
          <img className={classes.Logo03} src={logo03} alt="me"></img>
          <img className={classes.Logo08} src={logo08} alt="me"></img>
          <img className={classes.Logo09} src={logo09} alt="me"></img>
          <img className={classes.Logo10} src={logo10} alt="me"></img>
          <img className={classes.Logo06} src={logo06} alt="me"></img>
          <img className={classes.Logo05} src={logo05} alt="me"></img>
          <img className={classes.Logo04} src={logo04} alt="me"></img>
          <img className={classes.Logo07} src={logo07} alt="me"></img>
        </div>
    </div>
    
  );
};

export default ContactForm;