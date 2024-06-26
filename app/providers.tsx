// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'
import {ApolloProvider} from "@apollo/client";
import client from '../services/apollo-client';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    </ChakraProvider>
  );
}