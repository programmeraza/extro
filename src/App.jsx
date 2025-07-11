import "./App.scss";
import Contact from "./components/Contact/Contact";
import Dojd from "./components/Dojd/Dojd";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Otzivi from "./components/Otzivi/Otzivi";
import Uslugi from "./components/Uslugi/Uslugi";

function App() {
  return (
    <>
      <Header />
      <Dojd />
      <Uslugi />
      <Otzivi />
      <Contact />
    </>
  );
}

export default App;
