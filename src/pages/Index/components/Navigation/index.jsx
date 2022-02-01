import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const Navigation = () => (
  <div className={styles['nav-holder']}>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/competitions">Competitions</Link></li>
    </ul>
  </div>
);

export default Navigation;
