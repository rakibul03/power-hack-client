import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import EditBillModal from "../Modal/EditBillModal";
import AddNewBill from "./AddNewBill";
import BillingsUI from "./BillingsUI";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";

const Billing = () => {
  const { setLoading } = useContext(AuthContext);

  const [updateBill, setUpdateBill] = useState(null);
  const [bills, setBills] = useState([]);

  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);

  const [refresh, setRefresh] = useState(false);

  const size = 10;
  const pages = Math.ceil(count / size);

  useEffect(() => {
    fetch(
      `https://projects-ph-server.vercel.app/billing-list?page=${page}&size=${size}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBills(data.result);
        setCount(data.count);
        setLoading(false);
      });
  }, [page, size, refresh, setLoading]);

  const handleDelete = (id) => {
    const agree = window.confirm("Are you sure, you want to cancel this order");
    if (agree) {
      fetch(`https://projects-ph-server.vercel.app/delete-billing/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success("Bill Deleted Successful");
            setRefresh(!refresh);
          }
        });
    }
  };
  return (
    <div>
      <AddNewBill setRefresh={setRefresh} refresh={refresh} />
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
                setRefresh={setRefresh}
                refresh={refresh}
                handleDelete={handleDelete}
                setUpdateBill={setUpdateBill}
              />
            ))}
          </tbody>
        </table>

        {updateBill && (
          <EditBillModal
            updateBill={updateBill}
            setUpdateBill={setUpdateBill}
            refresh={refresh}
            setRefresh={setRefresh}
          />
        )}

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
      </div>
    </div>
  );
};

export default Billing;
