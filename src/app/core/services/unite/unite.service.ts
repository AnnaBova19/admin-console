import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../../../environments/environment';

import { Issue } from "../../../shared/models/index";

@Injectable({
  providedIn: 'root'
})
export class UniteService {

  private issues: BehaviorSubject<Issue[]> = new BehaviorSubject<Issue[]>([]);

  constructor(
    private http: HttpClient
  ) {}

  getCoverList(): Observable<any> {
    const dummyCoverList = [
      { slug: 'cover1', name: 'Cover 1' },
      { slug: 'cover2', name: 'Cover 2' },
      { slug: 'cover3', name: 'Cover 3' },
      { slug: 'cover4', name: 'Cover 4' },
      { slug: 'cover5', name: 'Cover 5' },
      { slug: 'cover6', name: 'Cover 6' }
    ]
    return Observable.create( observer => {
      observer.next(dummyCoverList);
      observer.complete();
    });
  }

  public getToken(): string {
    return localStorage.getItem('token') ? localStorage.getItem('token') : '';
  }

  public getHeaders(){
    return new HttpHeaders()
      // .append('Authorization', `Bearer ${this.getToken()}`)
      .append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJ2b3ZhLnRvbHN0b3Vzb3ZAZ21haWwuY29tIiwic2NvcGUiOlsiZm9vIiwicmVhZCIsIndyaXRlIl0sIm9yZ2FuaXphdGlvbiI6InZvdmEudG9sc3RvdXNvdkBnbWFpbC5jb21jY3JkIiwiZXhwIjoxNTQyMjE0MzY4LCJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIl0sImp0aSI6IjViYzg3MTU1LTRlMGItNGYwOS05Njc3LWEwMzQ2MTU1ZDQxOCIsImNsaWVudF9pZCI6ImZvb0NsaWVudElkUGFzc3dvcmQifQ.RGz5eSfU4i7xJ8J2VlJrTc9sjQd4ChlL2w3NubuwHNE')
      .append('Content-Type', 'application/json');
  }

  public getIssuesList(parameters): Observable<Issue[]> {
    const url = `${environment.contentApiUrl}/magazine/findAll`;
    const headers = this.getHeaders();
    return this.http.post<Issue[]>(url, parameters, {headers})
    .pipe(
      map((response: any) => response.resultMap.data.map(issue => new Issue().deserialize(issue))),
      catchError(this.handleError('getIssues', []))
    );
  }

  public getIssueById(id: string): Observable<Issue> {
    const url = `${environment.contentApiUrl}/magazine/findOneById`;
    const headers = this.getHeaders();
    return this.http.post<Issue>(url, null, { headers, params: {id: id}})
    .pipe(
      catchError(this.handleError<Issue>(`getIssue id=${id}`))
    );
  }

  public createIssue(issue: Issue): Observable<Issue> {
    const url = `${environment.contentApiUrl}/magazine/save`;
    const headers = this.getHeaders();
    return this.http.post<Issue>(url, issue, {headers})
    .pipe(
      catchError(this.handleError<Issue>('createPortfolio'))
    );
  }

  public deleteIssueById(id: string) {
    const url = `${environment.contentApiUrl}/magazine/deleteById`;
    const headers = this.getHeaders();
    return this.http.post(url, null, { headers, params: {id: id}})
      .pipe(
        catchError(this.handleError<Issue>('deleteIssue'))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return Observable.throw(error);
    };
  }
}
