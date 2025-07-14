/* eslint-disable react-refresh/only-export-components */
import { createContext, use, useReducer } from "react";

type CounterState = {
  count: number;
};

type CounterAction =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "RESET" };

type CounterContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

const counterReducer = (
  state: CounterState,
  action: CounterAction,
): CounterState => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

const initialState: CounterState = { count: 0 };

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const CounterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <CounterContext.Provider
      value={{ count: state.count, increment, decrement, reset }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const context = use(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};
