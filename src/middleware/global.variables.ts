import { NextFunction, Request, Response } from 'express'

const GlobalVariables = (req: Request, res: Response, next: NextFunction) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    res.locals.user = req.flash('user')
    next()
}

export default GlobalVariables
