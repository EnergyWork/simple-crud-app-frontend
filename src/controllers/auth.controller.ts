import { Request, Response } from 'express'
import AuthService from '../models/auth.model.js'

class AuthController {
    private authService: AuthService

    constructor() {
        this.authService = new AuthService()
    }

    public loginRender(req: Request, res: Response) {
        res.render('auth/login')
    }

    public registerRender(req: Request, res: Response) {
        res.render('auth/register')
    }

    public login = (req: Request, res: Response) => {
        // work with model
        res.redirect('/auth/login')
    }

    // prettier-ignore
    public register = async (req: Request, res: Response) => {
        console.debug(req.body)
        const rpl = await this.authService.register(req.body.username, req.body.password1, req.body.password2)
        console.debug('register.controller', rpl)
        console.debug('register.Error.Code', rpl.Error.Code)
        console.debug('register.Error.Message', rpl.Error.Message)
        if (rpl.Error.Code != 200) {
            res.render('auth/register', {
                message_exist: true,
                text: rpl.Error.Message,
            })
        } else {
            res.redirect('/auth/register')
        }
    }
}

export default AuthController
