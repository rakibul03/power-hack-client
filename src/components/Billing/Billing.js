import React, { useEffect, useState } from "react";

import EditBillModal from "../Modal/EditBillModal";
import AddNewBill from "./AddNewBill";
import BillingsUI from "./BillingsUI";

const Billing = () => {
  const [updateBill, setUpdateBill] = useState(null);
  const [bills, setBills] = useState([]);

  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);

  const size = 10;
  const pages = Math.ceil(count / size);
  console.log(pages);

  useEffect(() => {
    fetch(`http://localhost:5000/billing-list?page=${page}&size=${size}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBills(data.result);
        setCount(data.count);
      });
  }, [page, size]);

  return (
    <div>
      <AddNewBill />
      <div className="overflow-x-auto px-6">
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
            {bills.map((bill) => (
              <BillingsUI
                key={bill._id}
                bill={bill}
                setUpdateBill={setUpdateBill}
              />
            ))}
          </tbody>
        </table>
        <div className="btn-group flex justify-center mt-4">
          {[...Array(pages).keys()].map((number) => (
            <button
              key={number}
              className={
                page === number ? "btn-active px-3 rounded" : "btn btn-sm"
              }
              onClick={() => setPage(number)}
            >
              {number + 1}
            </button>
          ))}
        </div>

        {updateBill && <EditBillModal updateBill={updateBill} />}
      </div>
    </div>
  );
};

export default Billing;
