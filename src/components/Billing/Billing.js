import React, { useEffect, useState } from "react";

import Modal from "../Modal/Modal";
import BillingsUI from "./BillingsUI";

const Billing = () => {
  const [bill, setBill] = useState([]);
  console.log(bill);

  useEffect(() => {
    fetch("http://localhost:5000/billing-list", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => setBill(data));
  }, []);
  return (
    <div>
      <BillingsUI />
    </div>
  );
};

export default Billing;
