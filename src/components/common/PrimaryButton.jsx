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
  border-radius: 6px;
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

export default function PrimaryButton({
  className,
  to,
  children,
  isSvg,
  ...props
}) {
  if (to) {
    return (
      <PrimaryLink to={to} className={className}>
        {isSvg ? (
          <svg
            width='20'
            height='20'
            xmlns='http://www.w3.org/2000/svg'
            xmlSpace='preserve'
            style={{ enableBackground: 'new 0 0 66.2 66.6' }}
            viewBox='0 0 64.2 64.6'
          >
            <path
              d='M41.4 12H20V3.3c0-2.1-2.5-3.2-4-1.7L1.8 15.2c-1 .9-1 2.5 0 3.4L16 32.2c1.5 1.4 4 .4 4-1.7V22h21.3C48.9 22 55 28.1 55 35.6v1.8c0 4.6-1 7.9-3.2 10-4.1 4-12.8 3.8-19.7 3.7-1.3 0-2.6-.1-3.8-.1-2.7 0-5 1.9-5.2 4.6-.2 2.9 2.1 5.4 5 5.4 1.2 0 2.5 0 3.9.1 1.6 0 3.2.1 4.9.1 7.7 0 16.2-.8 22-6.6 4.1-4 6.2-9.8 6.2-17.1v-1.8C65 22.6 54.4 12 41.4 12z'
              style={{ fill: '#fff' }}
            />
          </svg>
        ) : (
          <span>{children}</span>
        )}
      </PrimaryLink>
    );
  }
  return (
    <Button className={className} {...props}>
      {isSvg ? (
        <svg
          width='20'
          height='20'
          xmlns='http://www.w3.org/2000/svg'
          xmlSpace='preserve'
          style={{ enableBackground: 'new 0 0 66.2 62.6' }}
          viewBox='0 0 64.2 64.6'
        >
          <path
            d='M41.4 12H20V3.3c0-2.1-2.5-3.2-4-1.7L1.8 15.2c-1 .9-1 2.5 0 3.4L16 32.2c1.5 1.4 4 .4 4-1.7V22h21.3C48.9 22 55 28.1 55 35.6v1.8c0 4.6-1 7.9-3.2 10-4.1 4-12.8 3.8-19.7 3.7-1.3 0-2.6-.1-3.8-.1-2.7 0-5 1.9-5.2 4.6-.2 2.9 2.1 5.4 5 5.4 1.2 0 2.5 0 3.9.1 1.6 0 3.2.1 4.9.1 7.7 0 16.2-.8 22-6.6 4.1-4 6.2-9.8 6.2-17.1v-1.8C65 22.6 54.4 12 41.4 12z'
            style={{ fill: '#fff' }}
          />
        </svg>
      ) : (
        <span>{children}</span>
      )}
    </Button>
  );
}
