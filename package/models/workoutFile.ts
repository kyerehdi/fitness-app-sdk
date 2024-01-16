import { autoserialize } from 'cerialize';
import { Workout } from './workout';

export class WorkoutFile{
    @autoserialize
    gifUrl: string;

    @autoserialize
    workout: Workout
}