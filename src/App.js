import "./App.css";
import ListAtas from "./pages/ListAtas";
import FormAta from "./pages/FormAta";
// import DataTeste from "./components/DataTeste";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <ListAtas /> */}
      {/* <FormAta></FormAta> */}
      <Router>
        <Routes>
          <Route path="/" element={<ListAtas />} />
          <Route path="/criaNovaAta" element={<FormAta />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
