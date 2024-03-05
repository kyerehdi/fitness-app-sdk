import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../../models/person';
import { Observable, map } from 'rxjs';
import { Deserialize } from 'cerialize';
import { FileData } from '../../models/fileData';
import { ProfilePicture } from '../../models/profilePicture';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  // resourceURL = 'http://10.0.2.2:5277/api/persons';

  // resourceURL = 'http://localhost:5277/api/persons';

  resourceURL = 'http://192.168.1.162:5277/api/persons';

  constructor(private httpClient: HttpClient) {}

  createPerson(person: any): Observable<Person> {
    return this.httpClient
      .post(this.resourceURL, person)
      .pipe(map((response) => Deserialize(response, Person)));
  }

  uploadProfilePicture(
    picture: FileData,
    fileName: string
  ): Observable<FileData> {
    return this.httpClient
      .post(this.resourceURL + '/profilePicture', {
        FileData: picture,
        fileName: fileName,
      })
      .pipe(map((response) => Deserialize(response, FileData)));
  }

  getPersonFromUserId(userId: number): Observable<Person> {
    return this.httpClient
      .get(`${this.resourceURL}/personId`, {
        params: {
          userId: userId,
        },
      })
      .pipe(map((response) => Deserialize(response, Person)));
  }

  getPersonProfilePicture(userId: number): Observable<FileData> {
    return this.httpClient
      .get(`${this.resourceURL}/profilePicture/personId`, {
        params: {
          userId,
        },
      })
      .pipe(
        map((response) => {
          return Deserialize(response, FileData);
        })
      );
  }

  updatePerson(person: Person): Observable<Person> {
    return this.httpClient
      .put(`${this.resourceURL}/updatePerson`, person)
      .pipe(map((response) => Deserialize(response, Person)));
  }
}
