// Following the guide below to set up the Express server.
// Apparently it wants me to run a build version of the application before it works.
// Putting this on hold for now as I think I'd rather have the React and Node apps
// running on separate ports.  Will explore alternatives.
// https://medium.com/swlh/create-an-enquiry-form-in-react-and-send-email-using-nodejs-1c0cd590dce1

const path = require('path')
const express = require('express')

const app = express()

const buildPath = path.join(__dirname, '..', 'build')
app.use(express.json)

//Tells Express to serve all the files from the build folder
app.use(express.static(buildPath))


app.post('/send', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

app.listen(3030, () => {
    console.log('server start on port 3030')
})