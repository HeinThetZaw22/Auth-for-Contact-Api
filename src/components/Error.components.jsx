import React from "react";
import {CiWarning} from "react-icons/ci";


const ErrorComponents = ({children}) => {
  return (
    <div className="flex gap-1 text-sm items-center shadow mb-3 bg-red-50  border px-4 py-2 rounded border-l-4  border-l-red-400">
      <CiWarning className=" text-red-400" />
      <h1 className=" text-red-400">{children}</h1>
    </div>
  );
};

export default ErrorComponents;
