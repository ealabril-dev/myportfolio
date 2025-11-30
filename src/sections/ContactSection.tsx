import React, { useState } from "react";

interface ContactSectionProps {
  compact?: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ compact }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now just log – later you can hook this to an API or email service
    console.log("Form submitted", form);
    alert("Thanks for reaching out! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="section contact-section">
      <h2 className="section-title">Contact</h2>
      <p className="section-subtitle">
        {compact
          ? "Let’s connect to discuss opportunities."
          : "If you’d like to collaborate, discuss a role, or just say hello, feel free to reach out."}
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me a bit about what you have in mind..."
            required
          />
        </div>
        <button className="btn primary" type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
