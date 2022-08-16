import Image from "next/image";
import React, { Fragment, useState } from "react";
import NavbarPage from "../../components/Navbar";
import ButtonCmp from "../../components/ButtonCmp";
import api from "../../dataApi/api";
import FooterBy from "../../components/Footer";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Navigate from "../../components/Navigate";
import { addKeranjang } from "../../features/dataSlice/dataKeranjang";

import { motion } from "framer-motion";
import Head from "next/head";

export const getStaticProps = async (context) => {
  const { fdDetails } = context.params;
  const response = await api.get(`/products/${fdDetails}`);

  return {
    props: {
      dataRaw: response.data,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await api.get("/products");
  const paths = response.data.map((data) => {
    return { params: { fdDetails: data.id.toString() } };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

const DetailsFoods = ({ dataRaw }) => {
  const [keterangan, setKeterangan] = useState("");
  const [jumlahPesan, setJumlahPesan] = useState(1);
  const dataDispatch = useDispatch();
  const router = useRouter();

  const orderSubmitData = async (e) => {
    e.preventDefault();

    if (parseInt(jumlahPesan) > 0) {
      await dataDispatch(
        addKeranjang({ jumlahPesan, keterangan, products: dataRaw })
      );
      alert("Success Orders");
      router.push("/keranjang");
    } else {
      alert("You must orders minimal 1");
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Details Foods</title>
        <meta name="description" content="This show Details Foods" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavbarPage />

      <motion.section
        className="container px-5 lg:px-16 2xl:px-20 mx-auto"
        initial={{ translateX: "100%" }}
        animate={{ translateX: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ translateX: 0 }}
      >
        <Navigate>Foods Orders</Navigate>

        <div className="flex flex-col md:flex-row md:gap-8 gap-14">
          <div className="w-1/2 mx-auto md:w-full">
            <Image
              src={`/image/assets/${dataRaw.gambar}`}
              layout="intrinsic"
              width="800"
              height="700"
              className="rounded-lg object-cover object-center
              shadow-slate-900"
              placeholder="blur"
              blurDataURL="blur"
            />
          </div>

          <div className="w-full">
            <div>
              <h1 className="text-3xl font-bold">{dataRaw.nama}</h1>
              <hr className="my-5 border-x-2 rounded-sm border-slate-300" />

              <h3 className="text-2xl font-normal">
                Harga <span className="font-semibold">Rp. {dataRaw.harga}</span>
              </h3>
            </div>

            <form className="w-full">
              <p className="text-xl my-5">Jumlah Pesan</p>
              <label htmlFor="jumlah">
                <input
                  required
                  value={jumlahPesan <= 0 ? (jumlahPesan = 0) : jumlahPesan}
                  onChange={(e) => setJumlahPesan(e.target.value)}
                  type="number"
                  id="jumlah"
                  placeholder="Jumlah Pesanan"
                  className="border-none p-2 ring-4 rounded-sm 
                  focus:ring-red-300 outline-none w-full"
                />
              </label>

              <p className="text-xl my-5">Keterangan</p>
              <label htmlFor="Keterangan">
                <input
                  required
                  value={keterangan}
                  onChange={(e) => setKeterangan(e.target.value)}
                  type="text"
                  id="Keterangan"
                  placeholder="Keterangan Pesanan"
                  className="border-none p-2 ring-4 rounded-sm 
                  focus:ring-red-300 outline-none w-full"
                />
              </label>

              <div className="mt-6">
                <ButtonCmp
                  type="submit"
                  className="bg-green-400"
                  onClick={orderSubmitData}
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
        </div>
      </motion.section>

      <FooterBy />
    </Fragment>
  );
};

export default DetailsFoods;
