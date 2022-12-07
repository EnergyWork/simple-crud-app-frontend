import { Request, Response } from 'express'

//? надо ли IControllerBase; а зачем?
class IndexController {
    public index(req: Request, res: Response) {
        res.render('index', {})
    }
}

export default IndexController
