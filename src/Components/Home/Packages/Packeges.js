import React, { useEffect, useState } from "react";
import Package from "../Package/Package";

const Packeges = () => {
  const [packs, setPacks] = useState([]);

  useEffect(() => {
    fetch("https://intense-ravine-39620.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => setPacks(data));
  }, []);

  return (
    <div id="packages" className="mt-16">
      <h2 className="text-4xl max-auto font-bold my-5">
        All Our Exciting Packages
      </h2>
      <div className="p-8 lg:m-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {packs.map((pack) => (
          <Package key={pack.name} pack={pack}></Package>
        ))}
      </div>
    </div>
  );
};

export default Packeges;
