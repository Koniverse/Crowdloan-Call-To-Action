import { ModalContextProvider } from '@subwallet/react-ui';
import React from 'react';


export interface ModalProviderProps {
  children: React.ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps): React.ReactElement<ModalProviderProps> {
  return (
    <ModalContextProvider>
      {children}
    </ModalContextProvider>
  );
}
