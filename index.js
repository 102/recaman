export function recaman(n) {
  if (n < 0 || !Number.isInteger(n)) return NaN;
  if (n === 0) return 0;
  const seq = new Set([0]);
  let prev = 0;
  for (let i = 1; i <= n; i++) {
    const curr = prev - i > 0 && !seq.has(prev - i) ? prev - i : prev + i;
    if (i === n) return curr;
    seq.add(curr);
    prev = curr;
  }
}
