import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  clientID: string = 'cc465c36';
  
  //baseUrl: string = 'http://www.omdbapi.com/?s=' + this.queryString + '&type=movie&apikey=' + this.clientID ;
  
  constructor(private _http: Http) { }

  search(queryString: string) {
    queryString = queryString.replace(' ', '+');
    console.log(queryString)
    let _URL = 'http://localhost:8080/search/' + queryString;

    return this._http.get(_URL);
  }
}
