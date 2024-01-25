import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Deserialize } from 'cerialize';
import { WorkoutFile } from '../../models/workoutFile';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  resourceURL = 'http://localhost:5277/api/workout';

  // resourceURL = 'http://10.0.2.2:5277/api/workout';

  constructor(private httpClient: HttpClient) {}

  getWorkout(): Observable<WorkoutFile> {
    return this.httpClient
      .get(this.resourceURL + '/type', {
        params: { workoutName: 'Bench Press' },
      })
      .pipe(map((response) => Deserialize(response, WorkoutFile)));
  }

  // fetchAllWorkouts(): Observable<any> {
  //   return this.httpClient.get(this.resourceURL);
  //   // .pipe(map((response) => Deserialize(response, WorkoutFile)));
  // }

  fetchPopularWorkouts(): Observable<Array<WorkoutFile>> {
    return this.httpClient
      .get(this.resourceURL + '/popularWorkouts')
      .pipe(map((response) => Deserialize(response, WorkoutFile)));
  }

  fetchQuickWorkouts(): Observable<Array<WorkoutFile>> {
    return this.httpClient
      .get(this.resourceURL + '/quickWorkouts')
      .pipe(map((response) => Deserialize(response, WorkoutFile)));
  }
}
