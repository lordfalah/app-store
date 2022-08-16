import React, { Fragment } from "react";

const TableItems = ({ children, ...props }) => {
  return (
    <Fragment>
      <td
        className="py-4 px-6 text-sm font-medium  text-gray-900
      whitespace-nowrap dark:text-white"
      >
        {children}
      </td>
    </Fragment>
  );
};

export default TableItems;
