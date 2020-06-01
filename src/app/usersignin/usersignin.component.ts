import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usersignin',
  templateUrl: './usersignin.component.html',
  styleUrls: ['./usersignin.component.scss']
})
export class UsersigninComponent implements OnInit {

  isNewUser:boolean = false;
  isOTPSent:boolean = false;
  username:any = '';

  constructor() { }

  ngOnInit(): void {
  }

  enquireUser(event){
    this.isOTPSent = true;
    this.username = event.target.value;
  }

}
