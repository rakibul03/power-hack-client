import React from "react";
import AddBillModal from "../Modal/AddBillModal";

const AddNewBill = () => {
  return (
    <div className="mt-12 px-6">
      <div className="flex justify-between gap-10 items-center space-x-16 py-2 bg-gray-300 mb-6 px-8">
        <div className="flex gap-8">
          <h1>Billings</h1>

          <input
            type="text"
            placeholder="Search Bill"
            className="h-6 rounded input-bordered w-full max-w-xs pl-2 "
          />
        </div>
        <div>
          <label htmlFor="add-bill-modal" className="btn  btn-sm">
            Add New Bill
          </label>
        </div>
        <AddBillModal />
      </div>
    </div>
  );
};

export default AddNewBill;
