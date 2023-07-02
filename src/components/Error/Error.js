import React from 'react';
import { NavLink } from 'react-router-dom';

function Error() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2 style={{ color: 'red' }}>Oops! We have encountered an error.</h2>
      <p style={{ fontSize: '18px', margin: '20px 0' }}>
        We apologize for the inconvenience. Please try again later.
      </p>
      <NavLink to='/home' style={{ color: 'red', fontSize: '16px' }}>
        Click here to go back to the Home page
      </NavLink>
    </div>
  );
  
}

export default Error;
