import React, { Fragment } from "react";

const TableList = ({ children }) => {
  return (
    <Fragment>
      <th
        scope="col"
        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
      >
        {children}
      </th>
    </Fragment>
  );
};

export default TableList;
