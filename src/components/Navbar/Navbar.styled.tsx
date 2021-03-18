import styled, { css } from 'styled-components';

export const NavbarWrapper = styled.nav(
  ({ theme }) => css`
    height: 96px;

    position: sticky;
    top: 0;

    background: ${theme.colors.primary};
  `
);
