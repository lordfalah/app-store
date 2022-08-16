import React, { Fragment } from "react";
import FoodsComponent from "../components/FoodsComponent";
import NavbarPage from "../components/Navbar";

import { motion } from "framer-motion";
import Head from "next/head";

const FoodsCmp = () => {
  return (
    <Fragment>
      <Head>
        <title>Foods</title>
        <meta name="description" content="This show Foods" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavbarPage />

      <motion.div
        initial={{ translateX: "100%" }}
        animate={{ translateX: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ translateX: 0 }}
      >
        <FoodsComponent />
      </motion.div>
    </Fragment>
  );
};

export default FoodsCmp;
