import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPauseCircle as faPause,
  faPlayCircle,
} from '@fortawesome/free-solid-svg-icons';

const PauseButton = ({ pause, pauseUpdater }) => {
  return (
    <>
      {pause ? (
        <FontAwesomeIcon
          icon={faPlayCircle}
          size='3x'
          className='cursor-pointer'
          onClick={() => {
            pauseUpdater(!pause);
          }}
        />
      ) : (
        <FontAwesomeIcon
          icon={faPause}
          size='3x'
          className='cursor-pointer'
          onClick={() => pauseUpdater(!pause)}
        />
      )}
    </>
  );
};

export default PauseButton;
