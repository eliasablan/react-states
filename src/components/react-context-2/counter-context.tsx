/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";

// Contexts separados
const CountContext = createContext<number | undefined>(undefined);
const CounterActionsContext = createContext<
  | {
      increment: () => void;
      decrement: () => void;
      reset: () => void;
    }
  | undefined
>(undefined);

export const CounterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [count, setCount] = useState(0);

  // 🧠 Las funciones no cambian de referencia gracias a useCallback
  const increment = useCallback(() => setCount((c) => c + 1), []);
  const decrement = useCallback(() => setCount((c) => c - 1), []);
  const reset = useCallback(() => setCount(0), []);

  const actions = useMemo(
    () => ({ increment, decrement, reset }),
    [increment, decrement, reset],
  );

  return (
    <CountContext.Provider value={count}>
      <CounterActionsContext.Provider value={actions}>
        {children}
      </CounterActionsContext.Provider>
    </CountContext.Provider>
  );
};

// Custom hooks para consumir de forma granular
export const useCount = () => {
  const context = useContext(CountContext);
  if (context === undefined) {
    throw new Error("useCount must be used within CounterProvider");
  }
  return context;
};

export const useCounterActions = () => {
  const context = useContext(CounterActionsContext);
  if (context === undefined) {
    throw new Error("useCounterActions must be used within CounterProvider");
  }
  return context;
};
