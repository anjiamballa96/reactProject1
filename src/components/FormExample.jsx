import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormExample = () => {
  const [name, setName] = useState("");
  const [userName, setUsername] = useState("");

  const notify = (e) => toast(e);

  const submit = (e) => {
    e.preventDefault();
    setUsername(name);
    notify(name ? "success" : "Enter the name");
  };
  return (
    <div>
      <h3>Hello, {userName}</h3>
      <div className="flex-row-center">
        <form onSubmit={submit}>
          <label>User name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            style={{ width: "15rem", padding: ".3rem" }}
          />
          <div style={{ marginTop: "10px" }}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default FormExample;
