import styled, { css } from 'styled-components';

interface INavbarWrapper {
  hasScrolled: boolean;
}

export const NavbarWrapper = styled.nav<INavbarWrapper>(
  ({ theme, hasScrolled }) => css`
    height: ${hasScrolled ? 64 : 96}px;

    position: sticky;
    top: 0;

    background: ${theme.colors.primary};
  `
);
