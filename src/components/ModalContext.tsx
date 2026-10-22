import { createContext, useContext, useState, type ReactNode } from 'react';

interface ModalContextType {
  openHealthTest: () => void;
  closeHealthTest: () => void;
  isHealthTestOpen: boolean;
}

const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isHealthTestOpen, setHealthTestOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isHealthTestOpen,
        openHealthTest: () => setHealthTestOpen(true),
        closeHealthTest: () => setHealthTestOpen(false),
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('useModal must be used within ModalProvider');
  return ctx;
}
