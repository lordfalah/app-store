import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  allDataFoods,
  foodsSelector,
  searchDataFoods,
} from "../features/dataSlice/dataFoods";
import CardFoods from "./CardFoods";
import FooterBy from "./Footer";

const FoodsComponent = () => {
  const getDataFood = useSelector(foodsSelector.selectAll);
  const dataDispatch = useDispatch();
  const [text, setText] = useState("");

  const searchFoods = (value) => {
    dataDispatch(searchDataFoods(value));
    setText(value);
  };

  useEffect(() => {
    dataDispatch(allDataFoods());
  }, [dataDispatch]);

  return (
    <Fragment>
      <section className="container mx-auto md:px-0 lg:px-16 2xl:px-20 mt-8">
        <div>
          <article>
            <h2 className="text-3xl mx-5">
              List
              <span className="font-semibold"> Foods</span>
            </h2>
          </article>

          <div className="mt-6 max-w-2xl mx-5">
            <label htmlFor="search" id="search" className="w-11/12 relative">
              <input
                type="text"
                id="search"
                placeholder="search foods"
                className="w-full 
            border-none ring-4 outline-none rounded-md p-2
            focus:ring-red-300"
                onChange={(e) => searchFoods(e.target.value)}
                value={text}
              />

              <div className="absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-h-9 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </label>
          </div>
        </div>

        <div className="mt-16">
          <CardFoods dataRawProduct={getDataFood} />
        </div>
      </section>

      <FooterBy />
    </Fragment>
  );
};

export default FoodsComponent;
