import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [formVisible, setFormVisible] = useState(true);
  const [showError, setShowError] = useState(false);

  const sendWhatsApp = () => {
    const phoneNumber = "+6283119230298";
    const encodedMessage = encodeURIComponent(
      `*Name:* ${name} *Message:* ${message}`
    );
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank").focus();
  };

  const handleSend = () => {
    if (name && message) {
      sendWhatsApp();
      setFormVisible(false);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  return (
    <section className="bg-gray-800 flex justify-center items-center h-svh p-5">
      <AnimatePresence>
        {showError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="absolute top-5 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded shadow-lg"
          >
            Please fill out all fields.
          </motion.div>
        )}
        {formVisible && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="mb-20 bg-white shadow-lg rounded-lg p-6 w-full max-w-md mx-auto"
          >
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
              Get in Touch
            </h2>
            <p className="text-center text-sm text-gray-600 mb-6">
              Have questions or want to work together?
            </p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-zinc-500"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-zinc-500"
                  id="message"
                  rows="5"
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-zinc-700 hover:bg-zinc-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  type="button"
                  onClick={handleSend}
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      {!formVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mx-auto text-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your message has been sent. I'll get back to you soon!
          </p>
          <button
            className="bg-zinc-700 hover:bg-zinc-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setFormVisible(true)}
          >
            Send Another Message
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default Contact;
