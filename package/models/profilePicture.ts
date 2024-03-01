import { autoserialize } from 'cerialize';

export class ProfilePicture {
  @autoserialize
  link: string;
}
