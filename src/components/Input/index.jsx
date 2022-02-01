import { Input } from 'antd';
import PropTypes from 'prop-types';
import { SearchOutlined } from '@ant-design/icons';

const MyInput = ({ placeholder, value, handleChange }) => (
  <Input
    value={value}
    onChange={(e) => handleChange(e.target.value)}
    size="large"
    placeholder={placeholder}
    prefix={<SearchOutlined />}
  />
);

MyInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default MyInput;
