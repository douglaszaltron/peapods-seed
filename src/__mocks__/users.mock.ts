import type { User } from '@/resources/users/interfaces';

export const usersMock: User = {
  id: 'd2d0e95f-ac14-4811-82c7-ce93fa984ef6',
  name: 'John Doe',
  email: 'john.doe@example.com',
  tenants: [
    {
      id: 'harvest',
      name: 'Harvest',
    },
  ],
} as const;
