const fs = require('fs');

// read  file sync return buffer data i.e in the form of bit
let dataBuffer = fs.readFileSync('1-json.json');
console.log(dataBuffer)

// convert buffer data into string
let stringData = dataBuffer.toString();
console.log(stringData)

// parsing string data which return data in object form
let objectdata = JSON.parse(stringData);
console.log(objectdata);

// changed the name and palanet
objectdata.name = "maurya";
objectdata.planet = "from another planet";
console.log(objectdata)

// convering object in to json string formate
let jsonData = JSON.stringify(objectdata)
fs.writeFileSync('1-json.json', jsonData);
