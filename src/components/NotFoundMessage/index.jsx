import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const NotFoundMessage = ({ children }) => (
  <div className={styles['not-found-message']}>
    {children}
  </div>
);

NotFoundMessage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NotFoundMessage;
