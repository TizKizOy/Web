function formatDuration (seconds) {
    if(seconds == 0)
        return "now";
    
    const timeUnits = [
        ["year", 31536000],
        ["day", 86400],
        ["hour", 3600],
        ["minute", 60],
        ["second", 1]
    ];
    
    let result = [];
    let currentSecond = seconds;
    for(let i=0;i<timeUnits.length;i++)
    {
        const [unit, sec] = timeUnits[i];
        let count = Math.floor(currentSecond/sec);  
        console.log(count)
        if (count > 0)
        {
            result.push(`${count} ${unit}${count > 1 ? 's' : ''}`);
            currentSecond %= sec; 
        }
    }

    if(result.length == 1)
        return result[0];
    else if(result.length == 2)
        return `${result[0]} and ${result[1]}`;
    else 
    { 
        const lastTwo = result.slice(-2).join(" and ");
        return `${result.slice(0, -2).join(", ")}, ${lastTwo}`;
    }
}