const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const request = require("request");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get("/api/hello", (req, res) => {
    res.send({ express: "Hello From Manisha" });
});

app.post("/api/world", (req, res) => {
    console.log(req.body);
    var n = parseInt(req.body.post, 10);
    console.log("value:" + n);
    request.get("https://terriblytinytales.com/test.txt", function (
    error,
    resonse,
    body
    ) {
    if (!error && resonse.statusCode == 200) {
        var data = body;

    var wordsArray = splitByWords(data);
    var wordsMap = createWordMap(wordsArray);
    var finalWordsArray = sortByCount(wordsMap);
    console.log(
    'The word "' +
        finalWordsArray[0].name +
        '" appears the most in the file ' +
        finalWordsArray[0].total +
        " times"
    );
    var finalArray = finalWordsArray.slice(0, n);
    console.log("finalArray", finalArray);
    res.send(finalArray);
    }
    });
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
    app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
    app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
    });
}

function splitByWords(text) {
    var wordsArray = text.split(/\s+/);
    return wordsArray;
}

function createWordMap(wordsArray) {
  var wordsMap = {};

  wordsArray.forEach(function (key) {
    if (wordsMap.hasOwnProperty(key)) {
      wordsMap[key]++;
    } else {
      wordsMap[key] = 1;
    }
  });
  return wordsMap;
}

function sortByCount(wordsMap) {
  var finalWordsArray = [];
  finalWordsArray = Object.keys(wordsMap).map(function (key) {
    return {
      name: key,
      total: wordsMap[key],
    };
  });

  finalWordsArray.sort(function (a, b) {
    return b.total - a.total;
  });

  return finalWordsArray;
}

app.listen(port, () => console.log(`Listening on port ${port}`));
