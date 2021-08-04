import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';


const app = express();


app.use(express.urlencoded({ limit: '25mb', extended: true }));
app.use(express.json({ limit: '25mb' }));
app.use(cors());

app.use('/posts', postRoutes);


//https://www.mongodb.com/cloud/atlas

const CONNECTION_URL = 'mongodb+srv://booklover:<booklover123>@cluster0.hgmti.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewURLParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log('Server running on port: ${PORT}')))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);