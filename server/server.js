import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import {router} from './routes.js'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackConfig from '../webpack.client.config'
const compiler = webpack(webpackConfig);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use(webpackDevMiddleware(compiler, {
    // webpack-dev-middleware options
}));

app.use("/", router);
app.use("/", express.static("www"));
app.use("/products", express.static("www"));
app.use("/products/:type", express.static("www"));
app.use("/error/:code", express.static("www"));

app.use((req, res) => {
   res.redirect('/error/404');
});

app.use('/api', (err, req, res, next) => {
    console.error(err);
    res.status(500).json(null);
});

app.use((err, req, res, next) => {
    console.error(err);
    res.redirect('/error/500');
});

const port = 3000;
app.listen(port);
console.log(`Started at port ${port}`);