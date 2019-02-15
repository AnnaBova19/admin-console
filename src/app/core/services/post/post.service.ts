import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../../../environments/environment';

import { Post } from "../../../shared/models/index";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);

  constructor(
    private http: HttpClient
  ) {}


  public getToken(): string {
    return localStorage.getItem('token') ? localStorage.getItem('token') : '';
  }

  public getHeaders(){
    return new HttpHeaders()
      // .append('Authorization', `Bearer ${this.getToken()}`)
      .append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJ2b3ZhLnRvbHN0b3Vzb3ZAZ21haWwuY29tIiwic2NvcGUiOlsiZm9vIiwicmVhZCIsIndyaXRlIl0sIm9yZ2FuaXphdGlvbiI6InZvdmEudG9sc3RvdXNvdkBnbWFpbC5jb21jY3JkIiwiZXhwIjoxNTQyMjE0MzY4LCJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIl0sImp0aSI6IjViYzg3MTU1LTRlMGItNGYwOS05Njc3LWEwMzQ2MTU1ZDQxOCIsImNsaWVudF9pZCI6ImZvb0NsaWVudElkUGFzc3dvcmQifQ.RGz5eSfU4i7xJ8J2VlJrTc9sjQd4ChlL2w3NubuwHNE')
      .append('Content-Type', 'application/json');
  }

  public getAllPostsList(parameters): Observable<Post[]> {
    const url = `${environment.contentApiUrl}/content/findAllContents`;
    const headers = this.getHeaders();
    return this.http.post<Post[]>(url, parameters, {headers})
    .pipe(
      map((response: any) => response.resultMap.data.map(post => new Post().deserialize(post))),
      catchError(this.handleError('getAllPostsList', []))
    );
  }

  getPostsList(): Observable<any> {
    const dummyPostsList = [
      { id: 'post1', title: 'Post 1' },
      { id: 'post2', title: 'Post 2' },
      { id: 'post3', title: 'Post 3' },
      { id: 'post4', title: 'Post 4' },
      { id: 'post5', title: 'Post 5' },
      { id: 'post6', title: 'Post 6' }
    ]
    return Observable.create( observer => {
      observer.next(dummyPostsList);
      observer.complete();
    });
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return Observable.throw(error);
    };
  }
}
