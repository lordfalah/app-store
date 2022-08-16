import Image from "next/image";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteKeranjangFood,
  keranjangSelector,
} from "../features/dataSlice/dataKeranjang";
import TableItems from "./tableCmp/TableItems";
import TableList from "./tableCmp/TableList";

const TableLayout = () => {
  const dataFoods = useSelector(keranjangSelector.selectAll);
  const dataDispatch = useDispatch();
  let temp = [];

  const handleDelete = (id) => {
    dataDispatch(deleteKeranjangFood(id));
    alert("Success Delete");
  };

  return (
    <Fragment>
      <div className="mx-auto overflow-hidden overflow-x-scroll xl:overflow-visible">
        <div className="flex flex-col ">
          <div className="shadow-md sm:rounded-lg ">
            <div className="inline-block min-w-full align-middle ">
              <div className="">
                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr className="text-center">
                      <th scope="col" className="p-4">
                        <div className="flex items-center">#</div>
                      </th>

                      <TableList>IMAGE</TableList>
                      <TableList>FOODS</TableList>
                      <TableList>DESCRIPTION</TableList>
                      <TableList>AMOUNT</TableList>
                      <TableList>PRICE</TableList>
                      <TableList>TOTAL HARGA</TableList>
                      <TableList>DELETE</TableList>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    {dataFoods.map((data, idx) => {
                      let jumlahHarga =
                        data.products.harga * parseInt(data.jumlahPesan);
                      temp.push(jumlahHarga);

                      return (
                        <tr
                          key={data.id}
                          className="hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <TableItems>{idx + 1}</TableItems>
                          <TableItems>
                            <div className="w-32 sm:w-36 md:w-40 lg:w-52 xl:w-56 2xl:w-full">
                              <Image
                                width="300"
                                height="200"
                                layout="intrinsic"
                                src={`/image/assets/${data.products.gambar}`}
                                className="rounded-md"
                              />
                            </div>
                          </TableItems>
                          <TableItems>{data.products.nama}</TableItems>
                          <TableItems>{data.keterangan}</TableItems>
                          <TableItems>{data.jumlahPesan}</TableItems>
                          <TableItems>
                            {"Rp. " + data.products.harga}
                          </TableItems>
                          <TableItems>
                            {"Rp. " + jumlahHarga.toString()}
                          </TableItems>

                          <TableItems>
                            <button
                              type="button"
                              onClick={() => handleDelete(data.id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </button>
                          </TableItems>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <p className="p-4 text-lg font-semibold">
          Total Harga :{" "}
          <span className="ml-5">
            {temp.length === 0
              ? 0
              : "Rp. " + temp.reduce((arr, acc) => arr + acc).toString()}
          </span>
        </p>
      </div>
    </Fragment>
  );
};

export default TableLayout;
