export const EVENT_TYPE_COLOR = {
  Exam: {
    bg: 'var(--color-exam-bg)',
    text: 'var(--color-exam-text)',
    dot: 'var(--color-exam-dot)',
  },
  'Big Event': {
    bg: 'var(--color-big-event-bg)',
    text: 'var(--color-big-event-text)',
    dot: 'var(--color-big-event-dot)',
  },
  Preparation: {
    bg: 'var(--color-prep-bg)',
    text: 'var(--color-prep-text)',
    dot: 'var(--color-prep-dot)',
  },
  'Small Event': {
    bg: 'var(--color-small-event-bg)',
    text: 'var(--color-small-event-text)',
    dot: 'var(--color-small-event-dot)',
  },
  'CPU Event': {
    bg: 'var(--color-cpur-bg)',
    text: 'var(--color-cpur-text)',
    dot: 'var(--color-cpur-dot)',
  },
  Holiday: {
    bg: 'var(--color-holiday-bg)',
    text: 'var(--color-holiday-text)',
    dot: 'var(--color-holiday-dot)',
  },
}

/**
 * Converts a Date object to a local ISO string (YYYY-MM-DD).
 * @param {Date} d
 * @returns {string}
 */
export const toLocalISOString = (d) => {
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}
