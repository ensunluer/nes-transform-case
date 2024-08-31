import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// third-party
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
// components
import App from './App.tsx';

const queryClient: QueryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
