import { autoserialize } from 'cerialize';

export class User {
  @autoserialize
  id: number | undefined | null;

  @autoserialize
  email: string | undefined;

  @autoserialize
  password: string | undefined;
}
