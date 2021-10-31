import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import MyOrder from "../MyOrder/MyOrder";
import "./MyOrders.css";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    axios
      .post("https://intense-ravine-39620.herokuapp.com/myorders", {
        Email: user.email,
      })
      .then((res) => res.data)
      .then((data) => setOrders(data));
  }, [orders]);

  if (orders.length === 0) {
    return (
      <div className="tt-no-orders border rounded-lg my-5 mx-auto w-2/3 flex items-center">
        <div className="mx-auto">
          <h2 className="text-center mx-auto text-4xl font-bold">
            You do not have any orders!
          </h2>
          <Link to={"/home"}>
            <button className="mt-5 text-white font-bold bg-blue-400 hover:bg-blue-800 p-2 rounded-lg">
              Go Home Page
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="w-3/4 mx-auto text-2xl font-bold my-4 text-center">
        Here are all of your Orders
      </h2>
      {orders.map((order) => (
        <MyOrder key={order._id} order={order}></MyOrder>
      ))}
    </div>
  );
};

export default MyOrders;
