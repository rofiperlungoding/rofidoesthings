import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ResumePage from './components/ResumePage';
import ProjectDetailPage from './components/ProjectDetailPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/project/:projectName" element={<ProjectDetailPage />} />
    </Routes>
  );
}

export default App;
