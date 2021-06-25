import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import { router as controllerRouter } from './controllers/decorators/controller';
//import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import './controllers/LoginController';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['asd']}));
app.use(router);
app.use(controllerRouter);

app.listen(3000, () => {
    console.log('Listening on port 3000');
});