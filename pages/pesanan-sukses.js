import Image from "next/image";
import React, { Fragment } from "react";
import FooterBy from "../components/Footer";
import NavbarPage from "../components/Navbar";

import { motion } from "framer-motion";
import Head from "next/head";

const SuccessOrders = () => {
  return (
    <Fragment>
      <Head>
        <title>Success</title>
        <meta name="description" content="This show All" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavbarPage />

      <motion.section
        className="max-w-7xl mx-auto"
        initial={{ translateX: "100%" }}
        animate={{ translateX: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ translateX: 0 }}
      >
        <div className="w-full flex flex-col items-center">
          <div className="w-1/2 md:w-fit mt-20 sm:mt-0">
            <Image
              src="/image/main/menunggu.png"
              width="360"
              height="360"
              layout="intrinsic"
            />
          </div>

          <article className="text-center">
            <h4 className="text-4xl font-semibold my-6">Success!!</h4>

            <p className="text-2xl font-medium">Pesanan Anda segera diproses</p>
            <p className="text-2xl font-medium">Selamat Menunggu</p>
          </article>
        </div>
      </motion.section>

      <FooterBy
        className="bg-gradient-to-tr from-cyan-400/25 to-slate-500/10 
      absolute left-0 right-0 bottom-0"
      />
    </Fragment>
  );
};

export default SuccessOrders;
