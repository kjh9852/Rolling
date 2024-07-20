import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.button`
  padding: 14px 24px;
  background: var(--purple600);
  border-radius: 12px;
  color: var(--white);
  transition: all.3s ease;
  cursor: pointer;
  &:hover {
    background-color: var(--purple700);
  }
  &:active {
    background-color: var(--purple800);
  }
  &:focus {
    background-color: var(--purple800);
  }
`;

const PrimaryLink = styled(Link)`
  padding: 14px 24px;
  background: var(--purple600);
  border-radius: 12px;
  color: var(--white);
  transition: all.3s ease;
  cursor: pointer;
  &:hover {
    background-color: var(--purple700);
  }
  &:active {
    background-color: var(--purple800);
  }
  &:focus {
    background-color: var(--purple800);
  }
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
