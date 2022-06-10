import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import CharactersPage from '../pages/CharactersPage/CharactersPage';
import CharacterDetailsPage from '../pages/CharacterDetailsPage/CharacterDetailsPage';

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<CharactersPage />} />
      <Route path="/character-details" element={<CharacterDetailsPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
