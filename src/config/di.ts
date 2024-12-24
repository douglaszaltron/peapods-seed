import { UsersServiceSpy } from '@/__mocks__/users.spy';
import { API_BASE_URL } from '@/commons/constants/environment';
import { createUsersQuery } from '@/resources/users/queries/users';
import { UsersService } from '@/resources/users/services/users.service';
import HttpClient from '@/services/http-client';

export const createDependencies = (useMocks = false) => {
  const httpClient = HttpClient({ baseURL: API_BASE_URL });

  const users = useMocks ? new UsersServiceSpy() : new UsersService(httpClient);
  const usersQueryFactory = createUsersQuery(users);

  return { usersQueryFactory };
};
