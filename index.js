export function recaman(n) {
  if (n < 0) return NaN;
  if (n === 0) return 0;
  const seq = [0];
  for (let i = 1; i <= n; i++) {
    const prev = seq[i - 1];
    const next = prev - i;
    seq[i] = next > 0 && !seq.includes(next) ? next : prev + i;
    if (i === n) return seq[i];
  }
}
