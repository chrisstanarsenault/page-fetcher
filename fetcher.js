const fs = require('fs');
const request = require('request');

const args = process.argv.slice(2);
let urlArgsToString = args[0].toString();
let fileNameArgsToString = args[1].toString();


request(urlArgsToString, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  fs.writeFile(fileNameArgsToString, body, err => {
    fs.stat(fileNameArgsToString, (err, stats) => {
      console.log(`File has been written and downloaded ${stats.size} bytes`)
    })
  })
});
