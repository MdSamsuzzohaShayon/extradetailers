'use client'

/**
 * Reference - https://github.com/TanStack/query/tree/main/examples/react
 * App prefetching - https://github.com/TanStack/query/blob/main/examples/react/nextjs-app-prefetching/app/page.tsx
 * Suspense streaming - https://github.com/TanStack/query/blob/main/examples/react/nextjs-suspense-streaming/src/app/providers.tsx
 * Next.js - https://github.com/TanStack/query/tree/main/examples/react/nextjs
 */
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type * as React from 'react';
import { getQueryClient } from './get-query-client';

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
