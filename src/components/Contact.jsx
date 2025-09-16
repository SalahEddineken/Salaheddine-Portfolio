import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import "../index.css";

// Initialize EmailJS (you can replace these with your own EmailJS credentials)
emailjs.init("p-gXzzyvEhPaJ0XA-");

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

    // Create a mailto link as fallback if EmailJS fails
    const mailtoLink = `mailto:salaheddine.kennouda@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=Name: ${encodeURIComponent(form.name)}%0AEmail: ${encodeURIComponent(form.email)}%0A%0AMessage:%0A${encodeURIComponent(form.message)}`;

    // Try EmailJS first, but provide fallback
    emailjs
      .send(
        "service_r2i0by4",
        "template_mf5x3bh",
        {
          from_name: form.name,
          to_name: "Salaheddine Kennouda",
          from_email: form.email,
          to_email: "salaheddine.kennouda@gmail.com",
          message: form.message,
        },
        "p-gXzzyvEhPaJ0XA-"
      )
      .then(
        () => {
          setLoading(false);
          setConfirmation("Thank you! I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        }
      )
      .catch((error) => {
        setLoading(false);
        console.error("EmailJS error:", error);
        
        // Fallback: Open default email client or show contact info
        setConfirmation("Email service unavailable. Please contact me directly at: salaheddine.kennouda@gmail.com");
        
        // Also provide a copy-to-clipboard option
        const contactInfo = `Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`;
        if (navigator.clipboard) {
          navigator.clipboard.writeText(contactInfo).then(() => {
            setConfirmation("Email service unavailable. Contact info copied to clipboard: salaheddine.kennouda@gmail.com");
          });
        }
      });
  };

  return (
    <div className={`xl:mt-12 flex justify-center`}>
      <motion.div variants={slideIn("up", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl max-w-2xl w-full">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
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
