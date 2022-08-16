import React from "react";

const FooterBy = ({ ...props }) => {
  return (
    <footer className={`${props.className}`}>
      <div className="p-7 text-center mt-4">
        <span className="text-3xl  font-normal">2022 Copyright Mr.Fal</span>
      </div>
    </footer>
  );
};

export default FooterBy;
