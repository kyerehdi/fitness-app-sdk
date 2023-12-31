import { autoserialize } from 'cerialize';

export class FileData {
  @autoserialize
  fileName: string;

  @autoserialize
  format: string;

  @autoserialize
  base64String: string;
}
