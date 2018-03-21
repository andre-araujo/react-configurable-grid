import React from 'react';
import { oneOfType, number, string, node } from "prop-types";

import gerenateColStyles from "./styles";
import { appendStyles } from '../utils/styleUtils';

function Col({ xs, sm, md, lg, xl, className, children, ...props }) {
  const classes = [
    'rcg-col',
    className
  ];

  if (xs) {
    classes.push(`rcg-col-xs-${xs}`);
  }
  if (sm) {
    classes.push(`rcg-col-sm-${sm}`);
  }
  if (md) {
    classes.push(`rcg-col-md-${md}`);
  }
  if (lg) {
    classes.push(`rcg-col-lg-${lg}`);
  }
  if (xl) {
    classes.push(`rcg-col-lg-${xl}`);
  }

  appendStyles('column', gerenateColStyles());

  return (
    <div className={classes.join(" ")} {...props}>
      {children}
    </div>
  );
}

Col.defaultProps = {
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
  className: null
};

Col.propTypes = {
  xs: oneOfType([number, string]),
  sm: oneOfType([number, string]),
  md: oneOfType([number, string]),
  lg: oneOfType([number, string]),
  xl: oneOfType([number, string]),
  className: string,
  children: node.isRequired
};

export default Col;
