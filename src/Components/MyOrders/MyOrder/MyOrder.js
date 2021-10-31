import React, { useState } from "react";

const MyOrder = ({ order }) => {
  // const [orders, setOrders] = useState()
  const { name, description, duration, price, status, _id } = order;

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
  return (
    <div className="w-3/4 mx-auto">
      <div className="border rounded-lg p-2 text-left lg:w-3/4 mx-auto my-5 text-start">
        <h2>
          <span className="font-bold">Package Name:</span> {name}
        </h2>
        <p className="my-1">
          <span className="font-bold">About the spot: </span>
          {description}
        </p>
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
        </h4>
        <button
          onClick={() => handleDeleteOrder(_id)}
          className="text-white font-bold bg-red-700 p-2 rounded-md my-1"
        >
          Cancel This Order
        </button>
      </div>
    </div>
  );
};

export default MyOrder;
