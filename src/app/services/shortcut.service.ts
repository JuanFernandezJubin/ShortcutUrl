import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONFIG } from './const.enviroment';

@Injectable({
  providedIn: 'root'
})
export class ShortcutService {
  public URL: string = CONFIG.URL;
  // public TOKEN: string = CONFIG.TOKEN;

  constructor(private http: HttpClient) { }

  getUrlShort(url: string): Observable<any> {
    // Una forma de aplicar el token authorization
    // const tokenHeader = new HttpHeaders({ Authorization: 'Bearer ' + this.TOKEN })
    // const body = { 
    //   long_url: url
    // }
    // return this.http.post(this.URL, body, { headers: tokenHeader })

    const body = { 
      long_url: url
    }
    return this.http.post(this.URL, body,);
  }
}
