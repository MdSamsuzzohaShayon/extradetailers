'use client'

import { IMessage } from '@/types';
import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';



// Define the shape of the context
interface ToastContextType {
  message: IMessage | null;
  setMessage: (error: IMessage | null) => void;
}

// Create context with a default value of undefined
const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Custom hook to use the error context
export const useMessage = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useMessage must be used within an ToastProvider');
  }
  return context;
};

// Provider component
function ToastProvider({ children }: PropsWithChildren) {
  const [message, setMessage] = useState<IMessage | null>(null);

      useEffect(() => {
          if (typeof window !== "undefined") {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              import("bootstrap/dist/js/bootstrap.bundle.min.js");
          }
      }, []);

  return (
    <ToastContext.Provider value={{ message, setMessage }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
