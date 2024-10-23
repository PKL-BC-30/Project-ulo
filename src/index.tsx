/* @refresh reload */
import './index.css';

import { render } from 'solid-js/web';
import { Router, Route, Routes } from '@solidjs/router';

import Dekstop from './ULO/Beranda/Beranda-Dekstop';

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
      </Routes>
    </Router>
  ),
  root,
);
