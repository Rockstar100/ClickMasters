const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
//load env vars
dotenv.config();

//connect to database
const db = 'mongodb+srv://parveenjaiswal100:root123@clickmaster.oveswat.mongodb.net/Photographer'
const connectDB = async () => {
    try{
        await mongoose.connect(db,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })


        console.log(`MongoDB Connected: ${mongoose.connection.host}`.cyan.underline.bold);
    } catch (error){
        console.log(`Error: ${error.message}`.red.underline.bold);
       
    }
}
connectDB();



const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({ origin: 'http://localhost:3000',
credentials: true
 }));

app.get ('/', (req, res) => {
    res.send('API is running');
});

//routes
app.use('/api/v1/users', require('./routes/userRoutes'));
app.use('/api/v1/admin', require('./routes/adminRoutes'))
app.use('/api/v1/cameraman', require('./routes/cameramanRoutes'))



// app.post('/api/v1/users/getUserData', (req, res) => {
//     console.log(req.body)
//     res.send({ success: true, data: { name: 'Parveen Jaiswal', email: ' '
//     } })
//   });

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running in ${process.env.NODE_MODE} on port ${process.env.PORT }`.yellow.bold);
    
}
);


