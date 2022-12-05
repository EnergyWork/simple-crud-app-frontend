import bodyParser from 'body-parser';

import App from './app.js';
import HomeController from './controllers/home.controller.js';
import loggerMiddleware from './middleware/logger.js';

const app = new App({
    hostname: 'localhost',
    port: 3000,
    middlewares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware,
    ],
    controllers: [
        new HomeController()
    ],
})

app.listen()

// app.set("views", path.resolve(__dirname, "views"))
// app.use("/static", express.static(path.resolve(__dirname, "static")));