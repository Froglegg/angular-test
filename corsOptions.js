const whitelist = [
  "http://localhost:4200/",
  "http://localhost:5000/",
  "http://api.darksky.net",
  "https://maps.googleapis.com",
  "https://ducks-love-rain.herokuapp.com"
];
const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error(`Origin: ${origin} Not allowed by CORS`));
    }
  }
};

module.exports = corsOptions;
