import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const Booking = () => {
  const { packageId } = useParams();
  const [pack, setPack] = useState({});
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const status = "pending";

  useEffect(() => {
    fetch(`https://intense-ravine-39620.herokuapp.com/packages/${packageId}`)
      .then((res) => res.json())
      .then((data) => setPack(data));
  }, []);

  const { name, price, duration, description, img } = pack;
  const history = useHistory();
  const onSubmit = (data) => {
    const fullData = { ...data, name, price, description, duration, status };

    axios
      .post("https://intense-ravine-39620.herokuapp.com/orders", fullData)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Successfully order placed!");
          history.push("/home");
        }
      });
  };

  return (
    <div className="my-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="w-3/4 mx-auto">
        <img className="w-full h-3/4 " src={img} alt="" />
        <div className="border-2 border-red-700 rounded-lg mt-5 mx-auto text-left p-4">
          <h2 className="mt-4">
            <span className="text-xl font-bold">Package Name:</span> {name}
          </h2>
          <p>
            <span className="text-xl font-bold">Details: </span>
            {description}
          </p>
          <h4>
            <span className="text-xl font-bold">Duration: </span>
            {duration}
          </h4>
          <h4>
            <span className="text-xl font-bold">Price: </span>
            {price} TK
          </h4>
        </div>
      </div>
      <div className="border mt-52 lg:mt-0 lg:py-32">
        <h2 className="w-1/2 mx-auto text-red-500 font-bold text-2xl text-left mb-4">
          Please Enter Your Details:
        </h2>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              className="my-5 bg-gray-200 rounded-lg w-1/2 p-5"
              type="email"
              placeholder="Email"
              value={user.email}
              {...register("Email")}
            />
          </div>
          <div>
            <input
              className="my-5 bg-gray-100 bg-gray-200 rounded-lg w-1/2 p-5"
              type="text"
              placeholder="First Name"
              {...register("firstName")}
            />
          </div>
          <div>
            <input
              className="my-5 bg-gray-100 bg-gray-200 rounded-lg w-1/2 p-5"
              type="text"
              placeholder="Last Name"
              {...register("lastName")}
            />
          </div>

          <div>
            <input
              className="my-5 bg-gray-100 bg-gray-200 rounded-lg w-1/2 p-5"
              placeholder="Mobile"
              type="number"
              {...register("phone")}
            />
          </div>
          <input
            className="font-bold text-white cursor-pointer border rounded-lg p-2 lg:p-4 hover:bg-blue-800 bg-blue-600"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Booking;
