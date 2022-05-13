const app = require("./app")
const connectDB = require('./db/mongoose')
const dotenv = require('dotenv')

dotenv.config()

const port = process.env.PORT

app.listen(port, async () => {
    await connectDB()
    console.log('Server is up on port ' + port)
})