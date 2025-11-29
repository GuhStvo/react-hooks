import { Header } from "./assets/components/header/header";
import { EffectEx02 } from "./assets/components/useEffect/ex02";
import { UseEffect03 } from "./assets/components/useEffect/ex03";
import { UseEffect04 } from "./assets/components/useEffect/ex04";
import { UseEffect } from "./assets/components/useEffect/useEffect";
import { UseState2 } from "./assets/components/useEffect/useEffect2";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseState2/> */}
      {/* <EffectEx01 /> */}
      {/* <EffectEx02 /> */}
      {/* <UseEffect03 /> */}
      <UseEffect04 /> 
    </div>
  );
}

export default App;
