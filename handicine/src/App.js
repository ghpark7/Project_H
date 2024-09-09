import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainContent from './components/MainContent';
import Navibar from './components/Navibar';
import QnAPage from './components/QnAPage';
import QnADetailPage from './components/QnADetailPage';
import FreeBoard from './components/FreeBoard';
import Pharmacy from './components/Pharmacy';

function App() {
  return (
    <Router>
      <div className="App">
        <Navibar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/qna" element={<QnAPage />} />
          <Route path="/board" element={<FreeBoard />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/qna/:id" element={<QnADetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;