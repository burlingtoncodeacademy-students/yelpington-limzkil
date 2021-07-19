const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const cors = require('cors')

app.use(cors)

app.use(express.static("client/public"))

//route API to specific eatery via url parameters
app.get("/api/:id" , (req, res) => {
    let id = req.params.id
    res.sendFile(path.join(__dirname, "api",`${id}.json` ))

})

//route API to list of eatery IDs 
app.get("/api", (req, res) => {
    res.sendFile(__dirname + "/api/eateryID.json")
})



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });