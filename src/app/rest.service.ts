import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  })
};

const Url = 'http://localhost:8887/api/';
@Injectable({
  providedIn: 'root'
})
export class RestService {
  private headers: Headers;
  constructor(private http: HttpClient) { }
  /* Uses http.get() to load data from a single API endpoint */
  createAuthorizationHeader(headers: Headers) {
    console.log("localStorage.getItem('access_token')",localStorage.getItem('access_token'));
    headers.append('x-access-token', localStorage.getItem('access_token') ? localStorage.getItem('access_token') : ''); 
  }

  getAuthors(req) {
    let requestUrl = 'admin/login';
    return this.Post(requestUrl, req);
  }
  getAuth() {
    return this.http.get(Url + 'category');
  }
  public Post = (resultUrl: string, requestParameterData: any, timeout?: any): Observable<any> => {
    return this.makeRequest(resultUrl, true, requestParameterData);
  }
  public Get = (resultUrl: string, request: string): Observable<any> => {
    return this.makeRequest(resultUrl + request, false);
  }
  makeRequest(url: string, isPost?: boolean, postData?: any): any {
    const apiUrl = Url;
    url = apiUrl + url;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    this.createAuthorizationHeader(this.headers);
  console.log('httpOptions',httpOptions.headers);
    if (isPost) {
      return this.http.post(url, typeof postData === 'object' ? this.objectToParams(postData) : postData, httpOptions).pipe(
        tap(),
        catchError(this.handleError('addHero'))
      );
    } else {
      return this.http.get(url, httpOptions).pipe();
    }
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /**
 * Converts an object to a parametrised string.
 * @param object
 * @returns {string}
 */
 private objectToParams =function (object): string {
  console.log("object", object);
  return Object.keys(object).map((key) => (typeof (object[key]) === "object") ?
      this.subObjectToParams(encodeURIComponent(key), object[key]) :
      `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`
  ).join('&');
};

/**
* Converts a sub-object to a parametrised string.
* @param object
* @returns {string}
*/
private subObjectToParams=function (key, object): string {
  return Object.keys(object).map((childKey) => (typeof (object[childKey]) === "object") ?
      this.subObjectToParams(`${key}[${encodeURIComponent(childKey)}]`, object[childKey]) :
      `${key}[${encodeURIComponent(childKey)}]=${encodeURIComponent(object[childKey])}`
  ).join('&');
}
}
