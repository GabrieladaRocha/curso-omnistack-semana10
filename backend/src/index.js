const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes')


const app = express()
app.use(express.json())

app.use(routes)

mongoose.connect('mongodb+srv://PODI:gdarocha18@cluster0-lb0cu.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser: true,
useUnifiedTopology: true
})




app.listen(3333);
