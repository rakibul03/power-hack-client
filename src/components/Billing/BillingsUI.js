import React from "react";

const BillingsUI = ({ bill, setUpdateBill }) => {
  const { email, name, payable, phone } = bill;
  return (
    <tr>
      <td>Cy Ganderton</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{payable}</td>
      <td className="space-x-2 divide-x-4 divide-gray-500">
        <label
          htmlFor="edit-bill-modal"
          className="cursor-pointer"
          onClick={() => setUpdateBill(bill)}
        >
          Edit
        </label>
        <label
          htmlFor="edit-bill-modal"
          className="cursor-pointer pl-2"
          onClick={() => setUpdateBill(bill)}
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default BillingsUI;
