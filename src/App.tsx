import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { TechnologiesList } from './pages/TechnologiesList';
import { EditorPage } from './pages/EditorPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/live-editor" replace />} /> */}
        <Route path="/" element={<TechnologiesList />} />
        {/* <Route path="/live-editor" element={<TechnologiesList />} /> */}
        <Route path="/live-editor/:technology" element={<EditorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;