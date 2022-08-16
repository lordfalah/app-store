import React, { Fragment } from "react";
import FooterBy from "./Footer";
import NavbarPage from "./Navbar";
import Navigate from "./Navigate";
import TableLayout from "./TableLayout";
import FormKeranjang from "./tableCmp/FormKeranjang";
import { motion } from "framer-motion";

const KeranjangFoods = () => {
  return (
    <Fragment>
      <NavbarPage />

      <motion.section
        className="container md:px-0 lg:px-16 2xl:px-20 
      mx-auto"
        initial={{ translateX: "100%" }}
        animate={{ translateX: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ translateX: 0 }}
      >
        <Navigate>Keranjang</Navigate>

        <div className="px-5">
          <TableLayout />
          <FormKeranjang />
        </div>
      </motion.section>

      <FooterBy />
    </Fragment>
  );
};

export default KeranjangFoods;
