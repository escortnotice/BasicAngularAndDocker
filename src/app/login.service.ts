import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: any ;

  constructor(private http: HttpClient, private router: Router) { }

  login(userid: string, pwd: string){

    console.log("Inside Login Service");

     //post call
     let obs = this.http.post("http://localhost:8085/rest/docker/login",
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

          console.log("testing");
       });
  }
}
