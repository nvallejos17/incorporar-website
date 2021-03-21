import { useState, useEffect } from 'react';
import {
  NavbarWrapper,
  NavbarBrand,
  NavbarNav,
  NavLink,
} from './Navbar.styled';

const Navbar = () => {
  const [scrollTop, setScrollTop] = useState(window.scrollY);

  useEffect(() => {
    const onScroll = () => setScrollTop(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.addEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <NavbarWrapper hasScrolled={scrollTop > 64}>
      <NavbarBrand>Incorporar</NavbarBrand>
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
    </NavbarWrapper>
  );
};

export default Navbar;
