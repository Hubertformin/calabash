import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AlertService} from 'ngx-alerts';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly DB_URL = 'http://localhost:5000';

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type':  'application/json',
      'Authorization': 'web-calabash-api'
    })
  };

  constructor(private httpClient: HttpClient, private alertService: AlertService) { }

/**
 * @method authenticateUser
 *
 */
authenticateUser(username: string, password: string) {
 return this.httpClient.get(this.DB_URL + '/users/auth/' + username + '/' + password, this.httpOptions)
   .pipe(
     catchError(this.handleError)
   );
}

getAllEvents() {
  return this.httpClient.get(this.DB_URL + '/events', this.httpOptions);
}

getEvent(id) {
  return this.httpClient.get(this.DB_URL + '/events/' + id, this.httpOptions);
}
updateEvent(id, event) {
  return this.httpClient.put(this.DB_URL + '/event/' + id, {event}, this.httpOptions);
}

getAllTickets() {
  return this.httpClient.get(this.DB_URL + '/tickets', this.httpOptions);
}

getTicket(id) {
  return this.httpClient.get(this.DB_URL + '/ticket/' + id, this.httpOptions);
}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      this.alertService.danger('Failed to connect. Please check your connection');
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened;\n please try again later.');
  }

}
