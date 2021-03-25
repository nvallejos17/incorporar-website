import {
  ContactContainer,
  ContactItem,
  ContactWrapper,
} from './Contact.styled';

const Contact = ({ ...props }) => (
  <ContactWrapper {...props}>
    <ContactContainer>
      <ContactItem href='https://api.whatsapp.com/send?phone=5492944290001'>
        <i className='fab fa-whatsapp-square' />
        <p>+54 9 (294) 429-0001</p>
      </ContactItem>
      <ContactItem href='mailto:incorporar.edu@gmail.com'>
        <i className='fas fa-envelope-square' />
        <p>incorporar.edu@gmail.com</p>
      </ContactItem>
      <ContactItem
        href='https://www.instagram.com/in_corporar/'
        target='_blank'
      >
        <i className='fab fa-instagram-square' />
        <p>in_corporar</p>
      </ContactItem>
    </ContactContainer>
  </ContactWrapper>
);

export default Contact;
