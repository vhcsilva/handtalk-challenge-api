import express from 'express'
import routes from './src/routes/routes'

const PORT = 3001
const app = express()

app.use(express.json())

app.all('/*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use('/', routes)

app.listen(PORT, () => {
  console.log(`app is running on PORT ${PORT}`)
})

module.exports = app