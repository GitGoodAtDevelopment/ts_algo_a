const nthFib = (n: number, current = 0, next = 1) =>
  n > 1 ? nthFib(n - 1, next, next + current) : current;

export default nthFib