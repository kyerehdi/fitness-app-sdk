import { autoserialize } from 'cerialize';

export class Person {
  @autoserialize
  id: number;

  @autoserialize
  fullname: string;

  @autoserialize
  age: number;

  @autoserialize
  email: string;

  @autoserialize
  number: number;

  @autoserialize
  goal: string;

  @autoserialize
  height: number;

  @autoserialize
  weight: number;

  @autoserialize
  gender: string;

  @autoserialize
  userid: number;

  @autoserialize
  profilePictureFileName: string;
}
