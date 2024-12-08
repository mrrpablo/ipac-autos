import React from 'react';
import Spinner from './../images/spinner.gif';
function Loader() {
  return (
    <div>
      <img src={Spinner} alt='spinner' />
    </div>
  );
}

export default Loader;
