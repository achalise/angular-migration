import { Component, Input, OnInit } from '@angular/core';
import { EbAccount } from './eb-account.model';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  @Input() account: EbAccount;
  constructor() { }


  ngOnInit() {
  }

}
