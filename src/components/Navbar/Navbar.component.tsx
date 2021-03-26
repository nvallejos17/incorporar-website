import { useState, useEffect } from 'react';
import {
  NavbarWrapper,
  NavbarBrand,
  NavbarNav,
  NavLink,
  MobileNavToggler,
} from './Navbar.styled';

const Navbar = () => {
  const [scrollTop, setScrollTop] = useState(window.scrollY);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

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

  const toggleMenu = () => console.log('Toggle!');

  return (
    <NavbarWrapper hasScrolled={scrollTop > 64}>
      <NavbarBrand>Incorporar</NavbarBrand>

      {innerWidth >= 768 ? (
        <NavbarNav>
          <NavLink>
            <i className='fas fa-home' />
            Inicio
          </NavLink>
          <NavLink>
            <i className='fas fa-video' />
            ¿Qué hacemos?
          </NavLink>
          <NavLink>
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
        </>
      )}
    </NavbarWrapper>
  );
};

export default Navbar;
