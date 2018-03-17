import { string, node } from "prop-types";

import styles from "./styles";

function Row({ wrap, align, justify, className, children }) {
  return (
    <div className={className}>
      <style jsx>{styles}</style>
      <style jsx>{`
        div {
          flex-wrap: ${wrap};
          align-items: ${align};
          justify-content: ${justify};
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
