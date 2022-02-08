import { Spin } from 'antd';
import styles from './styles.module.scss';
import Ball from '../../assets/ball.component.svg';

const LoadingSpin = () => {
  const BallIcon = <Ball className={styles.spin} />;

  return (
    <Spin className={styles['loading-wrap']} size="large" indicator={BallIcon} />
  );
};

export default LoadingSpin;
