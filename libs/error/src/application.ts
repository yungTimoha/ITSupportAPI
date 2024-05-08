export class ApplicationError extends Error {
  constructor(
    public message: string,
    public code: string,
    public status: number,
  ) {
    super();
  }
}
