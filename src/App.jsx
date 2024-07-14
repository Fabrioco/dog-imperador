import { DogBread } from "./components/dogBread";
import { DogPlatter } from "./components/dogPlatter";
import { Pressed } from "./components/dogsPressed";
import { Drinks } from "./components/drinks";
import { DogGratinated } from "./components/dogGratinated";
import { Header } from "./components/header";
import { useRef } from "react";

function App() {
  const pressedRef = useRef(null);
  const dogBreadRef = useRef(null);
  const dogPlatterRef = useRef(null);
  const dogGratinatedRef = useRef(null);
  const drinksRef = useRef(null);

  const scrollToPressed = () =>
    pressedRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToDogBread = () =>
    dogBreadRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToDogPlatter = () =>
    dogPlatterRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToDogGratinated = () =>
    dogGratinatedRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToDrinks = () =>
    drinksRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div>
      <Header
        scrollToPressed={scrollToPressed}
        scrollToDogBread={scrollToDogBread}
        scrollToDogPlatter={scrollToDogPlatter}
        scrollToDogGratinated={scrollToDogGratinated}
        scrollToDrinks={scrollToDrinks}
      />
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center mb-8">
        <div ref={pressedRef} className="mt-32">
          <Pressed />
        </div>
        <div ref={dogBreadRef}>
          <DogBread />
        </div>
        <div ref={dogPlatterRef}>
          <DogPlatter />
        </div>
        <div ref={dogGratinatedRef}>
          <DogGratinated />
        </div>
        <div ref={drinksRef}>
          <Drinks />
        </div>
      </div>
    </div>
  );
}

export default App;
