import css from "styled-jsx/css";
import { gutter } from "../constants";

export default css`
  div {
    display: flex;
    margin: 0 -${gutter};
  }
`;
