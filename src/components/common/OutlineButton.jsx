import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.button`
  padding: 6px 16px;
  border: 1px solid var(--gray300);
  background: var(--white);
  border-radius: 6px;
  cursor: pointer;
  transition: all.3s ease;
  &:hover {
    background: var(--gray100);
  }
`;

const OutlineLink = styled(Link)`
  padding: 6px 16px;
  border: 1px solid var(--gray300);
  background: var(--white);
  border-radius: 6px;
  cursor: pointer;
  transition: all.3s ease;
  font-size: 1.6rem;
  line-height: 2.6rem;
  &:hover {
    background: var(--gray100);
  }
  @media (max-width: 640px) {
    font-size: 1.4rem;
  }
`;

export default function OutlineButton({
  className,
  haveImg,
  imgSrc,
  children,
  to,
  ...props
}) {
  if (to) {
    return (
      <OutlineLink to={to} className={className}>
        {haveImg && <img src={imgSrc} alt={children} />}
        {children}
      </OutlineLink>
    );
  }
  return (
    <Button className={className} {...props}>
      {haveImg && <img src={imgSrc} alt={children} />}
      {children}
    </Button>
  );
}
