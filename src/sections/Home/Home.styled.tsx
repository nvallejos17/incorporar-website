import styled, { css } from 'styled-components';
import Container from '../../components/Container/Container.component';

export const HomeWrapper = styled.section`
  min-height: calc(100vh - 96px);
`;

export const HomeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HomeLogo = styled.div(
  ({ theme }) => css`
    width: 150px;
    height: 150px;

    margin-top: 6rem;
    margin-bottom: 1.5rem;

    border: 2px solid ${theme.colors.primary};
    border-radius: 50%;
    background: ${theme.colors.primary};
  `
);

export const HomeTitle = styled.h2(
  ({ theme }) => css`
    font-size: 2.25rem;
    font-weight: normal;
    text-transform: uppercase;
    color: ${theme.colors.shade};
  `
);
