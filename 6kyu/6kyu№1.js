function expandedForm(num) {
    num = num.toString();
    let newStr = [];
    for(let i=0;i<num.length;i++)
    {
      if(num[i] != '0')
          newStr.push(num[i] + '0'.repeat(num.length-i-1)); 
    }
    return newStr.join(' + ');
  }
