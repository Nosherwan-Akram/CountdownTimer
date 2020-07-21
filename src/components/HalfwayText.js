import React from 'react';

const HalfwayText = (props) => {
  const { minute, second, startTime } = props;
  let text = (minute + second === 0)
             ? 'Times Up !'
             : ((startTime / 2) * 60 >= minute * 60 + second)
               ? 'More than halfway there !'
               : ''
  return <h6 className='text-center italic my-2 font-italic'>{text}</h6>;
};

export default HalfwayText;
