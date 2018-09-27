import fluid from '@candour/fluid'

export default (n = 1) => {
  return fluid(n * 16, n * 16 * 1.2)
}
