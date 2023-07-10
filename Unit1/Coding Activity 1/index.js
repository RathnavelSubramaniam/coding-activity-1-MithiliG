const express = require('express');
//imort express from "express";
const app = express()
const port = 3004;

app.get('/', (req, res) => {
     res.send('Coding Activity 1.1 file created! ')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

