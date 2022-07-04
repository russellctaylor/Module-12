//const url = "https://api.spacexdata.com/v2/launchpads";

//d3.json(url).then(receivedData => console.log(receivedData));
//The parameter of the arrow function, named data here, is arbitrary and could be named anything else, e.g., d3.json(url).then(spaceXResults => console.log(spaceXResults));
//d3.json(url).then(spaceXResults =>
  //  console.log(spaceXResults[0]));
  //d3.json(url).then(spaceXResults =>
    //console.log(spaceXResults[0].location.latitude));
//Use map() to print only the latitude and longitude coordinates of each SpaceX launch station.
//d3.json("samples.json").then(function(data){
//    console.log("hello");
//});
//Modify the code to change the printed console message from a simple "hello" to the entire dataset:
//d3.json("samples.json").then(function(data){
//    console.log(data);
//});

//extract only the wfreq, or the weekly belly button washing frequency, of each person into a new array. What would her code look like?
//d3.json("samples.json").then(function(data){
  //  wfreq = data.metadata.map(person => person.wfreq);
    //console.log(wfreq);
//});

//display the metadata of any individual from the dataset:

d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});