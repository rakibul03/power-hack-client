import React from "react";

const EditBillModal = ({ updateBill }) => {
  const { name, email, payable, phone } = updateBill;
  console.log(updateBill);
  const handleBilling = (e) => {
    e.preventDefault();

    const fullName = e.target.billerName.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const payable = e.target.payAmount.value;
    console.log(fullName, email, phone, payable);
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
          <form onSubmit={handleBilling} className="grid dris-cols-1 gap-3">
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
