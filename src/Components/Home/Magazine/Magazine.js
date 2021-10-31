import React from "react";

const Magazine = () => {
  return (
    <div>
      <div className="grid gird-cols-1 md:grid-cols-2 my-5 p-4 justify-center">
        <div className="p-8 w-2/3 lg:w-1/2 mx-auto">
          <img
            className=" w-full"
            src="https://i.ibb.co/SRWsvSC/tshirt-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="lg:text-left text-center my-auto">
          <h2 className="font-bold text-4xl my-4 mx-auto">
            Our Travel T-Shirt!
          </h2>
          <p className="text-xl my-4 lg:w-3/4">
            If you are a traveller then this might be very exciting for you.
            This is our travel t shirt. If you book any of our package we will
            provide this as free. But if you want to buy you can get it here.
            This is not only a t-shirt, this is something that make you more
            exciting to explore the world.
          </p>
          <button className="my-2 bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Magazine;
