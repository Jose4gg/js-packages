import Loading from '../icons/Loading';

import { Container } from './LoadingIndicator.styles';
import { LoadingIndicatorProps } from './LoadingIndicator.types';

const LoadingIndicator = ({
  className,
}: LoadingIndicatorProps): JSX.Element => {
  return (
    <Container className={className}>
      <Loading size={18} fillColor="currentColor" />
    </Container>
  );
};

export default LoadingIndicator;
