import { FooterWrapper } from './Footer.styled';

const Footer = () => (
  <FooterWrapper>
    <p>
      Copyright &copy; {new Date().getFullYear()} Incorporar. Todos los derechos
      reservados.
    </p>
  </FooterWrapper>
);

export default Footer;
