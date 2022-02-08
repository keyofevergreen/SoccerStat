import { Helmet } from 'react-helmet';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import Ball from '../../assets/ball.component.svg';
import styles from './styles.module.scss';

const Home = () => {
  const navigate = useNavigate();
  const onClick = (e) => {
    e.preventDefault();
    navigate('/competitions');
  };

  return (
    <>
      <Helmet>
        <title>SoccerStat - Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home page" />
      </Helmet>
      <div className={styles['welcome-header']}>
        <Ball />
        <h1>Welcome to SoccerStat.</h1>
        <h2>League. Teams. Matches. Here.</h2>
        <div className={styles['btn-wrap']}>
          <Button type="primary" shape="round" size="large" block onClick={onClick}>
            Let&apos;s start.
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
