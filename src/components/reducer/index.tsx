import { CounterProvider, useCounter } from "./counter-context";
import { Button } from "../ui/button";

export default function Card() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 border bg-white p-4">
      <h2 className="text-2xl font-bold">React Reducer</h2>
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
  const { count } = useCounter();
  return <div>Counter: {count}</div>;
}

function IncrementButton() {
  const { increment } = useCounter();
  return <Button onClick={increment}>Increment</Button>;
}

function DecrementButton() {
  const { decrement } = useCounter();
  return <Button onClick={decrement}>Decrement</Button>;
}

function ResetButton() {
  const { reset } = useCounter();
  return <Button onClick={reset}>Reset</Button>;
}
