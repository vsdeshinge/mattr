"use client";
import { useState } from "react";
import { db } from "../lib/firebase";
import { ref, push, set } from "firebase/database";
import { practices } from "../lib/content";
export default function ContactForm(){
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      const contactRef = ref(db, "contacts");
      const newContactRef = push(contactRef);

      await set(newContactRef, {
        ...formData,
        createdAt: new Date().toISOString(),
      });

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      });
    } catch (err) {
      console.error("Error saving contact form:", err);
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

return <form className="contact-form" onSubmit={handleSubmit}><p className="eyebrow">TELL US WHAT YOU’RE TRYING TO DO.</p><div className="form-grid"><label>Your name<input name="name" autoComplete="name" required value={formData.name} onChange={handleChange} placeholder="Your name"/></label><label>Your email<input name="email" autoComplete="email" type="email" required value={formData.email} onChange={handleChange} placeholder="you@company.com"/></label></div><label>What are we making?<select name="projectType" value={formData.projectType} onChange={handleChange}><option value="">Choose a practice</option>{practices.map(([name])=><option key={name}>{name}</option>)}<option>Cinematography & Photography</option><option>Something nobody’s done before</option></select></label><div className="form-grid"><label>Budget (optional)<input name="budget" value={formData.budget} onChange={handleChange} placeholder="Let’s discuss"/></label><label>Timeline (optional)<input name="timeline" value={formData.timeline} onChange={handleChange} placeholder="When do you need it?"/></label></div><label>The idea. The problem. The ambition.<textarea name="message" rows="4" required value={formData.message} onChange={handleChange} placeholder="We’re all ears."/></label><button className="button red" disabled={submitting}>{submitting?"Sending…":"Make the first move"}<span>↗</span></button><p role="status" aria-live="polite" className="form-status">{status==="success"?"Thanks — your message has been sent.":status==="error"?"We couldn’t send your message. Please try again or email us directly.":""}</p></form>}
