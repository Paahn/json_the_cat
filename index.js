const { fetchBreedDescription } = require('./breedFetcher');


let breeds = process.argv.slice(2);
const breed = breeds[0];

fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});