const express = require('express')
const app = express()
const port = 4000;
app.use(express.static(__dirname + '/../client/dist'));

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})