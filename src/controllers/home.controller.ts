import { Router, Request, Response } from 'express'
import IControllerBase from "../interfaces/IControllerBase.interface";

class HomeController implements IControllerBase {
    private path = '/'
    private router = Router()

    constructor() {
        this.initRoutes()
    }

    private initRoutes() {
        this.router.get(this.path, this.index)
    }

    public getRouter() : Router {
        return this.router
    }

    private index (req: Request, res: Response) {
        // work with model
        res.render('index', {})
    }
}

export default HomeController