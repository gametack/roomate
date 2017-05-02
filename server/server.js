"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const expressHandlebars = require('express-handlebars');

const app = express();

require('./routes/longpoll');




// Run server to listen on port 3000.
const server = app.listen(8082, () => {
  console.log('listening on 0.0.0.0:8082');
});
  
  
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main'
}));
// sqlite.getParties(function(err, result) {
//         if (err) console.log("Error getting party items: " + err);
//         else console.log(result);
//     })
// sql.addParty({"description":"","active":false,"duration":0,"going":5,"interested":23,"latitude":40.79405980000001,"longitude":-77.86189780,"name":"yehya party","playlistid":"","queueid":"","startTime":1487928722024, "userid":1})
// app.engine('handlebars', expressHandlebars({
//   defaultLayout: 'main'
// }));

app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(session({
  secret: 'asdasdg6456ghsdfasdf'
}));



// Static files
app.use(express.static('public'));

// Set Express routes.
app.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    console.log("Authenticated");
    res.redirect('/app');
  }
  else {
    console.log("Not authenticated");
    res.render("home");
  }
});




app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

// Routes
app.use("/admin", require("./routes/admin"));
app.use("/app", require("./routes/app"));
app.use("/user", require("./routes/user"));

