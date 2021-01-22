import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as dotenv from 'dotenv'

import AccountHandler from './Account/Handler';
import AccountMiddleware from './Account/Middleware';

dotenv.config()

const application = express()

application.use(bodyParser.text())
application.use(express.json())
application.use(express.urlencoded({ extended: false }))
application.use(cors())

application.post('/accounts', AccountMiddleware.create, AccountHandler.create)
application.get('/accounts', AccountHandler.get)
application.put('/accounts/:code/withdraw', AccountMiddleware.operation, AccountHandler.withdraw)
application.put('/accounts/:code/deposit', AccountMiddleware.operation, AccountHandler.deposit)

application.set('port', process.env.APP_PORT || 5000)

export { application }