/* @refresh reload */
import './index.css';

import { render } from 'solid-js/web';
import { Router, Route, Routes, useNavigate } from '@solidjs/router';


import Dekstop from './ULO/Beranda/Beranda-Dekstop';
import Filter from './ULO/Filter Pencarian/FilterPencarian';
import Login_Register
 from './ULO/Login & Register/Login_Register';
const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(
  () => (
    <Router>
      <Routes>
        <Route path="/Beranda-Dekstop" element={<Dekstop />} />
        <Route path="/filter-pencarian" element={<Filter />} />
        <Route path="/login" element={<Login_Register />} />
      </Routes>
    </Router>
  ),
  root,
);
