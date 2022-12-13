import path from 'path'
import { fileURLToPath } from 'url'
import express, { Express, Request, Response } from 'express'
import exphbs from 'express-handlebars'

import IRouterBase from './interfaces/IRouter.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

class App {
    public app: Express
    public hostname: string
    public port: number
    private hbs: exphbs.ExpressHandlebars

    constructor(appInit: {
        hostname: string
        port: number
        middlewares: Array<express.RequestHandler>
        routers: Array<IRouterBase>
    }) {
        this.app = express()
        this.hostname = appInit.hostname
        this.port = appInit.port

        // config view engine
        this.hbs = exphbs.create({
            defaultLayout: 'main',
            layoutsDir: path.join(this.app.get('views'), 'layouts'),
            partialsDir: path.join(this.app.get('views'), 'partials'),
            extname: '.hbs',
        })

        this.middlewares(appInit.middlewares)
        this.routes(appInit.routers)
        this.templateEngine()
        this.assets()

        this.notFound404()
        this.internalError()
    }

    private middlewares(middlewares: Array<express.RequestHandler>) {
        middlewares.forEach((middleware) => {
            this.app.use(middleware)
        })
    }

    private routes(routers: Array<IRouterBase>) {
        routers.forEach((router) => {
            this.app.use(router.getRouter())
        })
    }

    private templateEngine() {
        this.app.engine('hbs', this.hbs.engine)
        this.app.set('view engine', 'hbs')
        this.app.set('views', path.join(__dirname, '../views'))
    }

    private assets() {
        this.app.use(express.static(path.join(__dirname, 'assets')))
    }

    public listen() {
        this.app.listen(this.port, this.hostname, () => {
            console.log(`App listening on the ${this.hostname}:${this.port}`)
        })
    }

    private notFound404() {
        this.app.use((req: Request, res: Response) => {
            return res.status(404).render('404')
        })
    }

    private internalError() {
        this.app.use((error: Error, req: Request, res: Response) => {
            res.status(500) //! fix it
            res.render('error', {
                message: error.message,
            })
        })
    }
}

export default App
