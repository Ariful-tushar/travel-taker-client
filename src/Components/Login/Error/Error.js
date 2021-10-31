import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="my-5 p-8">
      <h2 className="mt-8 text-4xl font-bold">
        Something wrong! Please try again after sometimg.
      </h2>
      <Link to={"/login"}>
        <button className="my-5 p-2 rounded-lg bg-green-500 hover:bg-green-900 text-white font-bold">
          Go To Login
        </button>
      </Link>
    </div>
  );
};

export default Error;
