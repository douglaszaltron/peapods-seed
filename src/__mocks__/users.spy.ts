import { HttpStatusCode } from '@/services/http-client';
import type { UserResponse } from '../resources/users/interfaces/users';
import type { IUsersService } from '../resources/users/services/users.service';
import { usersMock } from './users.mock';

export class UsersServiceSpy implements IUsersService {
  callsCount = {
    getUser: 0,
  };

  async getUser(): UserResponse {
    this.callsCount.getUser += 1;
    return await Promise.resolve({
      data: usersMock,
      status: HttpStatusCode.ok,
    });
  }
}
