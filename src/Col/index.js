import React from 'react';
import { oneOfType, number, string, node } from "prop-types";

import styles, { colClasses } from "./styles";

function Col({ xs, sm, md, lg, xl, mt, mr, mb, ml, className, children }) {
  const classes = [
    className
  ];

  if (xs) {
    classes.push(`col-xs-${xs}`);
  }
  if (sm) {
    classes.push(`col-sm-${sm}`);
  }
  if (md) {
    classes.push(`col-md-${md}`);
  }
  if (lg) {
    classes.push(`col-lg-${lg}`);
  }
  if (xl) {
    classes.push(`col-lg-${xl}`);
  }

  return (
    <div className={classes.join(" ")}>
      <style jsx>{styles}</style>
      <style jsx>{`
        div {
          margin: ${mt} ${mr} ${mb} ${ml};
        }
      `}</style>
      <style jsx global>
        {colClasses}
      </style>
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
  mt: 0,
  mr: 0,
  mb: 0,
  ml: 0,
  className: null
};

Col.propTypes = {
  xs: oneOfType([number, string]),
  sm: oneOfType([number, string]),
  md: oneOfType([number, string]),
  lg: oneOfType([number, string]),
  xl: oneOfType([number, string]),
  mt: oneOfType([number, string]),
  mr: oneOfType([number, string]),
  mb: oneOfType([number, string]),
  ml: oneOfType([number, string]),
  className: string,
  children: node.isRequired
};

export default Col;
