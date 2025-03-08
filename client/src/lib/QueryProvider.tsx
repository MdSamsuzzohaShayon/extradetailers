'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { createContext, PropsWithChildren, useContext } from 'react';


// Create a context that holds both ldoIdUrl and ldoId
interface LdoContextType {
  ldoIdUrl: string;
  ldoId: string | null;
}

export const LdoContext = createContext<LdoContextType>({
  ldoIdUrl: '',
  ldoId: null,
});

export function useLdoId() {
  return useContext(LdoContext);
}

function QueryProvider({ children }: PropsWithChildren) {

    const queryClient = new QueryClient()



  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export default QueryProvider;