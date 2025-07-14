import {
  CounterProvider,
  useCount,
  useCounterActions,
} from "./counter-context";
import { Button } from "../ui/button";

export default function Card() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 border bg-white p-4">
      <h2 className="text-center text-2xl font-bold">
        React Context with Multiple Contexts
      </h2>
      <p className="max-w-sm text-center text-sm text-gray-500">
        In this example, we are using two contexts to manage the state and the
        actions separately and avoid re-rendering the component when the state
        changes.
      </p>
      <CounterProvider>
        <Counter />
        <div className="flex gap-4 *:rounded-md *:border-2 *:border-blue-900 *:bg-blue-500 *:px-3 *:py-1 *:text-white">
          <IncrementButton />
          <DecrementButton />
          <ResetButton />
        </div>
      </CounterProvider>
    </div>
  );
}

function Counter() {
  const count = useCount();
  return <div>Counter: {count}</div>;
}

function IncrementButton() {
  const { increment } = useCounterActions();
  return <Button onClick={increment}>Increment</Button>;
}

function DecrementButton() {
  const { decrement } = useCounterActions();
  return <Button onClick={decrement}>Decrement</Button>;
}

function ResetButton() {
  const { reset } = useCounterActions();
  return <Button onClick={reset}>Reset</Button>;
}
