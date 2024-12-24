import type { ApiException, ErrorInfo } from '../interfaces/http-client';

export class ApiError implements ApiException {
  slug: string;
  message: string;
  details?: ErrorInfo[];

  constructor(slug: string, message: string, details?: ErrorInfo[]) {
    this.slug = slug;
    this.message = message;
    this.details = details;
  }
}
