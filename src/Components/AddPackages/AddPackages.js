import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddPackages = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://intense-ravine-39620.herokuapp.com/packages", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Package Added Successfully!");
          reset(res);
        }
      });
  };
  return (
    <div>
      <h2 className="text-4xl font-bold my-5">Add A New Package</h2>
      <div className="border lg:py-32">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              className="my-5 bg-gray-100 w-1/2 p-5"
              type="text"
              placeholder="Package Name"
              required="true"
              {...register("name")}
            />
          </div>
          <div>
            <textarea
              className="my-5 bg-gray-100 w-1/2 p-5"
              type="text"
              required="true"
              placeholder="Description"
              {...register("description")}
            />
          </div>
          <div>
            <input
              className="my-5 bg-gray-100 w-1/2 p-5"
              type="url"
              required="true"
              placeholder="Image SRC"
              {...register("img")}
            />
          </div>

          <div>
            <input
              className="my-5 bg-gray-100 w-1/2 p-5"
              placeholder="Package Price"
              type="number"
              required="true"
              {...register("price")}
            />
          </div>
          <div>
            <input
              className="my-5 bg-gray-100 w-1/2 p-5"
              placeholder="Package Duration"
              type="text"
              required="true"
              {...register("duration")}
            />
          </div>
          <input
            className="font-bold text-white cursor-pointer border rounded-lg p-2 lg:p-4 hover:bg-blue-800 bg-blue-600"
            type="submit"
            value="Add new package"
          />
        </form>
      </div>
    </div>
  );
};

export default AddPackages;
