import styled, { css } from 'styled-components';

interface ISectionTitle {
  alignTitle: 'left' | 'center' | 'right';
}

export const SectionWrapper = styled.section`
  min-height: calc(100vh - 96px);
`;

export const SectionContainer = styled.div`
  max-width: 1280px;
  height: 100%;

  margin: auto;
  padding: 2rem;
`;

export const SectionTitle = styled.h3<ISectionTitle>(({ alignTitle }) => {
  return css`
    margin-bottom: 2rem;
    padding: 2rem;

    font-size: 1.5rem;
    font-weight: normal;
    text-align: ${alignTitle};
    text-transform: uppercase;

    color: white;
    background: rgba(0, 0, 0, 0.2);
  `;
});
