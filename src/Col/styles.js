import { media, halfGutter } from "../config";
import formatStyles from "../utils/formatStyles";

function gerenateColStyles() {
  let styles = `
    .rcg-col {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding: 0_${halfGutter};
    }
  `;
  const mediaKeys = Object.keys(media);

  for (let i = 0; mediaKeys[i]; i++) {
    for (let j = 1; j <= 12; j++) {
      const currentMedia = mediaKeys[i];
      const currentValue = media[currentMedia];
      const maxWidth = j / 12 * 100;

      styles += `
        @media (min-width: ${currentValue}) {
          .rcg-col-${currentMedia}-${j} {
            max-width: ${maxWidth}%;
            -ms-flex-preferred-size: ${maxWidth}%;
            flex-basis: ${maxWidth}%;
          }
        }
      `;
    }
  }

  return formatStyles(styles);
}

export default gerenateColStyles;
