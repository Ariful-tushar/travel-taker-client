import React from "react";

const Gallery = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold mx-auto">Gallery</h2>
      <div className="p-8 lg:m-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img
            className="rounded"
            src="https://i.ibb.co/sR5jt00/adam-kool-nd-N00-Kmb-J1c-unsplash.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded"
            src="https://i.ibb.co/jRt9DS7/cora-leach-YFs2f-ACDMR8-unsplash.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded"
            src="https://i.ibb.co/6wmZ1ND/david-marcu-78-A265w-Pi-O4-unsplash.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded"
            src="https://i.ibb.co/7nFZxCD/kunal-shinde-f0-YLss50-Bs-unsplash.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded"
            src="https://i.ibb.co/PWQ5t14/sebastian-unrau-v4e3-JI7-DDHI-unsplash.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded"
            src="https://i.ibb.co/3mvPdc8/wil-stewart-p-HANr-Cpb-YM-unsplash.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
