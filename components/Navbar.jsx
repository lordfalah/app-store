import Link from "next/link";
import React, { Fragment, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDataKeranjang,
  keranjangSelector,
} from "../features/dataSlice/dataKeranjang";

import { AnimatePresence } from "framer-motion";

const NavbarPage = () => {
  const totalFoodsKeranjang = useSelector(keranjangSelector.selectTotal);
  const dataDispatch = useDispatch();
  const spanChild1 = useRef(null);
  const spanChild2 = useRef(null);
  const spanChild3 = useRef(null);
  const navLinkMob = useRef(null);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      dataDispatch(getDataKeranjang());
    }

    return () => (mounted = false);
  }, [dataDispatch]);

  const handleClickNav = () => {
    spanChild1.current.classList.toggle("active-humburger");
    spanChild2.current.classList.toggle("active-humburger");
    spanChild3.current.classList.toggle("active-humburger");
    navLinkMob.current.classList.toggle("hidden");
  };

  return (
    <Fragment>
      <AnimatePresence>
        <nav>
          <ul
            className="flex justify-between flex-row-reverse lg:flex-row p-5 
        px-5 md:px-14"
          >
            <article className="gap-5 hidden lg:flex font-normal text-xl">
              <li>Kuliner</li>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/foods">
                  <a>Foods</a>
                </Link>
              </li>
            </article>

            <div className="relative">
              <button
                type="button"
                className="block lg:hidden parent-humburger"
                onClick={handleClickNav}
              >
                <span
                  ref={spanChild1}
                  className="humburger-line origin-top-left"
                ></span>

                <span ref={spanChild2} className="humburger-line"></span>

                <span
                  ref={spanChild3}
                  className="humburger-line origin-bottom-left"
                ></span>
              </button>

              <div
                className="bg-slate-200 w-72 absolute right-10 top-11
            z-10 rounded-md hidden lg:hidden shadow-md"
                ref={navLinkMob}
              >
                <article
                  className="font-normal p-7 text-xl flex 
              flex-col-reverse divide-y divide-y-reverse divide-cyan-700 
              "
                >
                  <li
                    className="hover:bg-slate-500 transition duration-150 
                hover:text-white py-1 pl-1 ease-in-out hover:rounded-md"
                  >
                    Kuliner
                  </li>
                  <li
                    className="hover:bg-slate-500 transition duration-150 
                hover:text-white py-1 pl-1 ease-in-out hover:rounded-md"
                  >
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li
                    className="hover:bg-slate-500 transition duration-150 
                hover:text-white py-1 pl-1 ease-in-out hover:rounded-md"
                  >
                    <Link href="/foods">
                      <a>Foods</a>
                    </Link>
                  </li>
                </article>
              </div>
            </div>

            <article
              className="flex gap-2 font-normal text-xl 
        justify-end items-center"
            >
              <li>
                <Link href="/keranjang">
                  <a>Keranjang</a>
                </Link>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </li>
              <li>
                <div className="bg-green-500 rounded-md">
                  <span className="text-white p-2 text-xl">
                    {totalFoodsKeranjang}
                  </span>
                </div>
              </li>
            </article>
          </ul>
        </nav>
      </AnimatePresence>
    </Fragment>
  );
};

export default NavbarPage;
