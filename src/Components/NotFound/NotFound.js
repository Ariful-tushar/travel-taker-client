import React from "react";
import notfound from "../../images/404.png";

const NotFound = () => {
  return (
    <div>
      <img className="w-2/3 lg:w-1/2 mx-auto" src={notfound} alt="" />
    </div>
  );
};

export default NotFound;
