import { Suspense } from "react";
import Use_hook from "./components/Use_hook";
import WithoutUseHook from "./components/WithoutUseHook";

const App = () => {
  return (
    <Suspense>
      <Use_hook />
    </Suspense>
  );
};
export default App;
