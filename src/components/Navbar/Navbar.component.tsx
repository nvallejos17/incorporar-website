import { useState, useEffect } from 'react';
import {
  NavbarWrapper,
  NavbarBrand,
  NavbarNav,
  NavLink,
  MobileNavToggler,
  MobileNav,
  MobileNavLink,
} from './Navbar.styled';

const Navbar = () => {
  const [scrollTop, setScrollTop] = useState(window.scrollY);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollTop(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.addEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => setInnerWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.addEventListener('resize', onResize);
  }, []);

  const toggleMenu = () => setMobileNav(!mobileNav);

  return (
    <NavbarWrapper hasScrolled={scrollTop > 64}>
      <NavbarBrand>Incorporar</NavbarBrand>

      {innerWidth >= 768 ? (
        <NavbarNav>
          <NavLink href='#'>
            <i className='fas fa-home' />
            Inicio
          </NavLink>
          <NavLink href='#about'>
            <i className='fas fa-video' />
            ¿Qué hacemos?
          </NavLink>
          <NavLink href='#contact'>
            <i className='fas fa-at' />
            Contacto
          </NavLink>
        </NavbarNav>
      ) : (
        <>
          <MobileNavToggler
            className='fas fa-bars fa-2x'
            onClick={toggleMenu}
          />

          {mobileNav && (
            <MobileNav hasScrolled={scrollTop > 64}>
              <MobileNavLink href='#'>Inicio</MobileNavLink>
              <MobileNavLink href='#about'>¿Qué hacemos?</MobileNavLink>
              <MobileNavLink href='#contact'>Contacto</MobileNavLink>
            </MobileNav>
          )}
        </>
      )}
    </NavbarWrapper>
  );
};

export default Navbar;
