import { autoserialize } from 'cerialize';

export class LoginCred {
  @autoserialize
  email: string;

  @autoserialize
  passowrd: string;
}
