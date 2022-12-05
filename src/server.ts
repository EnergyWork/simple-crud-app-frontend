import bodyParser from 'body-parser'

import App from './app.js'
import HomeController from './controllers/home.controller.js'
import loggerMiddleware from './middleware/logger.js'

const app = new App({
    hostname: 'localhost',
    port: 3000,
    // prettier-ignore
    middlewares: [bodyParser.json(), bodyParser.urlencoded({ extended: true }), loggerMiddleware],
    // prettier-ignore
    controllers: [
        new HomeController()
    ],
})

app.listen()
