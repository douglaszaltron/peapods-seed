import { PageError } from '@/components/layout/page-error';
import { PageLoading } from '@/components/layout/page-loading';
import queryClient from '@/services/query-client';

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { ptBR } from '@mui/material/locale';
import { QueryClientProvider } from '@tanstack/react-query';
import { type PropsWithChildren, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export default function Providers({ children }: PropsWithChildren) {
  const preset = {
    palette: {
      primary: {
        main: '#9cee69',
      },
      secondary: {
        main: '#000000',
      },
    },
  };

  return (
    <ThemeProvider theme={createTheme(preset, ptBR)}>
      <CssBaseline />
      <ErrorBoundary fallback={<PageError />}>
        <Suspense fallback={<PageLoading />}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
}
