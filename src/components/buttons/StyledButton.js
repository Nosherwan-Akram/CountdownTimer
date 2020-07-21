import React from 'react';

const StyledButton = ({ children, activeIndex, indexUpdater, value }) => {
  return (
    <button
      className={`btn rounded-0 border border-dark mx-2  ${
        activeIndex === value ? 'bg-secondary text-white' : 'bg-light text-dark'
      }`}
      style={{ width: '25%' }}
      onClick={() => indexUpdater(value)}
    >
      {children}
    </button>
  );
};

export default StyledButton;
