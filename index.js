import fluid from '@bloometry/fluid';

export default (n = 1) => {
  return fluid(n * 10, n * 20);
};
