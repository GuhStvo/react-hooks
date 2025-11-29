import { Header } from "./assets/components/header/header";
import { UseEffect } from "./assets/components/useEffect";
import { UseState2 } from "./assets/components/useEffect2";
import { UseState } from "./assets/components/UseState";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      <UseState2/>
    </div>
  );
}

export default App;
