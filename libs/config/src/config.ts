import * as process from 'process';

export const config = () => ({
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_ACCESS_TOKEN_TTL: process.env.JWT_ACCESS_TOKEN_TTL,
  HASH_PRIVATE: process.env.HASH_PRIVATE,
});

export type ConfigType = ReturnType<typeof config>;
