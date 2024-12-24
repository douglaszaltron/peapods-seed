import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import type { IUsersService } from '../services/users.service';

const messages = {
  error: {
    title: 'Ops! Não conseguimos carregar os usuários.',
    description: 'Por favor, tente novamente.',
  },
};

const queryKeys = {
  users: 'users',
};

export const createUsersQuery = (usersService: IUsersService) => ({
  getQueryKey: () => queryKeys,
  getOptions: () => {
    return {
      queryFn: () => {
        return usersService.getUser();
      },
      queryKey: [queryKeys.users],
      retry: 1,
      staleTime: 10_000,
    };
  },
});

export type UsersQueryFactory = ReturnType<typeof createUsersQuery>;

export const useUsers = (usersQueryFactory: UsersQueryFactory) => {
  const query = useQuery(usersQueryFactory.getOptions());

  useEffect(() => {
    if (query.error) {
      console.log(messages.error.description, {
        key: queryKeys.users,
        title: messages.error.title,
        color: 'error',
      });
    }
  }, [query.error]);

  return query;
};
