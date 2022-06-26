const axios = require("axios");

const url = "http://localhost:5000/constellations";
axios
  .get(url)
  .then((response) => {
    const result = response.data.filter((constellation) => {
      return constellation.starsWithPlanets < 10;
    })
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });


  const url = "http://localhost:5000/constellations";
axios
  .post(url, {
    name: "Ara",
    meaning: "Altar",
    starsWithPlanets: 7,
    quadrant: "SQ3",
  })
  .then((response) => {
    console.log(response.data);
  });

const idToDelete = "ctvVRjy";
axios.delete(`${url}/${idToDelete}`);

axios.get(`${url}/${idToDelete}`);