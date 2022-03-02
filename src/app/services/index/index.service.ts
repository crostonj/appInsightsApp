import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Activity } from 'src/app/models/activity';
import { Mathy } from 'src/app/models/mathy/mathy';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  private url = environment.apihost + 'index';

  constructor(private httpClient: HttpClient) { }

  getActivty() {

    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      //'Cache-Control': 'no-cache'
    });

    let options = {
	      headers: httpHeaders
    };

    //return this.httpClient.get(this.url);
    return this.httpClient.get<Activity>(this.url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
        return Observable.throw(error.message || "server error.");
  }
}
