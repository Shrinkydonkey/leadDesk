import API from "../services/api";
import { useState } from "react";

function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.budget ||
      !formData.message
    ) {
      alert("Please fill all fields.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email.");
      return;
    }

    try {
      await API.post("/leads", formData);

      alert("Lead submitted successfully!");

      setFormData({
        name: "",
        email: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong.");
    }
  };

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
      />

      <select
        name="budget"
        value={formData.budget}
        onChange={handleChange}
      >
        <option value="">Select Budget</option>
        <option value="Under ₹10,000">Under ₹10,000</option>
        <option value="₹10,000 - ₹50,000">₹10,000 - ₹50,000</option>
        <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
        <option value="Above ₹1,00,000">Above ₹1,00,000</option>
      </select>

      <textarea
        name="message"
        rows="5"
        placeholder="Tell us about your project..."
        value={formData.message}
        onChange={handleChange}
      />

      <button type="submit">Submit Lead</button>
    </form>
  );
}

export default LeadForm;