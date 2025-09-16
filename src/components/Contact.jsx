import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import "../index.css";

const InputField = ({ label, value, onChange, placeholder, name, type }) => (
  <label className="flex flex-col">
    <span className="text-white font-medium mb-4">{label}</span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
    />
  </label>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setNameError("");
    setMessageError("");
    setConfirmation("");

    if (!validateEmail(form.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!form.name.trim()) {
      setNameError("Name is required.");
      return;
    }

    if (!form.message.trim()) {
      setMessageError("Please enter a message.");
      return;
    }

    setLoading(true);

    // Create a mailto link that opens the user's default email client
    const subject = `Portfolio Contact from ${encodeURIComponent(form.name)}`;
    const body = `Name: ${encodeURIComponent(form.name)}%0AEmail: ${encodeURIComponent(form.email)}%0A%0AMessage:%0A${encodeURIComponent(form.message)}`;
    const mailtoLink = `mailto:salaheddine.kennouda@gmail.com?subject=${subject}&body=${body}`;

    // Also prepare contact info for clipboard
    const contactInfo = `Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}\n\nPlease reply to: ${form.email}`;

    // Simulate sending process
    setTimeout(() => {
      setLoading(false);
      
      // Try to copy to clipboard first
      if (navigator.clipboard) {
        navigator.clipboard.writeText(contactInfo).then(() => {
          setConfirmation("✅ Message copied to clipboard! Opening your email client...");
          setTimeout(() => {
            window.open(mailtoLink, '_self');
          }, 1000);
        }).catch(() => {
          setConfirmation("📧 Opening your email client...");
          setTimeout(() => {
            window.open(mailtoLink, '_self');
          }, 1000);
        });
      } else {
        setConfirmation("📧 Opening your email client...");
        setTimeout(() => {
          window.open(mailtoLink, '_self');
        }, 1000);
      }

      // Clear the form
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className={`xl:mt-12 flex justify-center`}>
      <motion.div variants={slideIn("up", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl max-w-2xl w-full">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me</h3>
        
        {/* Direct Contact Info */}
        <div className="mt-6 mb-8 p-4 bg-tertiary rounded-xl">
          <p className="text-white text-center mb-2">📧 Direct Contact</p>
          <p className="text-secondary text-center">
            Email: <span className="text-white">salaheddine.kennouda@gmail.com</span>
          </p>
        </div>

        <p className="text-secondary text-center mb-4">
          Or use the form below to compose your message
        </p>
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8">
          <InputField
            label="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Insert Your name here..."
            type="text"
          />
          {nameError && <span className="text-red-500">{nameError}</span>}

          <InputField
            label="Email Address"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email address?"
            type="email"
          />
          {emailError && <span className="text-red-500">{emailError}</span>}

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say...?"
              rows="4"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none"
            />
          </label>
          {messageError && <span className="text-red-500">{messageError}</span>}

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
          {confirmation && <p className="text-green-500">{confirmation}</p>}
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
