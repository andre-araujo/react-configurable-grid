import React from 'react';

import configureGrid, { medias, gridStarted } from '../config';

export default function Col(props) {
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

  return (
    React.createElement("div", Object.assign({}, newProps, { className: classes.join(" ") }), props.children)
  );
}
