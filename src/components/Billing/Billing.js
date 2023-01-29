import React from "react";
import Modal from "../Modal/Modal";

const Billing = () => {
  return (
    <div>
      <h1>This is billing</h1>
      <label htmlFor="my-modal" className="btn">
        open modal
      </label>
      <Modal />
    </div>
  );
};

export default Billing;
