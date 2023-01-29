import React from "react";
import Modal from "../Modal/Modal";

const BillingsUI = () => {
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
          <label htmlFor="my-modal" className="btn  btn-sm">
            Add New Bill
          </label>
        </div>
        <Modal />
      </div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Billing ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Paid Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td className="space-x-2 divide-x-4 divide-gray-500">
                <span>Edit</span>
                <span className="pl-2">Delete</span>
              </td>
            </tr>
            <tr>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Zemlak, Daniel and Leannon</td>
              <td>United States</td>
              <td>12/5/2020</td>
              <td>Purple</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BillingsUI;
