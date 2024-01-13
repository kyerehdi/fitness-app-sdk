import { autoserialize } from 'cerialize';

export class Workout {
  @autoserialize
  id: number;

  @autoserialize
  video: string;

  @autoserialize
  workout_name: string;
}
