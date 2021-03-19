import styled, { css } from 'styled-components';

export const FooterWrapper = styled.footer(
  ({ theme }) => css`
    height: 96px;

    background: ${theme.colors.primary};
  `
);
