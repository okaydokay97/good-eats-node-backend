const express = require('express')
const cors = require('cors')
const app = express()
const { sequelize } = require('./models')




let corsOptions = {
  origin:'http://localhost:3000'
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

require('./routes')(app)
// sequelize.sync({force:true})
const PORT = 4000


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})