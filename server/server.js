const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./models');

const PORT = process.env.PORT || 8080;

const app = express();

//Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const corsOptions = {
    origin: '*',
    Credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json());

//Routes
app.use('/api/users', require('./routes/userRoutes'));

db.sequelize.sync()
.then(() => {
  console.log('Database connected');
})
.catch((err) => {
  console.log('Error: ', err);
});


const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});