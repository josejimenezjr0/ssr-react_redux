const express = require('express')
require('dotenv').config()

const app = express()

app.get('/', (req, res) => { })

const port = process.env.PORT

app.listen(port, () => console.log(`Listening on port ${port}`))