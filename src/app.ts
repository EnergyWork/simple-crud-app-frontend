import path from 'path'
import { fileURLToPath } from 'url'
import express, { Express } from 'express'

import IControllerBase from './interfaces/IControllerBase.interface.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

class App {
    public app: Express
    public hostname: string
    public port: number

    constructor(appInit: {
        hostname: string
        port: number
        middlewares: Array<express.RequestHandler>
        controllers: Array<IControllerBase>
    }) {
        this.app = express()
        this.hostname = appInit.hostname
        this.port = appInit.port

        this.routes(appInit.controllers)
        this.middlewares(appInit.middlewares)
        this.templateEngine()
        this.assets()
    }

    private middlewares(middlewares: Array<express.RequestHandler>) {
        middlewares.forEach((middleware) => {
            this.app.use(middleware)
        })
    }

    private routes(controllers: Array<IControllerBase>) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.getRouter())
        })
    }

    private templateEngine() {
        this.app.set('view engine', 'hbs')
    }

    private assets() {
        this.app.use('/assets', express.static(path.resolve(__dirname, 'assets')))
    }

    public listen() {
        this.app.listen(this.port, this.hostname, () => {
            console.log(`App listening on the ${this.hostname}:${this.port}`)
        })
    }
}

export default App
