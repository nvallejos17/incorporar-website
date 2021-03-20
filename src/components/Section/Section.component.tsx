import { ReactNode } from 'react';
import { SectionWrapper } from './Section.styled';

interface ISection {
  children: ReactNode;
}

const Section = ({ children, ...props }: ISection) => (
  <SectionWrapper {...props}>{children}</SectionWrapper>
);

export default Section;
