const express = require("express")
const req = require("express/lib/request")
const app = express()
const port = 3002


const user_route = require('./User/user_router')
const comment_route = require('./Comment/comment_router')


app.use(express.json())
app.use('/user', user_route)
app.use('/post', comment_route)

app.listen(port, () => {
    console.log("App is running on port number " + port);
})