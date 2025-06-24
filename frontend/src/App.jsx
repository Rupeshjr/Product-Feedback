import './App.css';
import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage.jsx';
import ViewFeedback from './pages/ViewFeedback.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/feedbacks/:id" element={<ViewFeedback />} />
      </Routes>
    </div>
  );
}

export default App;
