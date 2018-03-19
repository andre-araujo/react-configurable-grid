import React from 'react';
import { oneOfType, number, string, node } from "prop-types";

import styles, { colClasses } from "./styles";

function Col({ xs, sm, md, lg, mt, mr, mb, ml, className, children }) {
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
  mt: 0,
  mr: 0,
  mb: 0,
  ml: 0,
  className: null
};

const numberOrString = oneOfType([number, string]);

Col.propTypes = {
  xs: numberOrString,
  sm: numberOrString,
  md: numberOrString,
  lg: numberOrString,
  mt: numberOrString,
  mr: numberOrString,
  mb: numberOrString,
  ml: numberOrString,
  className: string,
  children: node.isRequired
};

export default Col;
