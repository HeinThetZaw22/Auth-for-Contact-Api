import React from "react";

const ButtonComponents = ({style, children, ...rest}) => {
  return (
    <button {...rest} className={`border w-full text-white px-4 py-2 rounded-lg active:scale-90 transition-all hover:bg-blue-500 bg-blue-600  ${style}` }>
      {children}
    </button>
  );
};

export default ButtonComponents;
