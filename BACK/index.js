const express = require('express')
const app = express()
const routes = require('./routes')

app.use('/artists', routes.artists)

app.listen(3001, () => console.log('RUY GOSTOSO'))