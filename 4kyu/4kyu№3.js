function sumIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let sum = 0;
    let end = -Infinity; 
  
    for (let i = 0; i < intervals.length; i++)
    {
        let [start, stop] = intervals[i];
        if (start >= end)
        {
          sum += stop - start;
          end = stop;
        } 
        else if(stop > end) 
        {
          sum += stop - end;
          end = stop;
        }
    }
    return sum;
  }
