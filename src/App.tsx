import { scan } from "react-scan";
import ReactContextCard from "./components/react-context";
import ReducerCard from "./components/reducer";
import ReduxCard from "./components/redux";
import ZustandCard from "./components/zustand";

scan({
  enabled: process.env.NODE_ENV !== "production",
});

function App() {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 gap-4 bg-black p-4 md:grid-cols-2">
      <ReactContextCard />
      <ReducerCard />
      <ReduxCard />
      <ZustandCard />
    </div>
  );
}

export default App;
