import React from 'react';
import { oneOfType, number, string, node } from "prop-types";

import gerenateRowStyles from "./styles";
import { appendStyles } from '../utils/styleUtils';

function Row({ wrap, align, justify, className, children, ...props }) {
  const classes = [
    'rcg-row',
    className
  ];

  if (wrap) {
    classes.push(`rcg-row-wrap--${wrap}`);
  }
  if (align) {
    classes.push(`rcg-row-align--${align}`);
  }
  if (justify) {
    classes.push(`rcg-row-justify--${justify}`);
  }

  appendStyles('row', gerenateRowStyles());

  return (
    <div className={classes.join(" ")} {...props}>
      {children}
    </div>
  );
}

Row.defaultProps = {
  wrap: 'nowrap',
  align: 'stretch',
  justify: 'flex-start',
  className: null
};

Row.propTypes = {
  wrap: string,
  align: string,
  justify: string,
  className: string,
  children: node.isRequired
};

export default Row;
