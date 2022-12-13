import { Router } from 'express'

import AuthController from '../controllers/auth.controller.js'
import IRouterBase from '../interfaces/IRouter.js'

class AuthRouter implements IRouterBase {
    private path = '/auth'
    private router: Router
    private controller: AuthController

    constructor() {
        this.router = Router()
        this.controller = new AuthController()
        this.initRouter()
    }

    private initRouter() {
        this.router.get(this.path.concat('/login'), this.controller.loginRender)
        this.router.post(this.path.concat('/login'), this.controller.login)
        this.router.get(this.path.concat('/register'), this.controller.registerRender)
        this.router.post(this.path.concat('/register'), this.controller.register)
    }

    public getRouter(): Router {
        return this.router
    }
}

export default AuthRouter
