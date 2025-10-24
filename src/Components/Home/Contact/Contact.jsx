import React, { useState, useEffect } from "react";
import styles from "./Contact.module.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import { SiFiverr } from "react-icons/si";
import { SiUpwork } from "react-icons/si";
import { useForm, ValidationError } from "@formspree/react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [state, handleSubmit] = useForm("xqayynwk");
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Show modal when form succeeds
  useEffect(() => {
    if (state.succeeded) {
      setShow(true);
      setFormData({ email: '', message: '' });
      setFormSubmitted(true);
    }
  }, [state.succeeded]);

  const handleClose = () => {
    setShow(false);
    setFormSubmitted(true); // تأكيد إخفاء الفورم بعد إغلاق المودال
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/ahmed-mnaa-8380ba294/",
      color: "#0077b5",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/Ahmed-M-Manaa",
      color: "#333",
    },
    {
      name: "Freelancer",
      icon: <SiFreelancer />,
      url: "https://www.freelancer.com/u/AhmedManaa3",
      color: "#29b2fe",
    },
    {
      name: "Upwork",
      icon: <SiUpwork />,
         url: "https://www.upwork.com/freelancers/~01a7880c8b0770c7ef",

      color: "#14a800",
    },
    {
      name: "Fiverr",
      icon: <SiFiverr />,
          url: "https://www.fiverr.com/ahmed_manaa3/buying?source=avatar_menu_profile",

      color: "#1dbf73",
    },
  ];

  const contactInfo = [
    {
      icon: <MdEmail />,
      label: "Email",
      value: "ahmedmana2005@gmail.com",
      link: "mailto:ahmedmana2005@gmail.com",
    },
    {
      icon: <FaPhoneAlt />,
      label: "phone number",
      value: "01019429926",
      link: null,
    },
    {
      icon: <MdLocationOn />,
      label: "Location",
      value: "Cairo, Egypt",
      link: null,
    },
  ];

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <p className={styles.sectionSubtitle}>
          Feel free to reach out for collaborations or just a friendly hello
        </p>

        <div className={styles.contactContent}>
          {/* Contact Form - يظهر فقط إذا لم يتم إرسال الفورم */}
          {!formSubmitted ? (
            <div className={styles.formContainer}>
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    autoComplete="off"
                    className={styles.input}
                    required
                    placeholder="Enter your email address"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={styles.textarea}
                    required
                    rows="5"
                    placeholder="Tell me about your project or just say hello..."
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <button 
                  type="submit" 
                  className={styles.btn} 
                  disabled={state.submitting}
                >
                  {state.submitting ? 'Sending...' : 'Send Your Message'}
                </button>
              </form>
            </div>
          ) : (<div></div> )}

          {/* Contact Info & Social Links */}
          <div className={styles.infoContainer}>
            {/* Contact Information */}
            <div className={styles.contactInfo}>
              <h3 className={styles.infoTitle}>Contact Information</h3>
              {contactInfo.map((item, index) => (
                <div key={index} className={styles.contactItem}>
                  <span className={styles.contactIcon}>{item.icon}</span>
                  <div className={styles.contactDetails}>
                    <span className={styles.contactLabel}>{item.label}</span>
                    {item.link ? (
                      <a
                        href={item.link}
                        className={styles.contactValue}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className={styles.contactValue}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className={styles.socialSection}>
              <h3 className={styles.socialTitle}>Find Me On</h3>
              <div className={styles.socialLinks}>
                {socialLinks.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.url}
                    className={styles.socialLink}
                    style={{ "--social-color": platform.color }}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={platform.name}
                  >
                    <span className={styles.socialIcon}>{platform.icon}</span>
                    <span className={styles.socialName}>{platform.name}</span>
                  </a>
                ))}
              </div>
            </div>
         </div>
          </div>
        
      </div>

      {/* Simple Modal */}
     <Modal 
  show={show} 
  onHide={handleClose} 
  centered
  className={styles.modal}
>
  <Modal.Header closeButton>
    <Modal.Title>Success!</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    Thank you for your message! I'll get back to you soon.
  </Modal.Body>
  <Modal.Footer>
    <Button 
      variant="outline-dark" 
      onClick={handleClose}
      className={styles.modalButton}
    >
      Close
    </Button>
  </Modal.Footer>
</Modal>
    </section>
  );
};

export default Contact;