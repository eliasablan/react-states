import { Button } from "../ui/button";
import { create } from "zustand";

type Store = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

const useStore = create<Store>()((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

export default function Card() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 border bg-white p-4">
      <h2 className="text-2xl font-bold">Bad Zustand (Wrongfully used)</h2>
      <p className="max-w-sm text-center text-sm text-gray-500">
        In this example, we are using Zustand incorrectly. We are using
        destructuring like `const {"{ increment }"} = useStore()` which
        subscribes components to the entire state, causing unnecessary
        re-renders of button components every time the count changes.
      </p>
      <Counter />
      <div className="flex gap-4 *:rounded-md *:border-2 *:border-blue-900 *:bg-blue-500 *:px-3 *:py-1 *:text-white">
        <IncrementButton />
        <DecrementButton />
        <ResetButton />
      </div>
    </div>
  );
}

function Counter() {
  const { count } = useStore();
  return <div>Counter: {count}</div>;
}

function IncrementButton() {
  const { increment } = useStore();
  return <Button onClick={increment}>Increment</Button>;
}

function DecrementButton() {
  const { decrement } = useStore();
  return <Button onClick={decrement}>Decrement</Button>;
}

function ResetButton() {
  const { reset } = useStore();
  return <Button onClick={reset}>Reset</Button>;
}
