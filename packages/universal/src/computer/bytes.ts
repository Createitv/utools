export function convertBytes(value: number) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  let i = 0
  while (value >= 1024) {
    value = Number((value / 1024).toFixed(2))
    i++
  }
  return `${value} ${units[i]}`
}
