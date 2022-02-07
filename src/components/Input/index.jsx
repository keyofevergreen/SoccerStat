import { Input } from 'antd';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const MyInput = ({ placeholder, value, handleChange }) => (
  <Input
    value={value}
    onChange={(e) => handleChange(e.target.value)}
    size="large"
    placeholder={placeholder}
    className={styles['input-wrap']}
  />
);

MyInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default MyInput;
