import React from 'react';
import PropTypes from 'prop-types';
function Navbar(props) {
  return (
    <>
    <div className='flex flex-col' >
      <h1>name : {props.name}</h1>
      <h1>number :{props.number} </h1>
      <h1>about :{props.about} </h1>
    </div>
    </>
  );
}

Navbar.propTypes={
  name:PropTypes.string.isRequired,
  number:PropTypes.number,
  about:PropTypes.string  
}
Navbar.defaultProps = {
  name : "set name",
  number : "set number",
  about : "set about"
}

export default Navbar;
