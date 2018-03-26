import React from 'react';

import gerenateColStyles from "./styles";
import { appendStyles } from '../utils/styleUtils';
import { medias } from '../config';

export default function Col(props) {
  const classes = [
    'rcg-col',
    props.className
  ];

  const newProps = Object.assign({}, props);

  for (const key of medias) {
    if (props[key]) {
      classes.push(`rcg-col-${key}-${props[key]}`);
      delete newProps[key];
    }
  }

  appendStyles('column', gerenateColStyles);

  return (
    React.createElement("div", Object.assign({}, newProps, { className: classes.join(" ") }), props.children)
  );
}
