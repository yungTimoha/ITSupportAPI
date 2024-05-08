import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto-js';
@Injectable()
export class EncryptionService {
  hashString(value: string, privateKey: string): string {
    return crypto.SHA512(value + privateKey).toString();
  }
}
