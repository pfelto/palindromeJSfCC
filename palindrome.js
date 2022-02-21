function palindrome(str) {
  const x = str.trim().replace(/\W|_/g, '').toLowerCase().split('');
  let midpoint;
  if (x.length % 2 === 0) {
    midpoint = x.length / 2;
  } else {
    midpoint = x.length / 2 + 1;
  }
  const y = x.slice(0, x.length / 2);
  const z = x.slice(midpoint).reverse();
  for (let i = 0; i < y.length; i += 1) {
    if (y[i] !== z[i]) return false;
  }
  return true;
}

palindrome('   _e y  e ');

palindrome('0_0 (: /-\ :) 0-0');

palindrome('five|\_/|four');
