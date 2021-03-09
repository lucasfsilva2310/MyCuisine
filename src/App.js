import { Routes } from "./routes/Routes";
import "./global.css";
import { HamburguerMenuProvider } from "./contexts/HamburguerMenuContext";

function App() {
  return (
    <HamburguerMenuProvider>
      <Routes />
    </HamburguerMenuProvider>
  );
}

export default App;
