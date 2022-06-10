import { BrowserRouter, Link, Route, Routes,  } from 'react-router-dom';
import People from './components/People';
import Person from './components/Person';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<People/>}/>
          <Route path=':id' element={<Person/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
