import Head from "next/head";
import React, { Fragment } from "react";
import KeranjangFoods from "../components/KeranjangFoods";

const Keranjang = () => {
  return (
    <Fragment>
      <Head>
        <title>Keranjang</title>
        <meta name="description" content="This show Keranjang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <KeranjangFoods />
    </Fragment>
  );
};

export default Keranjang;
