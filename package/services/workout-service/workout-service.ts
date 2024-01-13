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

  constructor(private httpClient: HttpClient) {}

  getWorkout(): Observable<WorkoutFile> {
    return this.httpClient
      .get(this.resourceURL + '/type', {
        params: { workoutName: 'Bench Press' },
      })
      .pipe(map((response) => Deserialize(response, WorkoutFile)));
  }
}