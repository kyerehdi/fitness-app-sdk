import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deserialize } from 'cerialize';
import { UserWorkout } from '../../models/user-workouts';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserWorkoutService {
  // resourceUrl = 'http://localhost:5277/api/userWorkout';

  // resourceUrl = 'http://10.0.2.2:5277/api/userWorkout';

  resourceUrl ='http://192.168.1.162:5277/api/userWorkout'
  constructor(private httpClient: HttpClient) {}

  getWorkoutFromDate(
    year: number,
    month: number,
    personId: number
  ): Observable<Array<UserWorkout>> {
    return this.httpClient
      .get(`${this.resourceUrl}/monthandYear`, {
        params: {
          year: year,
          month: month,
          personId: personId,
        },
      })
      .pipe(map((response) => Deserialize(response, UserWorkout)));
  }
}
