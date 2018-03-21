import gerenateColStyles from "./Col/styles";
import gerenateRowStyles from "./Row/styles";

export let media = {
  xs: "0px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px"
};

export let halfGutter = "15px";

export default function configureGrid(configs) {
  configs.xs && (media.xs = configs.xs);
  configs.sm && (media.sm = configs.sm);
  configs.md && (media.md = configs.md);
  configs.lg && (media.lg = configs.lg);
  configs.xl && (media.xl = configs.xl);

  if (typeof configs.gutter === 'string') {
    const newHalfGutter = configs.gutter
      .replace(
      /[0-9]+/,
      configs.gutter.match(/\d/g).join('') / 2
      );

    halfGutter = newHalfGutter;
  }
}
