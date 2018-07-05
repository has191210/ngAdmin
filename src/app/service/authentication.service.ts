import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private authUrl='http://localhost:8080/auth'
  constructor(private http: HttpClient) { }
   login (username:string, password:string){
      return this.http.post<any>(this.authUrl,{userName:username, password:password})
             .pipe(
               map(user=>{
               if(user && user.token){
               }
               return user;
             }
           ));
   }
}
