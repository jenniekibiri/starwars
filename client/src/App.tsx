import { Card } from "./components/Card";
import { Header } from "./components/Header";
//route
import { Route, Routes } from "react-router-dom";
import { Person } from "./components/Person";
function App() {
  return (
    <div className="App">
		 <Header />
      <Routes>
       
        <Route path="/" element={<Card />} />
        <Route path="/person/:name" element={<Person  />} />
      </Routes>
    </div>
  );
}

export default App;
