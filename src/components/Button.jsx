import React from 'react';

function Button({ name, onClick, contactUs }) {
  return (
    <button
      className='outline-2 outline-white xs:text-[12px] s:text-[16px] text-white py-2 xs:px-3 border rounded-[24px] hover:text-[rgb(7,26,43)] hover:bg-[#CEFFCE] '
      onClick={() => {
        if (onClick) onClick();
        if (contactUs) contactUs();
      }}
    >
      {name}
    </button>
  );
}

export default Button;
