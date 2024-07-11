require('dotenv').config();
const exprees = require('express');
const {authRouter} = require('./routes/authRoutes.js')
const cors = require('cors')
require('./config/db.js')


const app = exprees();
app.use(exprees.json());

app.use(cors({origin: true}));

app.use('/api/v1/auth',authRouter);

app.listen(process.env.PORT,()=>{
    console.log(`----------Server started -> ${process.env.PORT}---------`);
})