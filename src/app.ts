import express, { Express } from 'express'
import path from 'path'
import IControllerBase from './interfaces/IControllerBase.interface'

class App {
    public app: Express
    public hostname: string
    public port: number

    constructor(appInit: { hostname: string , port: number, middlewares: any, controllers: Array<IControllerBase> }) {
        this.app = express()
        this.hostname = appInit.hostname
        this.port = appInit.port

        this.routes(appInit.controllers)
        this.middlewares(appInit.middlewares)
        this.templateEngine()
        this.assets()
    }

    private middlewares(middlewares: any[]) {
        middlewares.forEach(middleware => {
            this.app.use(middleware)
        });
    }

    private routes(controllers: Array<IControllerBase>) {
         controllers.forEach(controller => {
            this.app.use('/', controller.getRouter())
        });
    }

    private templateEngine() {
        this.app.set("view engine", "hbs")
    }

    private assets() {
        this.app.use("/public", express.static(path.resolve(__dirname, "public")));
    }

    public listen() {
        this.app.listen(this.port, this.hostname, () => {
            console.log(`App listening on the ${this.hostname}:${this.port}`)
        })
    }

}

export default App;