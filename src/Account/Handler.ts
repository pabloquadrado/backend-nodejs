import { Request, Response } from 'express';
import { Account, AccountType } from './Entity';
import Repository from './Repository';

class Handler {
    public async get(request: Request, response: Response) {
        return response.json(Repository.getAll());
    }

    public async create (request: Request, response: Response) {
        const { type, balance } = request.body;

        const account = new Account(AccountType[type.toUpperCase()], balance);

        return response.json(Repository.create(account));
    }

    public async withdraw (request: Request, response: Response) {
        try {
            
            const { code } = request.params;
            const { value } = request.body;
    
            if (value > 600) {
                return response.status(400).json({ error: true, message: 'Requested value greater than allowed' });
            }
    
            return response.json(Repository.withdraw(code, value))
        
        } catch (error) {
            return response.status(400).json({ error: true, message: error.message });
        }
    }

    public async deposit (request: Request, response: Response) {
        try {

            const { code } = request.params;
            const { value } = request.body;
    
            return response.json(Repository.deposit(code, value))
        
        } catch (error) {
            return response.status(400).json({ error: true, message: error.message });
        }
    }
}

export default new Handler();