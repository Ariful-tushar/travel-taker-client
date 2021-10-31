import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./Package.css";

const Package = ({ pack }) => {
  const { _id, name, description, price, img, duration } = pack;
  console.log(_id);
  let history = useHistory();
  // const handleBook = () => {
  //   history.push(`/booking/${_id}`);
  // };
  return (
    <div>
      <div
        className="tt-cards shadow-md rounded-md overflow-hidden"
        style={{ width: "100%" }}
      >
        <div className="tt-pack-image">
          <img className="" src={img} alt="" />
        </div>

        <div className="mt-4 p-4">
          <h5 className="text-xl font-semibold mb-2">{name}</h5>

          <p className="mb-4">{description}</p>
          <h2 className="mb-4">Price: {price} TK</h2>
          <div>
            <div className="align-bottom">
              <Link to={`/booking/${_id}`}>
                <button
                  // onClick={handleBook}
                  className="
        bg-purple-500
        text-white
        active:bg-purple-600
        font-bold
        uppercase
        text-xs
        px-4
        py-2
        rounded
        shadow
        hover:shadow-md
        outline-none
        focus:outline-none
        mr-1
        mb-1
        ease-linear
        transition-all
        duration-150
      "
                  type="button"
                >
                  Book This Package
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
