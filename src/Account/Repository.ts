import { Account } from "./Entity";

class Repository {
    private accounts: Account[];

    public constructor() {
        this.accounts = [];
    }

    public create (account: Account): Account {
        account.code = Math.floor(Math.random() * 100000);

        this.accounts.push(account);

        return account;
    }

    public getAll(): Account[] {
        return this.accounts;
    }

    public withdraw(code, value) {
        const accountIndex = this.accounts.findIndex(account => account.code == code);

        if (accountIndex === -1) {
            throw Error('Accout not found');
        }

        if (this.accounts[accountIndex].balance < value) {
            throw Error('Insufficient balance.');
        }

        this.accounts[accountIndex].balance -= value;

        return this.accounts[accountIndex];
    }

    public deposit(code, value) {
        const accountIndex = this.accounts.findIndex(account => account.code == code);

        if (accountIndex === -1) {
            throw Error('Accout not found');
        }

        this.accounts[accountIndex].balance += value;

        return this.accounts[accountIndex];
    }
}

export default new Repository();