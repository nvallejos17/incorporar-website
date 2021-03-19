import { css } from 'styled-components';

export const withBoxShadow = (color: string) => css`
  box-shadow: 0 2px 4px ${color};
`;
