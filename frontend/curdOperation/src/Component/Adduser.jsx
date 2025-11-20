import React, { useState } from "react";
import axios from "axios";
import "./Modal.css";

const AddUser = ({ closeModal, refreshTable }) => {
  const [form, setForm] = useState({
    name: "",
    fathername: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8085/api/create", form);
      refreshTable(); // reload table
      closeModal(); // close modal
    } catch (error) {
      throw new Error("error", error);
    }
  };

  return (
    <div className="modalOverlay">
      <div className="modalBox">
        <h2>Add User</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="fathername"
            placeholder="Father Name"
            value={form.fathername}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <div className="modalActions">
            <button type="button" onClick={closeModal}>
              Cancel
            </button>

            <button type="submit" className="submitBtn">
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
