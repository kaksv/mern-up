const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//create a database connection -> u can also
//create a separate file for this and then import/use that file here

mongoose.connect('mongodb+srv://kakoozavian:kaks0784@cluster0.dzx4q.mongodb.net/'    
).then(() => console.log('Connected to Mongo DB')).catch(error=> console.log(error))

const app = express();
const PORT = process.env.PORT || 5000;


//Use properties
app.use(
    cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders : [
            "Content-Type",
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials: true
    })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));