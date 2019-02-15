import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) {
  }

  public getToken(): string {
    return localStorage.getItem('token') ? localStorage.getItem('token') : '';
  }

  login(body: any): Observable<any> {
    // const url = `${environment.profileApiUrl}/userAccount/login`;
    // return this.http.post(url, Object.assign(body)).pipe(
    //   map(this.extractData)
    // );
    return;
  }

  public logOut() {
    localStorage.removeItem('token');
  }

  register(body: any): Observable<any> {
    // const url = `${environment.profileApiUrl}/userAccount/register`;
    // return this.http.post(url, Object.assign(body)).pipe(
    //   map(this.extractData)
    // );
    return;
  }

  resetPassword(body: any): Observable<any> {
    // const url = `${environment.profileApiUrl}/userAccount/resetPassWord`;
    // return this.http.post(url, body).pipe(
    //   map(this.extractData)
    // );
    return;
  }

  requestAccessToken(body: any): Observable<any> {
    // const url = `${environment.profileApiUrl}/linkedInLoginOther`;
    // const headers = new HttpHeaders()
    //    .set('Content-Type', 'application/x-www-form-urlencoded');
    // const request = `code=${body.code}&redirectUrl=${body.redirectUrl}`;
    // return this.http.post(url, request, { headers }).pipe(
    //   map(this.extractData)
    // );
    return;
  }

  sendEmail(body: any) {
    // const url = `${environment.profileApiUrl}/emailToken/sendEmail`;
    // const formData: FormData = new FormData();
    // Object.keys(body).map((key: any) => {
    //   formData.append(key, body[key]);
    // });
    // return this.http.post(url, formData).pipe(
    //   map(this.extractData)
    // );
    return;
  }

  loginSuccess(data: any) {
    this.storeUserInformation(data.resultMap);
  }

  linkedInLoginSuccess(data: any) {
    this.storeLinkedInInformation(data.resultMap);
  }

  getUserInfo() {
    const token = localStorage.getItem('token');
    const userInfo = this.jwtHelper.decodeToken(token);
    return userInfo || {};
  }

  storeUserInformation(data: any) {
    if (data && data.accesstoken) {
      localStorage.setItem('token', data.accesstoken);
    }
  }

  storeLinkedInInformation(data: any) {
    if (data && data.tokenValue) {
      localStorage.setItem('token', data.tokenValue);
    }
  }

  isAuthenticated() {
    const token = localStorage.getItem('token');
    return token ? true : false;
  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  public isTokenExpired() {
    const token = localStorage.getItem('token');
    if (!token) {
      return true;
    }
    const date = this.jwtHelper.getTokenExpirationDate(token);
    if (!date) {
      return false;
    }
    return !(date.valueOf() > new Date().valueOf());
  }
}
