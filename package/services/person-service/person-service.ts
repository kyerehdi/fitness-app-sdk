import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../../models/person';
import { Observable, map } from 'rxjs';
import { Deserialize } from 'cerialize';
import { FileData } from '../../models/fileData';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  // resourceURL = 'http://10.0.2.2:5277/api/persons';

  resourceURL = 'http://localhost:5277/api/persons';

  constructor(private httpClient: HttpClient) {}

  createPerson(person: any): Observable<Person> {
    return this.httpClient
      .post(this.resourceURL, person)
      .pipe(map((response) => Deserialize(response, Person)));
  }

  uploadProfilePicture(picture: FileData, fileName: string) {
    return this.httpClient.post(this.resourceURL + '/profilePicture', {
      FileData: picture,
      fileName: fileName,
    });
  }
}
