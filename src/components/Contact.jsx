import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

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

  // EmailJS configuration - Replace these with your actual values
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_6q6533a";
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_iz2lbvu";
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "ciFMkg3BzB_QqaY3s";

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

    // Initialize EmailJS with your public key
    emailjs.init(PUBLIC_KEY);

    // Send email using EmailJS
    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Salaheddine Kennouda",
        from_email: form.email,
        to_email: "salaheddinekennouda@gmail.com",
        message: form.message,
      },
      PUBLIC_KEY
    )
    .then(() => {
      setLoading(false);
      setConfirmation("✅ Message sent successfully! I'll get back to you soon.");
      
      // Clear the form
      setForm({
        name: "",
        email: "",
        message: "",
      });
    })
    .catch((error) => {
      setLoading(false);
      console.error('EmailJS Error:', error);
      setConfirmation("❌ Failed to send message. Please try again or email me directly at salaheddinekennouda@gmail.com");
    });
  };

  return (
    <div className={`xl:mt-12 flex justify-start w-full`}>
      <motion.div variants={slideIn("up", "tween", 0.2, 1)} className="flex-1 bg-black-100 p-8 rounded-2xl max-w-3xl w-full">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me</h3>
        
        {/* Direct Contact Info */}
        <div className="mt-6 mb-8 p-4 bg-tertiary rounded-xl">
          <p className="text-white text-center mb-2">📧 Direct Contact</p>
          <p className="text-secondary text-center">
            Email: <a href="mailto:salaheddinekennouda@gmail.com" className="text-white underline">salaheddinekennouda@gmail.com</a>
          </p>
        </div>

        <p className="text-secondary text-center mb-4">
          Send me a message directly using the form below
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
