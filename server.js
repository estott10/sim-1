const express= require('express');
const bodyParser= require('body-parser');
const massive= require ('massive');
const cors= require('cors');
require('dotenv').config();

const app= express();


app.use( cors() )
app.use( bodyParser.json() )

massive(process.env.CONNECTION_STRING)
.then(  dbInstance => {
    app.get('db', dbInstance)
    }
).catch( err => console.log(err) );



const port = process.env.PORT || 8080

app.listen( port, ()=> console.log(`Server listening on port ${port}`) )