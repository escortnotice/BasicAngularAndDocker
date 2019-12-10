import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: any ;
  base_url: string;
  login_httpost_endpoint: string;
  constructor(private http: HttpClient, private router: Router) { 

    this.base_url = environment.api_baseurl;
    this.login_httpost_endpoint = this.base_url + "/login";

  }

  login(userid: string, pwd: string){

    console.log("Inside Login Service");

     //post call
     let obs = this.http.post(this.login_httpost_endpoint,
     {
       "userId": userid,
       "password": pwd
     },);
 
     //print response received, to console
     obs.subscribe( 
       (response) => {
         this.user = JSON.parse(JSON.stringify(response));
         console.log("User Details received as Response:" + JSON.stringify(response));
         
          //redirect to homepage
          this.router.navigate(['homepage']);
       });
  }
}
