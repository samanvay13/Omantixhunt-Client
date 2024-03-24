import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  // The values that are defined here are the default values that can be overridden by env.js
  public getHostIP = 'localhost';
  public getHostPort = '8090';
  constructor() { }
}
