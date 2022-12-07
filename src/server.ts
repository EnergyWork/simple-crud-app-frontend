import bodyParser from 'body-parser'
import morgan from 'morgan'

import App from './app.js'
import AuthRouter from './routers/auth.router.js'
import IndexRouter from './routers/index.router.js'

const app = new App({
    hostname: 'localhost',
    port: 3000,
    // prettier-ignore
    middlewares: [
        bodyParser.json(), 
        bodyParser.urlencoded({ extended: true }), 
        morgan('tiny'), // mw logger for incoming requests
    ],
    // prettier-ignore
    routers: [
        new IndexRouter(),
        new AuthRouter(),
    ],
})

app.listen()
