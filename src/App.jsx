import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Speaking from './pages/Speaking';
import Books from './pages/Books';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/speaking" element={<Speaking />} />
      <Route path="/books" element={<Books />} />
    </Routes>
  );
}

export default App;