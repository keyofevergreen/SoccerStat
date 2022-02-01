import PropTypes from 'prop-types';
import { BackTop } from 'antd';
import Navigation from './components/Navigation';
import styles from './styles.module.scss';

const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};

const Index = ({ children }) => (
  <div>
    <Navigation />
    <div className={styles.wrapper}>
      {children}
    </div>
    <BackTop>
      <div style={style}>UP</div>
    </BackTop>
  </div>
);

Index.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Index;
