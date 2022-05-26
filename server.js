const express = require('express')
const cors = require('cors')
const app = express()
const { Order, Restaurant, User } = require('./models')
require('./routes')(app)


const corsOptions = {
  origin: 'http://localhost:3000'
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))



const PORT = 4000


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})