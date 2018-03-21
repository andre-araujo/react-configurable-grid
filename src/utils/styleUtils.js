const staticStyles = [];

export function appendStyles(hash, css, dynamic) {
  if (!dynamic && staticStyles.indexOf(hash) !== -1) {
    return;
  }

  if (!dynamic) {
    staticStyles.push(hash)
  }

  const tag = document.createElement('style');
  tag.type = 'text/css'
  tag.setAttribute(`data-grid-${hash}`, '')

  if (css) {
    tag.appendChild(document.createTextNode(css))
  }

  const head = document.head || document.getElementsByTagName('head')[0]

  head.appendChild(tag);

  return tag
}
