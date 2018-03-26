export let media = {
  xs: "0px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px"
};

export let medias = ['xs', 'sm', 'md', 'lg', 'xl'];

export let halfGutter = "15px";

export default function configureGrid(configs) {
  for (let i = 0; medias[i]; i++) {
    if (configs[medias[i]]) {
      media[medias[i]] = configs[medias[i]]
    }
  }

  if (typeof configs.gutter === 'string') {
    const newHalfGutter = configs.gutter
      .replace(
      /[0-9]+/,
      configs.gutter.match(/\d/g).join('') / 2
      );

    halfGutter = newHalfGutter;
  }
}
