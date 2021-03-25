import styled, { css } from 'styled-components';
import Container from '../../components/Container/Container.component';

export const ContactWrapper = styled.section(
  ({ theme }) => css`
    /* min-height: calc(100vh - 64px); */
    background: ${theme.colors.light};
  `
);

export const ContactContainer = styled(Container)`
  padding: 4rem 2rem;
`;

export const ContactItem = styled.a(
  ({ theme }) => css`
    max-width: 480px;

    margin: 0 auto 1rem;
    padding: 1rem;

    display: flex;
    align-items: center;

    color: ${theme.colors.primary};

    border: 2px solid ${theme.colors.primary};

    transition: color 0.3s ease, border-color 0.3s ease;

    i {
      margin-right: 1rem;

      font-size: 3rem;
    }

    p {
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      color: ${theme.colors.shade};

      border-color: ${theme.colors.shade};
    }
  `
);
