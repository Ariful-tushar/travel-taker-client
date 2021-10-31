import React from "react";
import axios from "axios";

const ManageOrder = ({ order }) => {
  const {
    _id,
    firstName,
    lastName,
    Email,
    name,
    status,
    duration,
    price,
    phone,
  } = order;
  const handleDeleteOrder = (id) => {
    const getConfirmation = window.confirm(
      "Are you sure to cancel this order?"
    );
    if (!getConfirmation) {
      return;
    }
    const url = `https://intense-ravine-39620.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Order cancelled");
        }
      });
  };

  const handleApprove = (id) => {
    const orderStatus = { status: "Approved" };
    const url = `https://intense-ravine-39620.herokuapp.com/orders/${id}`;
    axios.put(url, orderStatus).then((res) => console.log(res));
  };

  return (
    <div className="w-3/4 mx-auto">
      <div className="border rounded-lg p-2 text-left lg:w-3/4 mx-auto my-5 text-start">
        <h2>
          <span className="font-bold">Customer Name:</span> {firstName}{" "}
          {lastName}
        </h2>
        <h2>
          <span className="font-bold">Customer Email:</span> {Email}
        </h2>
        <h2>
          <span className="font-bold">Customer Phone:</span> {phone}
        </h2>
        <h2>
          <span className="font-bold">Package Name:</span> {name}
        </h2>
        <h4>
          <span className="font-bold">Duration: </span>
          {duration}
        </h4>
        <h4>
          <span className="font-bold">Price: </span> {price} TK
        </h4>
        <h4>
          <span className="font-bold">Order Status: </span>
          {status}
          {status === "pending" ? (
            <button
              onClick={() => handleApprove(_id)}
              className="ml-2 border p-2 bg-green-700 hover:bg-green-900 text-sm text-white font-bold rounded-lg"
            >
              Approve
            </button>
          ) : (
            <div></div>
          )}
        </h4>
        <button
          onClick={() => handleDeleteOrder(_id)}
          className="text-white font-bold bg-red-700 p-2 rounded-md my-1"
        >
          Delete This Order
        </button>
      </div>
    </div>
  );
};

export default ManageOrder;
