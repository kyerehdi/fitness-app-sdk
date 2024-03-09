import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deserialize, autoserialize } from 'cerialize';
import { UserWorkout } from '../../models/user-workouts';
import { Observable, map } from 'rxjs';

export class WorkoutNumber {
  @autoserialize
  numberOfDaysWorkedOutThisWeek: number;
}

@Injectable({
  providedIn: 'root',
})
export class UserWorkoutService {
  // resourceUrl = 'http://localhost:5277/api/userWorkout';

  // resourceUrl = 'http://10.0.2.2:5277/api/userWorkout';

  resourceUrl = 'https://rest-api-latest.onrender.com/api/userWorkout';
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

  getTotalUserWorkoutsFromDate(
    startDate: string,
    endDate: string,
    personId: number
  ): Observable<WorkoutNumber> {
    return this.httpClient
      .get(`${this.resourceUrl}/currentDaysWorkorkedOut`, {
        params: {
          startDate: startDate,
          enddate: endDate,
          personId: personId,
        },
      })
      .pipe(
        map((response) => {
          return Deserialize(response, WorkoutNumber);
        })
      );
  }

  addWorkout(userWorkout: any): Observable<UserWorkout> {
    return this.httpClient
      .post(`${this.resourceUrl}/addWorkout`, userWorkout)
      .pipe(map((resposne) => Deserialize(resposne, UserWorkout)));
  }
}
