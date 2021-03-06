import { halfGutter } from "../config";

const wrapTypes = [
  'nowrap',
  'wrap',
  'wrap-reverse'
];

const alignTypes = [
  'baseline',
  'center',
  'flex-end',
  'flex-start',
  'stretch'
];

const justifyTypes = alignTypes;

export default function gerenateRowStyles() {
  let styles =
    '.rcg-row{' +
    '-webkit-box-sizing:border-box;' +
    'box-sizing:border-box;' +
    'display:-webkit-box;' +
    'display:-webkit-flex;' +
    'display:-ms-flexbox;' +
    'display:flex;' +
    'margin: 0 -' + halfGutter +
    '}' +

    wrapTypes.map(wrapType =>
      '.rcg-row-wrap--' + wrapType +
      '{-ms-flex-wrap:' + wrapType +
      ';flex-wrap:' + wrapType +
      '}'
    ).join('') +

    alignTypes.map(alignType =>
      '.rcg-row-align--' + alignType +
      '{-webkit-box-align:' + alignType +
      ';-ms-flex-align:' + alignType +
      ';align-items:' + alignType +
      '}'
    ).join('') +

    justifyTypes.map(justifyType =>
      '.rcg-row-justify--' + justifyType +
      '{-webkit-box-pack:' + justifyType +
      ';-ms-flex-pack:' + justifyType +
      ';justify-content:' + justifyType +
      '}'
    ).join('');

  return styles;
}
