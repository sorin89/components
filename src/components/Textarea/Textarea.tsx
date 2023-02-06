import React from "react";

const Textarea = function (props: any) {
  return (
    <textarea 
      ref={props.ref}
      id={props.id}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      autoFocus={props.autofocus}
      required={props.required}
      className="w-full p-3 h-24 text-sm leading-tight text-gray-700 border-2 rounded-lg appearance-none mb-4"
    />
  );
}

export default Textarea
