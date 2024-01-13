import { autoserialize } from 'cerialize';
import { Workout } from './workout';

export class WorkoutFile{
    @autoserialize
    gif: string;

    @autoserialize
    workout: Workout
}