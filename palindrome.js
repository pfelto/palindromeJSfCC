function palindrome(str) {
    let x = str.trim().replace(/\W|_/g,"");
    console.log(x);
    let midpoint;
    if(x.length % 2 === 0){
        midpoint = x.length/2
    }else{
        midpoint = x.length/2 + 1
    }
    let y = x.slice(0,x.length/2);
    let z = x.slice(midpoint);
    console.log(y)
    console.log(z)
    return y === z;
  }
  
  console.log(palindrome("   _e y  e "));

  console.log(palindrome("0_0 (: /-\ :) 0-0"))

  console.log(palindrome("five|\_/|four"))