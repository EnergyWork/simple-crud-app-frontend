import { Router } from 'express'

interface IControllerBase {
    getRouter(): Router
}

export default IControllerBase
