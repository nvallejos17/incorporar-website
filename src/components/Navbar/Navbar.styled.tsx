import styled, { css } from 'styled-components';

interface INavbarWrapper {
  hasScrolled: boolean;
}

export const NavbarWrapper = styled.nav<INavbarWrapper>(
  ({ theme, hasScrolled }) => css`
    height: ${hasScrolled ? 64 : 96}px;

    position: sticky;
    top: 0;

    border-bottom: 1px solid ${theme.colors.primary};

    transition: height 0.5s ease;
  `
);
