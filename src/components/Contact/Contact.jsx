import "./Contact.scss"
import ContactImage from "../../assets/images/contact.png"

const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="contact__content">
          <h1 className="contact__title">
            Speak with a Scotia Wealth Management professional Today
          </h1>
          <a href="https://www.scotiawealthmanagement.com/ca/en/connect-with-us.html" className="contact__button">
            Connect with Us
          </a>
        </div>
        <div className="contact__image-container">
          <img src={ContactImage} alt="Scotia Wealth Management professional" className="contact__image"/>
        </div>
      </section>
    </>
  );
};

export default Contact;