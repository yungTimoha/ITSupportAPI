import { User } from '@prisma/client';
import { AuthTokensWithExpiration } from './jwt/index';

export interface AuthResult {
  user: User;
  tokens: AuthTokensWithExpiration;
  wasExist: boolean;
  emailVerificationSent?: boolean;
  unconfirmedEmail?: string;
}
