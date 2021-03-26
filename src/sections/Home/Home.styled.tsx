import styled from 'styled-components';
import Container from '../../components/Container/Container.component';

export const HomeWrapper = styled.section`
  min-height: calc(100vh - 96px);
`;

export const HomeContainer = styled(Container)`
  max-width: 480px;
  padding: 2rem 0 0;
`;

export const HomeBrand = styled.img`
  width: 100%;

  margin: 0 auto;

  display: block;
`;
