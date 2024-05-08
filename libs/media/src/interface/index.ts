import { MediaType } from '@prisma/client';

export interface CreateMediaInput {
  src: string;
  type: MediaType;
}

export interface UpdateMediaInput {
  src?: string;
  type?: MediaType;
}
