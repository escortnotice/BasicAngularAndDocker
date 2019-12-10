import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  user: any;

  constructor(private loginService: LoginService) {

    console.log("Inside Homepage Component:");
    this.user = this.loginService.user;
    console.log("User Object in HomePage Component:" + this.user);
    
  }

  
  ngOnInit() {
  }


}
