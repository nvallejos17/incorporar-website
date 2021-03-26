import styled, { css } from 'styled-components';

interface INavbarWrapper {
  hasScrolled: boolean;
}

export const NavbarWrapper = styled.nav<INavbarWrapper>(
  ({ theme, hasScrolled }) => css`
    height: ${hasScrolled ? 64 : 96}px;

    padding: 0 2rem;

    position: sticky;
    top: 0;
    z-index: 1;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 2px solid transparent;

    transition: height 0.3s ease, background 0.3s ease, border-color 0.3s ease;

    ${hasScrolled &&
    css`
      background: ${theme.colors.light};
      border-color: ${theme.colors.tint};
    `};
  `
);

export const NavbarBrand = styled.div(
  ({ theme }) => css`
    font-size: 1.25rem;
    text-transform: uppercase;
    color: ${theme.colors.shade};
  `
);

export const NavbarNav = styled.ul`
  list-style: none;

  display: flex;
  align-items: center;
`;

export const NavLink = styled.li(
  ({ theme }) => css`
    margin: 0 1rem;

    text-transform: uppercase;
    color: ${theme.colors.shade};

    i {
      margin-right: 0.5rem;
      font-size: inherit;

      opacity: 0;

      transition: opacity 0.3s ease;
    }

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      cursor: pointer;

      i {
        opacity: 1;
      }
    }
  `
);

export const MobileNavToggler = styled.i(
  ({ theme }) => css`
    font-size: 2rem;
    color: ${theme.colors.shade};

    cursor: pointer;
  `
);

interface IMobileNav {
  hasScrolled: boolean;
}

export const MobileNav = styled.ul<IMobileNav>(
  ({ theme, hasScrolled }) => css`
    width: 100%;

    position: fixed;
    top: ${hasScrolled ? 64 : 96}px;
    right: 0;
    z-index: 1;

    list-style: none;

    background: ${hasScrolled ? theme.colors.light : 'white'};
    border-bottom: 2px solid ${theme.colors.tint};

    transition: top 0.3s ease, background 0.3s ease, border-color 0.3s ease;
  `
);

export const MobileNavLink = styled.li(
  ({ theme }) => css`
    padding: 1rem;

    display: block;

    text-align: center;
    text-transform: uppercase;
    color: ${theme.colors.shade};

    &:hover {
      cursor: pointer;
    }
  `
);
