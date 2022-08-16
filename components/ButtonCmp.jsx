import React, { Fragment } from "react";

const ButtonCmp = ({ children, ...props }) => {
  return (
    <Fragment>
      <button
        {...props}
        type={`${props.type}`}
        className={`px-5 py-3 ${props.className} rounded-md group
        text-xl flex font-medium justify-center  gap-2
        transition-shadow hover:shadow-slate-500 hover:shadow-md`}
      >
        {children}
      </button>
    </Fragment>
  );
};

export default ButtonCmp;
