import { Provider, useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { store, type RootState } from "./store";
import { decrement, increment, reset } from "./slice";

export default function Card() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 border bg-white p-4">
      <h2 className="text-2xl font-bold">Redux</h2>
      <Provider store={store}>
        <Counter />
        <div className="flex gap-4 *:rounded-md *:border-2 *:border-blue-900 *:bg-blue-500 *:px-3 *:py-1 *:text-white">
          <IncrementButton />
          <DecrementButton />
          <ResetButton />
        </div>
      </Provider>
    </div>
  );
}

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  return <div>Counter: {count}</div>;
}

function IncrementButton() {
  const dispatch = useDispatch();
  return <Button onClick={() => dispatch(increment())}>Increment</Button>;
}

function DecrementButton() {
  const dispatch = useDispatch();
  return <Button onClick={() => dispatch(decrement())}>Decrement</Button>;
}

function ResetButton() {
  const dispatch = useDispatch();
  return <Button onClick={() => dispatch(reset())}>Reset</Button>;
}
