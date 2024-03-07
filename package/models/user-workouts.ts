import { autoserialize } from 'cerialize';

export class UserWorkout {
  @autoserialize
  id: number | null;

  @autoserialize
  workout_name: string;

  @autoserialize
  date: Date;

  @autoserialize
  personid: number;

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
