import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  accountStatus: string;
  accountName: string;
  accounts: any;

  accountForm = new FormGroup({
    accountname: new FormControl(''),
    accountstatus: new FormControl('')
  });

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accounts = this.accountService.getAccounts();
  }
  onFormSubmit() {
    this.accountStatus = this.accountForm.controls.accountstatus.value;
    this.accountName = this.accountForm.controls.accountname.value;

    if (this.accountStatus == '') {
      this.accountStatus = 'active'
    }
    this.accountService.addAccount(this.accountName, this.accountStatus);
  }
}
