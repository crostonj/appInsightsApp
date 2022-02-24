import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Mathy } from 'src/app/models/mathy/mathy';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  private url = environment.apihost + 'math';

  constructor(private httpClient: HttpClient) { }

  getAnswer(value: Number) {
    let mathy = new Mathy(value);

    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      //'Cache-Control': 'no-cache'
    });

    let options = {
	      headers: httpHeaders
    };

    //return this.httpClient.get(this.url);
    return this.httpClient.post<Mathy>(this.url, mathy).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
        return Observable.throw(error.message || "server error.");
  }
}
