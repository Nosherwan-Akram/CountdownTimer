import React from 'react';
import { StyledButton } from 'components';

const GroupedButtons = ({ activeSpeed, speedUpdater }) => {
  return (
    <div className='d-flex justify-content-center my-4'>
      <StyledButton
        activeIndex={activeSpeed}
        indexUpdater={speedUpdater}
        value={1000}
      >
        1X
      </StyledButton>
      <StyledButton
        activeIndex={activeSpeed}
        indexUpdater={speedUpdater}
        value={750}
      >
        1.5X
      </StyledButton>
      <StyledButton
        activeIndex={activeSpeed}
        indexUpdater={speedUpdater}
        value={500}
      >
        2X
      </StyledButton>
    </div>
  );
};

export default GroupedButtons;
