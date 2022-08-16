import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAllKeranjang,
  keranjangSelector,
} from "../../features/dataSlice/dataKeranjang";
import ButtonCmp from "../ButtonCmp";

const FormKeranjang = () => {
  const [name, setName] = useState("");
  const [meja, setMeja] = useState("");
  const router = useRouter();
  const dataDispatch = useDispatch();
  const getMetFood = useSelector(keranjangSelector.selectIds);

  const handleSubmitOrder = async (e) => {
    e.preventDefault();

    if (getMetFood.length > 0) {
      await dataDispatch(deleteAllKeranjang(getMetFood));
      alert("succes pay orders");
      router.push("/pesanan-sukses");
    } else {
      alert("Data is Empty :(");
      router.push("/foods");
    }
  };

  return (
    <div className="flex px-5 md:justify-end mt-4">
      <form className="text-lg font-medium w-full md:w-1/2">
        <h3 className="my-6">Name : </h3>
        <label htmlFor="search" id="search" className="w-full">
          <input
            required
            type="text"
            id="search"
            placeholder="name"
            className="w-full 
          border-none ring-4 outline-none rounded-sm p-2
        focus:ring-red-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <h3 className="my-6">Nomor Meja : </h3>
        <label htmlFor="search" id="search" className="w-full">
          <input
            required
            type="number"
            id="search"
            placeholder="no"
            className="w-full 
          border-none ring-4 outline-none rounded-sm p-2
        focus:ring-red-300"
            value={meja}
            onChange={(e) => setMeja(e.target.value)}
          />
        </label>

        <div className="flex justify-end">
          <ButtonCmp
            type="submit"
            className="bg-green-400 mt-5"
            onClick={handleSubmitOrder}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 group-hover:fill-slate-50 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>

            <span className="transition-colors group-hover:text-white">
              Orders
            </span>
          </ButtonCmp>
        </div>
      </form>
    </div>
  );
};

export default FormKeranjang;
