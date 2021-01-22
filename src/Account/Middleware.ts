import { Request, Response, NextFunction } from "express";

class Account {
    public async create (request: Request, response: Response, next: NextFunction) {
        if (!request.body.type) {
            return response.status(400).json({ error: true, message: 'Account type is required.' });
        }

        if (!request.body.balance) {
            return response.status(400).json({ error: true, message: 'Account balance is required.' });
        }

        return next();
    }

    public async operation (request: Request, response: Response, next: NextFunction) {
        if (!request.body.value) {
            return response.status(400).json({ error: true, message: 'Value is required.' });
        }

        return next();
    }
}

export default new Account();