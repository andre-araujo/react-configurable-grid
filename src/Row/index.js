import React from 'react';

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

  delete newProps.component;

  return (
    React.createElement(props.component, Object.assign({}, newProps, { className: classes.join(" ") }), props.children)
  );
}

Row.defaultProps = {
  wrap: 'wrap',
  align: 'stretch',
  justify: 'flex-start',
  component: 'div',
  className: null
};

export default Row;
