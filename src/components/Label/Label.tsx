import React from "react";

const Label = function (props:any) {
  return (
    <label htmlFor={props.htmlFor} className="block mb-2 text-sm font-bold text-gray-500 uppercase">
      {props.children}
    </label>
  );
}

export default Label