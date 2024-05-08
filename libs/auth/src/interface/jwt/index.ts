export interface AuthTokens {
  access_token: string;
  refresh_token: string;
}

export interface AuthTokensExpiration {
  access_token_expires_at: number;
  refresh_token_expires_at: number;
}

export type AuthTokensWithExpiration = AuthTokens & AuthTokensExpiration;

export type AccessTokenWithExpiration = Omit<
  AuthTokensWithExpiration,
  'refresh_token' | 'refresh_token_expires_at'
>;
