/* @refresh reload */
import './index.css';

import { render } from 'solid-js/web';
import { Router, Route, Routes, useNavigate } from '@solidjs/router';


import Dekstop from './ULO/Beranda/Beranda-Dekstop';
import Login_Register from './ULO/Login & Register/Login_Register';
import LupaPass from './ULO/Lupa Password/lupapass';
import Baru_populer from './ULO/Baru&popup/Baru&Populer';
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
        <Route path="/Baru&Populer" element={<Baru_populer />} />
        <Route path="/login" element={<Login_Register />} />
      </Routes>
    </Router>
  ),
  root,
);
