import { Result } from 'antd';

const LimitErrorMessage = () => (
  <Result
    status="warning"
    title="Oops! It looks like you&apos;ve exceeded your request limit! Try it in a minute."
  />
);

export default LimitErrorMessage;
