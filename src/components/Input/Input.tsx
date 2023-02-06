import React from "react";

const Input = function (props: any) {
  const fileClasses = 'file:mr-4 place file:py-2 file:px-4 file:border-0 file:dark:bg-gray-700 cursor-pointer file:rounded-l-md file:border-0 file:font-base file:cursor-pointer file:dark:text-white'
  return (
    <input 
      ref={props.ref}
      id={props.id}
      name={props.name}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      // autoFocus={props.autofocus}
      required={props.required}
      disabled={props.disabled}
      accept={props.accept}
      placeholder={props.placeholder}
      className={`${props.className || ''} block w-full ${props.type == 'file' ? fileClasses : 'p-2'} mb-6 transition ease-in-out rounded-md dark:bg-gray-800 border dark:border-gray-700 focus:outline-none focus:ring focus:border-sky-500`}
      />
  );
}

export default Input
