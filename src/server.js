import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import path from 'path';
import history from 'connect-history-api-fallback';
// import productRoutes from './routes/api/productRoutes';
// import userRoutes from './routes/api/userRoutes';
// DB URI import
// import mongoURI from './config/keys';

const app = express();
const PORT = 4000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use('/images', express.static(path.join(__dirname, '../assets')));
// app.use(express.static(path.resolve(__dirname, '../build'), { maxAge: '1y', etag: false }));
// app.use(history());
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

// connect to Mongo
// mongoose.Promise = global.Promise;
// const connectString = mongoURI();
// mongoose.connect(connectString, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
//     .then(() => console.log('MongoDB Atlas Connected...'))
//     .catch(err => console.log(err));

// Call Routes
// productRoutes(app);
// userRoutes(app);


// // add middleware
// app.use(express.static("../build/static"));

// // Serve static folder
// const buildPath = path.normalize(path.join(__dirname, 'dist'));
// add middlewares
// app.use(express.static(buildPath));

// const rootRouter = express.Router();
/* 
* all your other routes go here
*/
// rootRouter.get('(/*)?', async (req, res, next) => {
//     res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });
// app.use(rootRouter);

// app.get('/ping', (request, response) => {
//     return response.send(`pong`);
// });

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server Running on Port: http://localhost:${PORT}`);
});