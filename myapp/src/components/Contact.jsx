import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);

    emailjs
      .sendForm(
        "service_hmp1jwo",   // from EmailJS
        "template_0omwvb3",  // from EmailJS
        form.current,
        "lFjPwQEMJ-ZPEbaTI"    // from EmailJS
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
        },
        (err) => {
          console.error("Failed to send:", err);
          setError(true);
        }
      );
  };

  return (
    <section
        id="contact"
        className="relative py-12 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-blue-500 to-gradientEnd dark:from-gray-800 dark:to-gray-900 rounded-2xl"
        >
      {/* Heading */}
      <motion.div
        className="flex flex-col items-center text-center mb-14"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl font-heading font-bold text-white dark:text-gray-100">
          Contact Gerald
        </h1>
        <p className="text-white/80 dark:text-gray-300 mt-3">
          Got a question or project idea? Let’s talk.
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-3xl mx-auto px-6 md:px-12 bg-white/10 dark:bg-gray-800/40 backdrop-blur-md p-10 rounded-2xl shadow-lg space-y-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div>
          <label className="block text-white font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            required
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            required
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your message..."
          ></textarea>
        </div>

        <motion.button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Send Message
        </motion.button>

        {/* ✅ Confirmation message */}
        {isSent && (
          <p className="text-green-400 mt-4 text-center">
            ✅ Message sent successfully!
          </p>
        )}
        {error && (
          <p className="text-red-400 mt-4 text-center">
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </motion.form>
      <motion.div
        className="mt-12 w-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-xl py-6 flex justify-center space-x-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
    >
        <a
        href="https://www.linkedin.com/in/gerald-freislich-8b983926a/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-400 text-lg font-semibold transition-colors"
        >
        LinkedIn
        </a>
        <a
        href="https://github.com/GeraldFreis"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400 text-lg font-semibold transition-colors"
        >
        GitHub
        </a>
    </motion.div>

    </section>
  );
}

export default Contact;