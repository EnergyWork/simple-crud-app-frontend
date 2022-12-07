import { Router } from 'express'
import IRouterBase from '../interfaces/IRouter.js'
import IndexController from '../controllers/index.controller.js'

class IndexRouter implements IRouterBase {
    private path = '/'
    private router: Router
    private controller: IndexController

    constructor() {
        this.router = Router()
        this.controller = new IndexController()
        this.initRouter()
    }

    private initRouter() {
        this.router.get(this.path, this.controller.index)
    }

    public getRouter(): Router {
        return this.router
    }
}

export default IndexRouter
