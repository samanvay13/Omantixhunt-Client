import { Injectable } from "@angular/core";
import { EnvService } from "./env.service";
import { HttpClient, HttpRequest } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class APIService {
    serverURL: string;
    private userObj :any = {};

    constructor(private http: HttpClient, private cookieService: CookieService, private env: EnvService) {
        this.serverURL = "https://omantixhunt-server.onrender.com/";
    }

    get URL(): string {
        return this.serverURL;
    }

    toFormPayload({url, method}:{ url: string, method: string}, options = {}, formData: FormData = null){
        const req: any = {
            url: this.serverURL + url,
            method,
            options: structuredClone(options),
        }
        if(formData){
            req.options.formData = formData;
        }
        return req
    }

    callAPI(req: {method: string, url: string, options?: any}): Observable<any> {
        if(req.options.formData){
            return this.http.post(req.url, req.options.formData);
        }
        return this.http.request(req.method, req.url, req.options)
    }

    clearUserObj(){
        this.userObj = {};
    }

}