function palindrome(str) {
  if (typeof str !== 'string') return false;
  const x = str.trim().replace(/\W|_/g, '').toLowerCase().split('')
    .reverse()
    .join('');
  return str.trim().replace(/\W|_/g, '').toLowerCase() === x;
}

palindrome('   _e y  e ');

palindrome('0_0 (: /-\ :) 0-0');

palindrome('five|\_/|four');
