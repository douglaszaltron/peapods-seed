import type { HttpClient } from '@/services/http-client';
import type { UserResponse } from '../interfaces/users';

export interface IUsersService {
  getUser(): UserResponse;
}

export class UsersService implements IUsersService {
  private readonly httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async getUser(): UserResponse {
    return await this.httpClient.get('/v1/users');
  }
}
