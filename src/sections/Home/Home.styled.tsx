import styled, { css } from 'styled-components';
import Section from '../../components/Section/Section.component';

export const HomeWrapper = styled(Section)`
  height: calc(100vh - 96px);
  padding: 2rem;
  padding-top: 0;
`;

export const HomeContainer = styled.div(
  ({ theme }) => css`
    height: 100%;
    padding: 0 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
);

export const HomeLogo = styled.div(
  ({ theme }) => css`
    width: 150px;
    height: 150px;

    margin-bottom: 1rem;

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
