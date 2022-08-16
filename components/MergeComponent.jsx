import React, { Fragment } from "react";
import HeaderContent from "./HeaderContent";
import CardFoods from "./CardFoods";
import FooterBy from "./Footer";

const MergeComponent = ({ dataRawProduct }) => {
  return (
    <Fragment>
      <section className="container mx-auto mb-20">
        <HeaderContent />
      </section>

      <section className="container md:px-0 lg:px-16 2xl:px-20 mx-auto">
        <CardFoods dataRawProduct={dataRawProduct} />
      </section>

      <FooterBy />
    </Fragment>
  );
};

export default MergeComponent;
