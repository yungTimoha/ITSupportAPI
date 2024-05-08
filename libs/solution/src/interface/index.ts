export interface CreateSolutionInput {
  content: string;
  inquiry_id: string;
  video_id?: string;
}

export interface UpdateSolutionInput {
  content?: string;
  inquiry_id?: string;
  video_id?: string;
}
