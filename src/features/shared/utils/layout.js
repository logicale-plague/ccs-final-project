/**
 * @typedef {Object} XYPadding
 * @property {number} [x]
 * @property {number} [y]
 */

/**
 * @typedef {Object} BoxPadding
 * @property {number} [top]
 * @property {number} [left]
 * @property {number} [bottom]
 * @property {number} [right]
 */

/** @typedef {XYPadding | BoxPadding | string | number} PaddingProp */

/**
 * Parses spacing values (numbers, CSS strings, or Flutter-like padding objects) into valid CSS string values.
 * @param {PaddingProp} [value]
 * @returns {string|null}
 */
export function parseSpacing(value) {
  if (value === undefined || value === null) return null
  if (typeof value === 'number') return `${value}px`
  if (typeof value === 'string') return value

  if ('x' in value || 'y' in value) {
    const y = value.y ?? 0
    const x = value.x ?? 0
    return `${y}px ${x}px`
  }

  if ('top' in value || 'bottom' in value || 'left' in value || 'right' in value) {
    const top = value.top ?? 0
    const right = value.right ?? 0
    const bottom = value.bottom ?? 0
    const left = value.left ?? 0
    return `${top}px ${right}px ${bottom}px ${left}px`
  }

  return null
}

/**
 * Parses width or height dimensions into valid CSS string values.
 * @param {string|number|null} [value]
 * @returns {string|null}
 */
export function parseDimension(value) {
  if (value === undefined || value === null) return null
  return typeof value === 'number' ? `${value}px` : value
}
