const request = require('request');


// querying dynamically with command line arguments, with the user entering
// only the name of the breed they want to query.


const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {
    if (error) {
      callback(error, null);
      return null;
    }
    if (response.statusCode !== 200) {
      callback('Server responded with:' + response.statusCode, null);
      return;
    }
    const data = JSON.parse(body);

    if (data.length === 0) {
      callback('breed not found');
      return null;
    }
    callback(null, data[0].description.trim()); // had to add trim to remove ANNOYING whitespaces to get my test to succeed.
  });
};

module.exports = { fetchBreedDescription };

