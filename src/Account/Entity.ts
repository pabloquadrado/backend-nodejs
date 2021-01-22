export class Account {
    public code: number;
    public type: AccountType;
    public balance: number;

    public constructor(type: AccountType, balance: number) {
        this.type = type;
        this.balance = balance;
    }
}

export enum AccountType {
    SAVING = 'SAVING',
    CURRENT = 'CURRENT'
}