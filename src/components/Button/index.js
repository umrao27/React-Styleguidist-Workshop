import React, { useState, useEffect } from "react";
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import ButtonComp from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { green, purple } from '@material-ui/core/colors'
import PropTypes from "prop-types";

const propTypes = {
  /** Button color */
  color: PropTypes.string,
  /** Custom class */
  className: PropTypes.string,
  /** Button text */
  value: PropTypes.string,
  /** Button Type (material-ui) */
  variant: PropTypes.string,
   /** Button title */
   title: PropTypes.string
};
const defaultProps = {
  className:"",
  color: "primary",
  variant:"outlined",
  title:"Button",
  value:"Button"

};
const Button = ({ className, variant, color, value, title }) => {
return <ButtonComp 
          variant={variant} 
          color={color} 
          title={title}
          className={`myButton ` + className}>
          {value}
        </ButtonComp>
       
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;

