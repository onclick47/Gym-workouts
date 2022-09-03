const unirest = require("unirest");

const req = unirest("GET", "https://exercisedb.p.rapidapi.com/exercises/bodyPart/waist");

req.headers({
	"X-RapidAPI-Key": "eb9fd34f09msh9d1b32905faa948p1ced02jsn91a6aff672e5",
	"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
	"useQueryString": true
});

module.exports = req;