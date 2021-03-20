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

    transition: height 0.5s ease, background 0.5s ease;

    ${hasScrolled &&
    css`
      background: ${theme.colors.light};
      box-shadow: 0 2px 4px ${theme.colors.light};
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

    transition: color 0.5s ease;

    i {
      margin-right: 0.25rem;
      font-size: inherit;
    }

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      cursor: pointer;
      color: ${theme.colors.tint};
    }
  `
);
