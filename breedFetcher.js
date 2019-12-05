const request = require('request')


// querying dynamically with command line arguments, with the user entering
// only the name of the breed they want to query.
let breeds = process.argv.slice(2);
let breed = breeds[0];
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body){
  // console.log(`Body: ${body}`);
  // console.log(`type of body is ${typeof body}`);
  if (error){
    console.log(error, "Breed not found. Maybe you were looking for a dog?")
  }
  const data = JSON.parse(body);
  console.log(data);
  console.log(`type of body after parsing from JSON is ${typeof data}`);
})
