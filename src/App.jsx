import './assets/styles/global.scss';
import 'antd/dist/antd.css';
import { Routes, Navigate, Route } from 'react-router-dom';
import Home from './pages/Home';
import Index from './pages/Index';
import Competition from './pages/Competitions';

const App = () => (
  <Index>
    <Routes>
      <Route index element={<Home />} />
      <Route exact path="competitions/*" element={<Competition />} />
      <Route path="competitions/:search" element={<Competition />} />
      <Route
        path="*"
        element={<Navigate to="/" />}
      />
    </Routes>
  </Index>
);

export default App;
