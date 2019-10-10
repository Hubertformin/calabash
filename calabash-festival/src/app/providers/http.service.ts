import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly DB_URL = 'localhost:5000';

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type':  'application/json',
      'Authorization': 'web-calabash-api'
    })
  };

  constructor(private httpClient: HttpClient) { }

/**
 * @method authenticateUser
 *
 */
authenticateUser(username: string, password: string) {
 return this.httpClient.get(this.DB_URL + '/auth/' + username + '/' + password, this.httpOptions);
}

}
