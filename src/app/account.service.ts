import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }
  accounts = [{
    name: 'Master account',
    status: 'active'
  },
  {
    name: 'Test account',
    status: 'inactive'
  },
  {
    name: 'Hidden account',
    status: 'hidden'
  }]

  getAccounts() {
    return this.accounts;
  }

  addAccount(accountName, accountStatus) {
    this.accounts.push({ name: accountName, status: accountStatus })
  }

  updateStatus(id, status) {
    this.accounts[id].status = status;
  }
}
