import { useState, useEffect } from 'react';
import { NavbarWrapper } from './Navbar.styled';

const Navbar = () => {
  const [scrollTop, setScrollTop] = useState(window.scrollY);

  useEffect(() => {
    const onScroll = () => setScrollTop(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.addEventListener('scroll', onScroll);
  }, [scrollTop]);

  return <NavbarWrapper hasScrolled={scrollTop > 0} />;
};

export default Navbar;
