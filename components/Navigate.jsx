import React from "react";

const Navigate = ({ children }) => {
  return (
    <nav className="my-10">
      <ul className="text-xl flex gap-4">
        <li>Home /</li>
        <li>Foods /</li>
        <li className="font-semibold">{children}</li>
      </ul>
    </nav>
  );
};

export default Navigate;
