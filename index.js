import fluid from '@candour/fluid'

export default (n = 1) => {
  if (n === 0) return 0

  const exponent = n > 1 ? 1 + n / 10 : 1
  return fluid(n * 14, n * 16 * exponent)
}
