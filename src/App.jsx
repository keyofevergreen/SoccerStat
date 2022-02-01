import './assets/styles/global.scss';
import 'antd/dist/antd.css';
import { Routes, Navigate, Route } from 'react-router-dom';
import Home from './pages/Home';
import Index from './pages/Index';
import Competition from './pages/Competition';
import Teams from './pages/Teams';

const App = () => (
  <Index>
    <Routes>
      <Route index element={<Home />} />
      <Route path="competition" element={<Competition />} />
      <Route path="teams" element={<Teams />} />
      <Route
        path="*"
        element={<Navigate to="/" />}
      />
    </Routes>
  </Index>
);

export default App;
