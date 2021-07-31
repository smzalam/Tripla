const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get("/game/create", (req, res)=> {
    res.send('created game')
})

app.get("/game/new", (req, res)=> {
    res.send('created new game')
})

app.get("/game/pod-profile", (req, res)=> {
    res.send('created ndew game')
})

app.listen(5000, () => {
    console.log("Server has started running on Port 5000")
})
