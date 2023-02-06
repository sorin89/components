import React from "react";

const Message = function (props: any) {
  return (
    <>
      {props.text &&
        <div className={`
          ${props.success && 'bg-green-200 border-green-500 dark:bg-green-500 dark:border-green-300'} 
          ${props.error && 'bg-red-200 border-red-400 dark:bg-red-500 dark:border-red-300'} 
          rounded-lg p-3 py-5 mb-10 border-b-2 font-semibold shadow`}>
            {props.text}
        </div>
      }
    </>
  );
}

export default Message

