export function createStyleTag(hashName, css) {
  return '<style type="text/css" ' + hashName + '>' + css + '</style>';
}

export function appendStyles(hashName, styleTag) {
  if (typeof window === 'undefined' || document.querySelector(`[${hashName}]`)) {
    return;
  }

  const head = document.head || document.getElementsByTagName('head')[0];
  head.insertAdjacentHTML('beforeend', styleTag);
}
