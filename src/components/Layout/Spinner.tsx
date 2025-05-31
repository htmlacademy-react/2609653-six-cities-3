import React from 'react';
import './Spinner.css';

const Spinner: React.FC = () => (
  <div className='spinner' data-testid="spinner">
    <svg
      width='30px'
      height='30px'
      viewBox='0 0 66 66'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        fill='none'
        strokeWidth='6'
        strokeLinecap='round'
        cx='33'
        cy='33'
        r='30'
      />
    </svg>
  </div>
);

export default Spinner;
