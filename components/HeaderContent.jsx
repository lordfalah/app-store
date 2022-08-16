import Image from "next/image";
import React from "react";
import ButtonCmp from "./ButtonCmp";

const HeaderContent = () => {
  return (
    <div>
      <div
        className="flex justify-between md:justify-center gap-0 sm:gap-5
      md:gap-10 items-center p-4"
      >
        <article className="w-full md:w-2/5">
          <h2 className="text-4xl font-bold">Delicious Food Menu</h2>
          <p className="text-4xl">In Your Gadget</p>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            expedita?
          </p>

          <ButtonCmp type="button" className="bg-green-400 mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-h-6 group-hover:fill-slate-50 transition-colors"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>

            <span className="transition-colors group-hover:text-white">
              Orders
            </span>
          </ButtonCmp>
        </article>

        <div className="hidden sm:block w-full md:w-2/5">
          <Image
            src="/image/main/eatTogether.svg"
            width="100"
            height="100"
            layout="responsive"
            alt="eat"
            priority
            placeholder="eat-together"
          />

          <div className="flex justify-end">
            <ButtonCmp type="button" className="bg-green-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-h-6 group-hover:fill-slate-50 transition-colors"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="transition-colors group-hover:text-white">
                Preivew All{" "}
              </span>
            </ButtonCmp>
          </div>
        </div>
      </div>

      <article className="mx-6 lg:px-16 2xl:px-20 mt-8 -mb-10">
        <h3 className="text-4xl 2xl:ml-16">
          Best <span className="font-semibold">Foods</span>
        </h3>
      </article>
    </div>
  );
};

export default HeaderContent;
