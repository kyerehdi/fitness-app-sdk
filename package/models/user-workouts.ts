import { autoserialize } from 'cerialize';

export class UserWorkout {
  @autoserialize
  id: number;

  @autoserialize
  workout_name: string;

  @autoserialize
  date: Date;

  @autoserialize
  personid: string;

  @autoserialize
  workoutid: number;

  @autoserialize
  sets: number;

  @autoserialize
  reps: number;

  @autoserialize
  intensity: string;

  @autoserialize
  weight: number;
}
