import React from "react";
import { toast } from "react-toastify";

const EditBillModal = ({ updateBill, setUpdateBill, refresh, setRefresh }) => {
  const { _id, name, email, payable, phone } = updateBill;

  const handleUpdate = (e) => {
    e.preventDefault();

    const fullName = e.target.billerName.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const payable = e.target.payAmount.value;

    const updateBilling = {
      name: fullName,
      email: email,
      phone: phone,
      payable: payable,
    };

    fetch(`https://projects-ph-server.vercel.app/update-billing?id=${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ updateBilling }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setUpdateBill(null);
          toast.success("Billing update successfully");
          setRefresh(!refresh);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="edit-bill-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="edit-bill-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleUpdate} className="grid dris-cols-1 gap-3">
            <input
              placeholder="Full Name"
              name="billerName"
              defaultValue={name}
              type="text"
              className="input w-full input-bordered"
            />
            <input
              placeholder="Email"
              name="email"
              defaultValue={email}
              type="email"
              className="input w-full input-bordered"
            />
            <input
              placeholder="Phone"
              name="phone"
              defaultValue={phone}
              type="text"
              className="input w-full input-bordered"
            />
            <input
              placeholder="Payable Amount"
              name="payAmount"
              defaultValue={payable}
              type="text"
              className="input w-full input-bordered"
            />

            <br />
            <input
              type="submit"
              value="Edit Bill"
              className="w-full btn btn-accent"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default EditBillModal;
