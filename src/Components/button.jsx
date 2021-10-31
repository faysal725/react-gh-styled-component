import React from 'react';
import classes from './button.module.css';

const button = props => <button className={classes.button} {...props}>{props.children}</button> 

export default button;