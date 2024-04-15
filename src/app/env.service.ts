import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  // The values that are defined here are the default values that can be overridden by env.js
  public getHostURL = 'https://omantixhunt-server.onrender.com/';
  constructor() { }
}
