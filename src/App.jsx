import Dashboard from "./pages/Dashboard";
import { FinanceProvider } from "./context/FinanceContext";

function App() {

  return (
    <FinanceProvider>
      <Dashboard/>
    </FinanceProvider>
  );
}

export default App;