
export default function cleanStyles(styles) {
  return styles
    .replace(/\n| |,/g, '')
    .replace(/_/g, ' ');
}