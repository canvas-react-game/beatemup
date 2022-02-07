// Express requirements
import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';

//import renderer from './renderer';
import router from './router';

// Create our express app using the port optionally specified
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set up homepage, static assets, and capture everything else
app.use(express.static(path.resolve(__dirname, './')));
//app.use(renderer);
app.use(router);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
