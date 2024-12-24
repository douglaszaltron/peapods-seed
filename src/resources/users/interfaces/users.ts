import type { ApiResponse } from '@/services/http-client';

export interface Tenant {
  id: string;
  name: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  tenants: Tenant[];
}

export type UserResponse = ApiResponse<User>;
