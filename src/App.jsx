import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Speaking from './pages/Speaking';
import Books from './pages/Books';
import { ExecutiveMasterclass, ClearLiftAfricaMentorship } from './pages/mentorship';
import Insights from './pages/Insights';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/speaking" element={<Speaking />} />
      <Route path="/books" element={<Books />} />
      <Route path="/insights" element={<Insights />} />
      
      <Route path="/mentorship">
        <Route 
          index 
          element={<Navigate to="/mentorship/executive-masterclass" replace />} 
        />
        <Route 
          path="executive-masterclass" 
          element={<ExecutiveMasterclass />} 
        />
        <Route 
          path="clearlift-africa"
          element={<ClearLiftAfricaMentorship />} 
        /> 
      </Route>
    </Routes>
  );
}

export default App;