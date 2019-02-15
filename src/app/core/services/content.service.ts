import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getAuthorList(): Observable<any> {
    const dummyAuthorList = [
      { slug: 'Jack', name: 'Jack' },
      { slug: 'Jack', name: 'Jack' },
      { slug: 'Jack', name: 'Jack' },
      { slug: 'Jack', name: 'Jack' },
      { slug: 'Jack', name: 'Jack' },
      { slug: 'Jack', name: 'Jack' }
    ]
    return Observable.create( observer => {
      observer.next(dummyAuthorList);
      observer.complete();
    });
  }

  getSponsorList(): Observable<any> {
    const dummySponsorList = [
      { slug: 'Jack', name: 'Jack' },
      { slug: 'Jack', name: 'Jack' },
      { slug: 'Jack', name: 'Jack' },
      { slug: 'Jack', name: 'Jack' },
      { slug: 'Jack', name: 'Jack' },
      { slug: 'Jack', name: 'Jack' }
    ]
    return Observable.create( observer => {
      observer.next(dummySponsorList);
      observer.complete();
    });
  }

  getContentTypeList(): Observable<any> {
    const dummyContentTypeList = [
      { slug: 'Jack', name: 'Jack' },
      { slug: 'Jack', name: 'Jack' },
      { slug: 'Jack', name: 'Jack' },
      { slug: 'Jack', name: 'Jack' },
      { slug: 'Jack', name: 'Jack' },
      { slug: 'Jack', name: 'Jack' }
    ]
    return Observable.create( observer => {
      observer.next(dummyContentTypeList);
      observer.complete();
    });
  }

  getCategoryList(): Observable<any> {
    const dummyCategoryList = [
      { slug: 'Jack', name: 'Jack' },
      { slug: 'Jack', name: 'Jack' },
      { slug: 'Jack', name: 'Jack' },
      { slug: 'Jack', name: 'Jack' },
      { slug: 'Jack', name: 'Jack' },
      { slug: 'Jack', name: 'Jack' }
    ]
    return Observable.create( observer => {
      observer.next(dummyCategoryList);
      observer.complete();
    });
  }
}
