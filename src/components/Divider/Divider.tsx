import React from "react";

const Divider = function (props: any) {
  return (
    <div className="relative flex py-7 items-center cursor-default">
      <div className="flex-grow border-t border-gray-200 dark:border-gray-600"></div>
      {props.text &&
        <span className="flex-shrink mx-4 text-gray-400 text-sm">{props.text}</span>
      }
      <div className="flex-grow border-t border-gray-200 dark:border-gray-600"></div>
    </div>
  );
}

export default Divider
