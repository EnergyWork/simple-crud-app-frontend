import { Request, Response } from 'express'

class AuthController {
    public loginRender(req: Request, res: Response) {
        res.render('auth/login')
    }

    public registerRender(req: Request, res: Response) {
        res.render('auth/register')
    }

    public login(req: Request, res: Response) {
        // work with model
        res.redirect('/auth/login')
    }

    public register(req: Request, res: Response) {
        // work with model
        res.redirect('/auth/register')
    }
}

export default AuthController
