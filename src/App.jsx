import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Courses from './components/Courses';

const App = () => {
  return (
    <div className="overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </div>
  );
};

export default App;
