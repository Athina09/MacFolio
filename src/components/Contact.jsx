import WindowWrapper from "../hoc/WindowWrapper.jsx";
import WindowControls from "./WindowControls.jsx";
import { personalInfo, socialLinks } from "../constants";

const Contact = () => {
  return (
    <div className="contact-window">
      <div className="window-header">
        <WindowControls target="contact" />
        <span className="window-title">Contact</span>
      </div>

      <div className="contact-content">
        <div className="contact-card">
          <div className="contact-info">
            <h2>{personalInfo.name}</h2>
            <p className="title">{personalInfo.title}</p>
            <p className="location">📍 {personalInfo.location}</p>
          </div>

          <div className="contact-details">
            <a href={`mailto:${personalInfo.email}`} className="contact-item">
              <span className="icon">✉️</span>
              <span>{personalInfo.email}</span>
            </a>
            <a href={`tel:${personalInfo.phone}`} className="contact-item">
              <span className="icon">📱</span>
              <span>{personalInfo.phone}</span>
            </a>
          </div>

          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className={`social-btn ${link.name.toLowerCase()}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={link.icon} alt={link.name} />
                {link.name}
              </a>
            ))}
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message" rows={4}></textarea>
            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
