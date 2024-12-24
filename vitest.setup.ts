import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

// Mock das traduções
vi.mock('@/app/i18n', () => ({
  t: (key: string) => key,
}));

// Mock do useNavigate
vi.mock('react-router-dom', () => ({
  useNavigate: () => vi.fn(),
}));
