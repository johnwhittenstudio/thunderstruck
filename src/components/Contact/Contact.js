import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import ContactForm from "./ContactForm";
import classes from './Contact.module.css'

function Contact() {
  // You can skip useEffect if you're not using TailwindCSS
  // Otherwise, for the production usage refer to https://tailwindcss.com/docs/installation
  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);

  return (
    <div className={classes.Contact}>
      <header className={classes.ContactHeader}>
        <img src={logo} className={classes.ContactLogo} alt="logo" />
        <div className="py-6">
          <ContactForm />
        </div>
      </header>
    </div>
  );
}

export default Contact;