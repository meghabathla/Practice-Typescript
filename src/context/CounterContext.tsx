import React, { createContext, useContext, useState, ReactNode } from "react";

interface CreateContextProps {
  value: number;
  setCount: (num: number) => void;
}

interface CounterProviderProps {
  children: ReactNode;
}
const CounterContext = createContext<CreateContextProps | null>(null);

export const CounterProvider: React.FC<CounterProviderProps> = ({
  children,
}) => {
  const [count, setCount] = useState<number>(1);

  return (
    <CounterContext.Provider
      value={{
        value: count,
        setCount,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = (): CreateContextProps => {
  const context = useContext(CounterContext);
  if (context === null) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};
