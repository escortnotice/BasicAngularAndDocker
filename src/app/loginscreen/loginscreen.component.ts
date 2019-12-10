import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css']
})
export class LoginscreenComponent implements OnInit {

  userid: string;
  pwd: string;

  constructor( private loginService: LoginService) { 
  }

  onLogin(){
    console.log("Login Button Clicked");

    //print values entered in login form
    console.log("userid:"+ this.userid);
    console.log("pwd:"+ this.pwd);

    //call login service
    this.loginService.login(this.userid, this.pwd);

    //reset form values after submitting
    this.userid="";
    this.pwd="";

  }


  ngOnInit() {
  }
  

}
