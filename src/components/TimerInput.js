import React from 'react';

const TimerInput = ({ onChange, onStart }) => {
  return (
    <div className='d-flex align-items-center my-4'>
      <div className='mx-1 font-weight-bold'>Countdown: </div>
      <input
        type='text'
        onChange={onChange}
        className='form-control mx-1 rounded-0'
        placeholder='(Min)'
      />
      <button className='btn btn-success mx-1 rounded-0' onClick={onStart}>
        Start
      </button>
    </div>
  );
};

export default TimerInput;
