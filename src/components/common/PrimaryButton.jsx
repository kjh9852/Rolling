import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.button`
  padding: 14px 24px;
  background: var(--purple600);
  border-radius: 16px;
  color: var(--white);
`;

const PrimaryLink = styled(Link)`
  padding: 14px 24px;
  background: var(--purple600);
  border-radius: 16px;
  color: var(--white);
`;

export default function PrimaryButton({ className, to, children, ...props }) {
  if (to) {
    return (
      <PrimaryLink to={to} className={className}>
        <span>{children}</span>
      </PrimaryLink>
    );
  }
  return (
    <Button className={className} {...props}>
      <span>{children}</span>
    </Button>
  );
}
