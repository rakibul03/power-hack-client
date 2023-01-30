import React, { useState } from "react";
import { toast } from "react-toastify";

const AddBillModal = ({ setRefresh, refresh }) => {
  const handleBilling = (e) => {
    e.preventDefault();

    const fullName = e.target.billerName.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const payable = e.target.payAmount.value;
    const newBill = {
      name: fullName,
      email: email,
      phone: phone,
      payable: payable,
      date: new Date(),
    };

    fetch("https://projects-ph-server.vercel.app/add-billing", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBill),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setRefresh(!refresh);
          toast.success("Bill Added");
          e.target.reset();
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="add-bill-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="add-bill-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleBilling} className="grid grid-cols-1 gap-3">
            <input
              placeholder="Full Name"
              name="billerName"
              type="text"
              className="input w-full input-bordered"
            />
            <input
              placeholder="Email"
              name="email"
              type="email"
              className="input w-full input-bordered"
            />
            <input
              placeholder="Phone"
              name="phone"
              type="text"
              className="input w-full input-bordered"
            />
            <input
              placeholder="Payable Amount"
              name="payAmount"
              type="text"
              className="input w-full input-bordered"
            />

            <br />
            <input
              type="submit"
              value="Add New Bill"
              className="w-full btn btn-accent"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBillModal;
