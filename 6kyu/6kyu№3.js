function digitalRoot(n) {
    n = n.toString();
    let sum = 0;
    for(let i=0;i<n.length;i++)
      {
        sum += parseInt(n[i]);
      }
    if(sum>=10)
      return digitalRoot(sum);
    else
      return sum;
  }