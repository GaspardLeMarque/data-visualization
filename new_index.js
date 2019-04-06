d3.csv("Population-Series.csv").then(function(data) {
    console.log(data);
    //Country codes
    let conCodes = data.map(a => a.CountryCode); 
    console.log(conCodes); //display all country codes
    let uniqueCodes = conCodes.filter(function(item, a, b){ return b.indexOf(item) === a; });
    console.log(uniqueCodes); //display only unique country codes
    let search = "ABW"; //type in specific value
    let count = conCodes.reduce(function(n, val) {
      return n + (val === search);
    }, 0);
    console.log(count); //count specific value intries
    d3.select('body').selectAll('p') //empty sample of paragraphs
    .data([uniqueCodes]) //link sample w data array
    .enter() //return paragraphs w linked data
    .append('div')
    .text(function(a) { return a; }) //ask for data attribute through anonymous function
    //Data source names
    let DSource = data.map(a => a.DESCRIPTION); 
    let uniqueSrc = DSource.filter(function(item, a, b){ return b.indexOf(item) === a; });
    console.log(uniqueSrc);
    //Series codes  
    let SrsCode = data.map(a => a.SeriesCode); 
    let uniqueSrs = SrsCode.filter(function(item, a, b){ return b.indexOf(item) === a; });
    console.log(uniqueSrs);
    //Summarizing data 
    uniqValArr = [uniqueCodes.length, uniqueSrs.length, uniqueSrc.length];  
    console.log(uniqValArr);
    const jsonSummaryArr = JSON.stringify(uniqValArr);
    localStorage.setItem("JSONdata",jsonSummaryArr);
  })
