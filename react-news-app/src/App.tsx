import { Routes, Route } from 'react-router-dom';

// Components
import {
  Layouts
} from './components';

// Pages
import {
  News
} from './pages';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route element={<Layouts />}>
            <Route path="/" element={<News category="general"/>}/>
            <Route path="/business" element={<News category="business"/>}/>
            <Route path="/sports" element={<News category="sports"/>}/>
            <Route path="/science" element={<News category="science"/>}/>
            <Route path="/health" element={<News category="health"/>}/>
            <Route path="/entertainment" element={<News category="entertainment"/>}/>
            <Route path="/technology" element={<News category="technology"/>}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
