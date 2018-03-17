import css from "styled-jsx/css";
import { media, gutter } from "../constants";

function gerenateColClasses() {
  let classes = "";
  const mediaKeys = Object.keys(media);

  for (let i = 0; mediaKeys[i]; i++) {
    for (let j = 1; j <= 12; j++) {
      const currentMedia = mediaKeys[i];
      const currentValue = media[currentMedia];
      const maxWidth = j / 12 * 100;

      classes += `
        @media screen and (min-width: ${currentValue}) {
          .col-${currentMedia}-${j} {
            max-width: ${maxWidth}%;
            flex-basis: ${maxWidth}%;
          }
        }
      `;
    }
  }

  return classes;
}

export const colClasses = gerenateColClasses();

export default css`
  div {
    padding: 0 ${gutter};
  }
`;
