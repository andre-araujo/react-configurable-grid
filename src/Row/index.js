import React from 'react';

import gerenateRowStyles from "./styles";
import { appendStyles } from '../utils/styleUtils';

const rowModifiers = [
  'wrap',
  'align',
  'justify'
]

function Row(props) {
  const classes = [
    'rcg-row',
    props.className
  ];

  const newProps = Object.assign({}, props);

  for (const key of rowModifiers) {
    if (props[key]) {
      classes.push(`rcg-row-${key}--${props[key]}`);
      delete newProps[key];
    }
  }

  appendStyles('row', gerenateRowStyles);

  return (
    React.createElement("div", Object.assign({}, newProps, { className: classes.join(" ") }), props.children)
  );
}

Row.defaultProps = {
  wrap: 'nowrap',
  align: 'stretch',
  justify: 'flex-start',
  className: null
};

export default Row;
