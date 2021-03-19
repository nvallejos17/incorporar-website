import { ReactNode } from 'react';
import { SectionWrapper, SectionContainer } from './Section.styled';

interface ISection {
  children: ReactNode;
}

const Section = ({ children, ...props }: ISection) => {
  return (
    <SectionWrapper {...props}>
      <SectionContainer>{children}</SectionContainer>
    </SectionWrapper>
  );
};

export default Section;
