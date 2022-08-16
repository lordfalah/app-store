import Head from "next/head";
import { Fragment } from "react";
import CardFoods from "../components/CardFoods";
import FooterBy from "../components/Footer";
import HeaderContent from "../components/HeaderContent";
import NavbarPage from "../components/Navbar";
import api from "../dataApi/api";

import { motion } from "framer-motion";

export const getStaticProps = async () => {
  const response = await api.get("/products");

  return {
    props: {
      dataRawProduct: response.data,
    },
  };
};

export default function Home({ dataRawProduct }) {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
        <meta name="description" content="This show All" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavbarPage />

      <motion.div
        initial={{ translateX: "100%" }}
        animate={{ translateX: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ translateX: 0 }}
      >
        <section className="container mx-auto mb-20">
          <HeaderContent />
        </section>

        <section className="container mx-auto max-w-7xl">
          <CardFoods dataRawProduct={dataRawProduct} />
        </section>

        <FooterBy />
      </motion.div>
    </Fragment>
  );
}
