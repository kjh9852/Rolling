import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MessageLink = styled(Link)``;

const Card = styled.div``;

export default function MessageContainer({
  className,
  children,
  to,
  isEdit,
  ...props
}) {
  if (isEdit) {
    return <Card className={className}>{children}</Card>;
  }
  return (
    <MessageLink to={to} className={className}>
      {children}
    </MessageLink>
  );
}
