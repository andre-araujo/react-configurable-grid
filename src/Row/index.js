import React from 'react';
import { oneOfType, number, string, node } from "prop-types";

import styles from "./styles";

function Row({ wrap, align, justify, mt, mb, className, children }) {
  return (
    <div className={className}>
      <style jsx>{styles}</style>
      <style jsx>{`
        div {
          flex-wrap: ${wrap};
          align-items: ${align};
          justify-content: ${justify};
          margin-top: ${mt};
          margin-bottom: ${mb};
        }
      `}</style>
      {children}
    </div>
  );
}

Row.defaultProps = {
  wrap: 'nowrap',
  align: 'stretch',
  justify: 'flex-start',
  mt: 0,
  mb: 0,
  className: null
};

Row.propTypes = {
  wrap: string,
  align: string,
  justify: string,
  className: string,
  mt: oneOfType([number, string]),
  mb: oneOfType([number, string]),
  children: node.isRequired
};

export default Row;
