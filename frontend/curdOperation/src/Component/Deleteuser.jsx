import React, { useState } from "react";
import axios from "axios";
const Deleteuser = ({ user, refreshTable, closeModal }) => {
  const [form, setForm] = useState({
    name: user.name,
    fathername: user.fathername,
    email: user.email,
    phone: user.phone,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://127.0.0.1:8085/api/delete/${user._id}`);
      refreshTable();
      closeModal();
    } catch (error) {
      throw new Error(error);
    }
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="modalOverlay">
      <div className="modalBox">
        <h2>Delete Details</h2>

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
              delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Deleteuser;
