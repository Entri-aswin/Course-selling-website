import express from 'express'
import { connectDB } from './config/db.js';
import apiRouter from './routes/index.js';

const app = express()
const port = process.env.PORT;

connectDB()


app.get('/',  (req, res) => {
  res.send('Hello World!')

})


app.use('/api', apiRouter)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



