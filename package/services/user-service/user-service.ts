import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/users';
import { Observable, map } from 'rxjs';
import { Deserialize } from 'cerialize';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // resourceUrl = 'http://10.0.2.2:5277/api/users';

  // resourceUrl = 'http://localhost:5277/api/users';

  resourceUrl = 'http://192.168.1.162:5277/api/users'

  constructor(private httpClient: HttpClient) {}

  createUser(user: any): Observable<User> {
    return this.httpClient
      .post(this.resourceUrl, user)
      .pipe(map((response) => Deserialize(response, User)));
  }

  checkIfEmailIsNotInDB(email: string): Observable<boolean> {
    return this.httpClient
      .get(this.resourceUrl + '/checkemail', {
        params: { email: email },
      })
      .pipe(map((response) => Deserialize(response, Boolean)));
  }

  authenticate(user: User): Observable<any> {
    return this.httpClient.post(this.resourceUrl + '/authenticate', user);
  }

  getUserId(email: string, token: string): Observable<number> {
    return this.httpClient
      .get(`${this.resourceUrl}/userId`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization':'Bearer ' + token,
        },
        params: {
          email: email,
        },
      })
      .pipe(map((Response) => Deserialize(Response, Number)));
  }
}
