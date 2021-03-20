import { ReactNode } from 'react';
import { ContainerWrapper } from './Container.styled';

interface IContainer {
  children: ReactNode;
}

const Container = ({ children, ...props }: IContainer) => (
  <ContainerWrapper {...props}>{children}</ContainerWrapper>
);

export default Container;
