// const bodyparser = require('body-parser')
const express = require('express')
const path = require('path')

const app = express();
// app.unsubscribe(bodyparser.json());
app.use(express.static(__dirname + "/app/dist/app"));

app.get("*", (req, res, next) => res.sendFile(path.resolve(__dirname + "/app/dist/app/index.html")));

app.listen(8169, () => console.log("Listening on port 8169"));