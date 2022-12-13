import bodyParser from 'body-parser'
import morgan from 'morgan'
import path from 'path'
import rfs from 'rotating-file-stream'
import url from 'url'
import cookieParser from 'cookie-parser'

import App from './app.js'
import AuthRouter from './routers/auth.router.js'
import IndexRouter from './routers/index.router.js'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// prettier-ignore
const logStream = rfs.createStream('service.log', {
    interval: '1d',
    path: path.resolve(__dirname, '..', 'log'),
})

const app = new App({
    hostname: 'localhost',
    port: 3000,
    // prettier-ignore
    middlewares: [
        bodyParser.urlencoded({ extended: true }), 
        bodyParser.json(), 
        cookieParser('ohmyfuckingsecretkey'),
        morgan('[:date[web]] :remote-addr - :method :status :url - :response-time ms', {stream: logStream}), // to file
        morgan('[:date[web]] :remote-addr - :method :status :url - :response-time ms'), // to terminal
    ],
    // prettier-ignore
    routers: [
        new IndexRouter(),
        new AuthRouter(),
    ],
})

app.listen()
