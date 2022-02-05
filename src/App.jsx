import './assets/styles/global.scss';
import 'antd/dist/antd.css';
import { Routes, Navigate, Route } from 'react-router-dom';
import Home from './pages/Home';
import Index from './pages/Index';
import Competitions from './pages/Competitions';
import Competition from './pages/Competition';

const App = () => (
  <Index>
    <Routes>
      <Route index element={<Home />} />
      <Route exact path="competitions/*" element={<Competitions />} />
      <Route path="competitions/:search" element={<Competitions />} />
      <Route path="competition/:competitionId" element={<Competition />} />
      <Route
        path="*"
        element={<Navigate to="/" />}
      />
    </Routes>
  </Index>
);

export default App;
