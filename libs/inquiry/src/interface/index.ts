import { Category, Department, InquiryStatus, Priority } from '@prisma/client';

export interface CreateInquiryInput {
  content: string;
  userId: string;
  category: Category;
  status?: InquiryStatus;
  priority?: Priority;
  department?: Department;
}

export interface UpdateInquiryInput {
  content?: string;
  userId?: string;
  status?: InquiryStatus;
  priority?: Priority;
  department?: Department;
  category?: Category;
}

export interface SubmitInquiryInput {
  userId: string;
  content: string;
  category: Category;
}
