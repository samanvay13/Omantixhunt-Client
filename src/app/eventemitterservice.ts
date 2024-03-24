import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Subscription } from "rxjs/internal/Subscription";
import { map, of } from "rxjs";
import { User } from "./User";
import { CookieService } from "ngx-cookie-service";
import { EnvService } from "./env.service";

@Injectable({    
    providedIn: 'root'    
  })    
  export class EventEmitterService {

    // private env: EnvService = new EnvService();

    USER_NAME_SESSION = 'authenticatedUser'
    // IP: string = '172.16.0.220';
    // IP: string = '172.16.3.140';
    // IP: string = 'localhost';
    // port: string = '8080';
    
    IP: string;
    port: string;
    serverURL: string;

    private userObj :any = {};
    invokeFirstComponentFunction = new EventEmitter();    
    subsVar: Subscription;   
      
    constructor(private http: HttpClient, private cookieService: CookieService, private env: EnvService) { 

      this.IP = this.env.getHostIP;
      this.port = this.env.getHostPort;
      this.serverURL = "http://"+this.IP+":"+this.port+"/"; 
    }
      
    onFirstComponentButtonClick() {    
      this.invokeFirstComponentFunction.emit();    
    }

    clearUserObj(){
      this.userObj = {};
    }
    getUser(username:any){
      if(this.userObj[username]){
        return of(this.userObj[username]);
      }
      return this.http.get<User>(this.URL+'aiqon/usernavigation/'+username).pipe(map((obj:any)=>{
        this.userObj[username] = obj;
        return obj
      }));
    }
    getUserName(){
      let user = sessionStorage.getItem(this.USER_NAME_SESSION);
      if (!user && this.cookieService.get('username')) {
        user = this.cookieService.get('username');
      }
      if (user === null) return '';
      return user;
    }
    getUserDetails():any{
      let username = this.getUserName();
      return this.getUser(username);
    }

    getUserId():any{
      let username = this.getUserName();
      return this.userObj[username]?.id;
    }

    get URL(): string {
      return this.serverURL;
    }

  } 