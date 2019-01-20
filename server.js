const express = require('express');
const app = express();
app.use(express.static(__dirname + '/dist/movie-analysis'));
app.listen(process.env.PORT || 8080, function () {
  console.log("Server is up and running");
});
