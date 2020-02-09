// import React from 'react';
// import './button.scss';
// /**
//  * @author
//  * @function Button
//  **/

// const Button = ({ title }) => {
//   return <button className='button'>{title}</button>;
// };

// export default Button;



import React, { useState, useEffect } from "react";
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { green, purple } from '@material-ui/core/colors'

import className from 'classnames';
import PropTypes from "prop-types";

const propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  variant: PropTypes.string,
  type: PropTypes.string
};
const defaultProps = {
  color: "primary",
  variant:'outlined'
};
const ButtonComp = ({ className, type, variant, color, value, title }) => {
return <Button 
          variant={variant} 
          color={color} 
          title={title}
          type={type ? type : null}
          className={`myButton ` + className}>
          {value}
        </Button>
       
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default ButtonComp;

