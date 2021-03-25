import styled, { css } from 'styled-components';

export const FooterWrapper = styled.footer(
  ({ theme }) => css`
    padding: 2rem;

    background: ${theme.colors.shade};

    p {
      font-size: 0.75rem;
      text-align: center;
      color: ${theme.colors.light};
    }
  `
);
