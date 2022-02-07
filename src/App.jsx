import './assets/styles/global.scss';
import 'antd/dist/antd.css';
import { Routes, Navigate, Route } from 'react-router-dom';
import Home from './pages/Home';
import Index from './pages/Index';
import Competitions from './pages/Competitions';
import Competition from './pages/Competition';
import Team from './pages/Team';

const App = () => (
  <Index>
    <Routes>
      <Route exact index element={<Home />} />
      <Route path="/competitions/" element={<Competitions />} />
      <Route path="/competitions/:search" element={<Competitions />} />
      <Route path="/competition/:competitionId/*" element={<Competition />} />
      <Route path="/team/:teamId/*" element={<Team />} />
      <Route
        path="*"
        element={<Navigate to="/" />}
      />
    </Routes>
  </Index>
);

export default App;
