import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ResumePage from './components/ResumePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<ResumePage />} />
    </Routes>
  );
}

export default App;
