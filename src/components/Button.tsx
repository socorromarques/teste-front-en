import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button onClick={onClick} className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
      {children}
    </button>
  );
}

