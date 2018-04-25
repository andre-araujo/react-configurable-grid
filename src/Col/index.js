import React from 'react';

import configureGrid, { medias, gridStarted } from '../config';

function Col(props) {
  const classes = [
    'rcg-col',
    props.className
  ];

  if (!gridStarted) configureGrid();

  const newProps = Object.assign({}, props);

  for (const key of medias) {
    if (props[key]) {
      classes.push(`rcg-col-${key}-${props[key]}`);
      delete newProps[key];
    }
  }

  delete newProps.component;

  return (
    React.createElement(props.component, Object.assign({}, newProps, { className: classes.join(" ") }), props.children)
  );
}

Row.defaultProps = {
  component: 'div',
  className: null
};

export default Col;
