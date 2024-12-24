import {
  type QueryClient,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import type { IUsersService } from '../services/users.service';

const messages = {
  loading: 'Estamos processando seu usuário...',
  success: {
    title: 'Usuário carregado com sucesso!',
    description: 'Usuário carregado com sucesso.',
  },
  error: {
    title: 'Ops! Não conseguimos carregar seu usuário.',
    description: 'Por favor, tente novamente.',
  },
};

const queryKeys = {
  all: ['users', 'create-user'],
  send: 'create-user',
} as const;

export const createUsersMutation = (usersService: IUsersService) => ({
  getQueryKey: () => queryKeys,
  getOptions: (queryClient: QueryClient) => ({
    mutationKey: queryKeys.all,
    mutationFn: () => {
      return usersService.getUser();
    },
    onMutate: () => {
      console.log(messages.loading, {
        key: queryKeys.send,
        loading: true,
      });
    },
    onSuccess: () => {
      console.log(messages.success.description, {
        key: queryKeys.send,
        title: messages.success.title,
        color: 'success',
      });
    },
    onError: () => {
      console.log(messages.error.description, {
        key: queryKeys.send,
        title: messages.error.title,
        color: 'error',
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.all,
      });
    },
  }),
});

export type UsersMutationFactory = ReturnType<typeof createUsersMutation>;

export const useUsers = (usersMutationFactory: UsersMutationFactory) => {
  const queryClient = useQueryClient();
  return useMutation(usersMutationFactory.getOptions(queryClient));
};
