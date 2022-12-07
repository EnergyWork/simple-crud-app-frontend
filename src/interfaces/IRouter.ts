import { Router } from 'express'

interface IRouterBase {
    getRouter(): Router
}

export default IRouterBase
