import React from 'react';

type ButtonProps = {
  text: string;
  className?: string;
}

const Button = ({ text, className }: ButtonProps) => {
  return (
    <button className={`relative inline-flex items-center px-6 py-3 font-semibold text-white bg-purple rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none shadow-lg hover:bg-purple-600 transition duration-300 ease-in-out group ${className}`}>
      <span className="relative">{text}</span>
    </button>
  );
};

export default Button;
