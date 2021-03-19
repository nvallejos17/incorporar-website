import { ReactNode } from 'react';
import {
  SectionWrapper,
  SectionTitle,
  SectionContainer,
} from './Section.styled';

interface ISection {
  title?: string;
  alignTitle?: 'left' | 'center' | 'right';
  children: ReactNode;
}

const Section = ({
  title,
  alignTitle = 'left',
  children,
  ...props
}: ISection) => {
  return (
    <SectionWrapper {...props}>
      <SectionContainer>
        {title && <SectionTitle alignTitle={alignTitle}>{title}</SectionTitle>}
        {children}
      </SectionContainer>
    </SectionWrapper>
  );
};

export default Section;
