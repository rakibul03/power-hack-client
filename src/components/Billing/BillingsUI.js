import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const BillingsUI = ({ bill, setUpdateBill, handleDelete }) => {
  const { loading } = useContext(AuthContext);
  const { _id, email, name, payable, phone } = bill;

  return (
    <tr>
      <td>{loading ? "Generating token..." : _id}</td>
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
          className="cursor-pointer pl-2"
          onClick={() => handleDelete(_id)}
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default BillingsUI;
