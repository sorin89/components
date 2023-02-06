import React from "react";

const Button = function (props: any) {
  const main = 'bg-sky-500 text-white border-b-2 border-sky-600'
  const danger = 'border-2 bg-red-100 border-red-500 text-red-700 hover:bg-red-500 hover:text-white dark:bg-transparent dark:text-red-500'
  const secondary = 'border-2 bg-white border-gray-200 text-black dark:border-gray-500 dark:bg-transparent dark:text-white'

  return (
    <button onClick={props.onClick} className={`transition-all duration-100 shadow-lg active:scale-95 ${props.className} h-10 px-4 rounded-lg ${props.danger && danger} ${props.secondary && secondary} ${!props.secondary && !props.danger && main}`} disabled={props.loading}>
      {props.loading ? 
        <svg className="animate-spin -ml-1 h-5 w-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      :
        <span>{props.children}</span>
      }
    </button>
  );
}

export default Button;