import React from "react";
import ButtonCmp from "./ButtonCmp";
import DataEmpty from "./DataEmpty";
import Link from "next/link";

const CardFoods = ({ dataRawProduct }) => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
      px-4 gap-8 md:gap-4 2xl:grid-cols-2"
    >
      {dataRawProduct.length === 0 || dataRawProduct === undefined ? (
        <DataEmpty />
      ) : (
        dataRawProduct.map((data) => {
          return (
            <div
              key={data.id}
              className="border-4 rounded-md flex flex-col sm:flex-row
            mb-4 md:mb-3  md:flex-col 2xl:flex-row"
            >
              <div
                className="w-full scale-y-110 group overflow-hidden rounded-md
              transition-transform hover:scale-100"
              >
                <div
                  className="bg-cover bg-center bg-no-repeat w-full h-56
                  scale-125 transition-transform group-hover:scale-100"
                  style={{
                    backgroundImage: `url(/image/assets/${data.gambar})`,
                  }}
                ></div>
              </div>

              <div className="text-black w-full px-4 py-4 pr-3">
                <div className="flex justify-between items-center">
                  <h4 className="font-normal text-2xl">{data.nama}</h4>
                  <div className="rounded-full bg-cyan-200 h-1/2 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <article>
                  <span className="font-semibold text-2xl">
                    Price {data.harga}
                  </span>
                  <hr className="border-t-slate-200 w-1/2 mx-auto my-4" />
                </article>

                <div
                  className="flex justify-start gap-8 sm:justify-between 
                  items-center sm:gap-0 lg:justify-start lg:gap-8 xl:gap-0
                  xl:justify-between"
                >
                  <Link href={`/details/${data.id}`}>
                    <a>
                      <ButtonCmp type="button" className="bg-blue-400">
                        <span className="transition-colors group-hover:text-white">
                          Buy Now
                        </span>
                      </ButtonCmp>
                    </a>
                  </Link>

                  <ButtonCmp type="button" className="bg-blue-400">
                    <span className="transition-colors group-hover:text-white">
                      Add to Bag
                    </span>
                  </ButtonCmp>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default CardFoods;
