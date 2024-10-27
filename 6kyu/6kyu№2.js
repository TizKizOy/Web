function expandedForm(num) {
    num = num.toString();
    let array = num.split('.');
    let partFerst = array[0];
    let partSecond = array[1];
    let newStr=[];
  
    for(let i=0;i<partFerst.length;i++)
    {
       if(partFerst[i] != 0)
          newStr.push(partFerst[i] + '0'.repeat(partFerst.length - i - 1));
    }
    for(let i=0;i<partSecond.length;i++)
    {
      if(partSecond[i] != 0)
          newStr.push(partSecond[i] + '/1'+ '0'.repeat(i+1));
    }
    return newStr.join(' + ');
  }

