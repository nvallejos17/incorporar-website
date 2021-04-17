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
import { scroller, animateScroll as scroll } from 'react-scroll';

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

  const scrollToTop = () => {
    scroll.scrollToTop();
    setMobileNav(false);
  };

  const scrollTo = (id: string) => {
    scroller.scrollTo(id, {
      smooth: true,
      offset: scrollTop > 64 ? -64 : -96,
    });
    setMobileNav(false);
  };

  return (
    <NavbarWrapper hasScrolled={scrollTop > 64}>
      <NavbarBrand>Incorporar</NavbarBrand>

      {innerWidth >= 768 ? (
        <NavbarNav>
          <NavLink onClick={scrollToTop}>
            <i className='fas fa-home' />
            Inicio
          </NavLink>
          <NavLink onClick={() => scrollTo('about')}>
            <i className='fas fa-video' />
            ¿Qué hacemos?
          </NavLink>
          <NavLink onClick={() => scrollTo('contact')}>
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
              <MobileNavLink onClick={scrollToTop}>Inicio</MobileNavLink>
              <MobileNavLink onClick={() => scrollTo('about')}>
                ¿Qué hacemos?
              </MobileNavLink>
              <MobileNavLink onClick={() => scrollTo('contact')}>
                Contacto
              </MobileNavLink>
            </MobileNav>
          )}
        </>
      )}
    </NavbarWrapper>
  );
};

export default Navbar;
