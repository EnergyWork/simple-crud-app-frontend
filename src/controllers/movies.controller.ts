import { Request, Response } from 'express'

class MoviesController {
    constructor() {
        //this.authService = new AuthService()
    }

    public listRender(req: Request, res: Response) {
        res.render('movies/list')
    }
}

export default MoviesController
