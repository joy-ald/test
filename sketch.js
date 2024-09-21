

// csv file 
let filename = 'per4.csv';

// all code should be inside this command
d3.csv(filename).then(function(loadedData) {
  
  // load the data
  
  console.log(loadedData);
  
  // empty lists for our data and the labels
  let data =   [];
  let labels = [];
  
  // use a for-loop to load the data 
  // file into our lists
  for (let i=0; i<loadedData.length; i++) {
    console.log(loadedData[i]);
    
    // get the Date and Cost
    let DateIssued =     loadedData[i].Date;
    let CC = loadedData[i].ConstructionCost;
    console.log(CC);
    
    // add the Date
    labels.push(DateIssued);
    
    // and CC
    data.push(CC);    
  }
  
  // Use the basic line chart settings
  let options = {
    type: 'line',
    data: {
      labels: labels,  // the labels
      datasets: [{
        data: data,    // the data
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 0,
        borderColor: 'rgb(100,100,100)'
      }]
    }
  };
  
  //  create the chart
  let chart = new Chart(document.getElementById('canvas'), options);
});

