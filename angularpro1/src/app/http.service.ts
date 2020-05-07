import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contactlist } from './contact';
import { Observable } from 'rxjs';
import { User } from  './user';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // private server="http://localhost/8080";
private _url:string='/assets/data/data.json';

  constructor( private http:HttpClient) { }
 
  //Service to display date in dashboard
  todayDate() {
    let ndate = new Date();
    return ndate;
  }

  //Service to to get list of contacts stored in contact.ts in contactscomponent
 getContacts():Observable<Contactlist[]>{
   return this.http.get<Contactlist[]>(this._url);
 }

 
 
 //Service to add data to data base
//  register(user:User): Observable<number> {
//   return this.http.post<number>(`${this.server}/event`, user);
//  }
private async request(method: string, url: string, data?: any) {

  const result = this.http.request(method, url, {
    body: data,
    responseType: 'json',
    observe: 'body',
    headers: {
      
    }
  });
  return new Promise((resolve, reject) => {
    result.subscribe(resolve, reject);
  });
}

createEvent(event) {
  return this.request('POST', `${environment.serverUrl}/event`, event);
}
 
 

  
}
