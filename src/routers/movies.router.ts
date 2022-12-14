import { Router } from 'express'
import IRouterBase from '../interfaces/IRouter.js'
import MoviesController from '../controllers/movies.controller.js'

class MoviesRouter implements IRouterBase {
    private path = '/movies'
    private router: Router
    private controller: MoviesController

    constructor() {
        this.router = Router()
        this.controller = new MoviesController()
        this.initRouter()
    }

    getRouter(): Router {
        return this.router
    }

    private initRouter() {
        this.router.get(this.path.concat(this.path, '/list'), this.controller.listRender)
    }
}

export default MoviesRouter
