const express = require('express');
const app = express();
const mcache = require('memory-cache');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

const cache = (duration) => {
 	return (req, res, next) => {
    	let key = '__express__' + req.originalUrl || req.url
    	let cachedBody = JSON.parse(mcache.get(key))
    	if (cachedBody) {
      		res.json(cachedBody);
      		console.log(req.headers);
			console.log("request made");
      	return
   		} else {
      		res.sendResponse = res.send
      		res.send = (body) => {
        		mcache.put(key, body, duration * 1000);
        		res.sendResponse(body)
      	}
      	next()
    }
  }
}

const retrieve = require('./retrieve.js');

app.get('/', cache(1800), function (req, res) {
	retrieve.getData(["worldnews", "news", "worldevents"]).then(res.json.bind(res));

	console.log(req.headers);
	console.log("/ request made");
})

app.get('/science-and-technology', cache(1800), function (req, res) {
	retrieve.getData(["science", "technology"]).then(res.json.bind(res));

	console.log(req.headers);
	console.log("/science-and-technology request made");
})

app.get('/canada', cache(1800), function (req, res) {
	retrieve.getData(["canada", "onguardforthee"]).then(res.json.bind(res));

	console.log(req.headers);
	console.log("/canada request made");
})

app.get('/politics', cache(1800), function (req, res) {
	retrieve.getData(["politics", "worldpolitics", "ukpolitics", "eupolitics", "uspolitics"]).then(res.json.bind(res));

	console.log(req.headers);
	console.log("/politics request made");
})

app.get('/entertainment', cache(1800), function (req, res) {
	retrieve.getData(["entertainment", "movies", "music", "books", "television"]).then(res.json.bind(res));

	console.log(req.headers);
	console.log("/entertainment request made");
})

app.get('/sports', cache(1800), function (req, res) {
	retrieve.getData(["sports", "nba", "sportsHUB", "baseball", "basketball", "football", "hockey", "motorsports", "soccer", "mma", "running",
		"climbing", "snowboarding", "skiing", "cricket", "tennis", "cycling", "boxing", "skateboarding", "golf"]).then(res.json.bind(res));

	console.log(req.headers);
	console.log("/sports request made");
})

/////////////////////

port_number = app.listen(process.env.PORT || 3000)

app.listen(port_number);