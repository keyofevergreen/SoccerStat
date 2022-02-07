import moment from 'moment';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';
import styles from './styles.module.scss';

const { RangePicker } = DatePicker;
const YEAR_FORMAT = 'YYYY-MM-DD';

const MyRangePicker = ({ rangeValue, handleChange }) => {
  const [dateFrom, dateTo] = rangeValue;

  return (
    <div className={styles['range-picker-wrap']}>
      <span>Sort matches by date range:</span>
      <RangePicker
        defaultValue={rangeValue.includes('') ? null : [moment(dateFrom, YEAR_FORMAT), moment(dateTo, YEAR_FORMAT)]}
        onChange={handleChange}
        size="large"
        format="YYYY-MM-DD"
      />
    </div>
  );
};

MyRangePicker.propTypes = {
  // eslint-disable-next-line
  rangeValue: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default MyRangePicker;
