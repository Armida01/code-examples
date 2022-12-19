import { Routes, Route } from 'react-router-dom';

// Components
import {
  Layouts
} from './components';

// Pages
import {
  Home,
} from './pages';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route element={<Layouts />}>
            <Route path="/" element={<Home />}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
