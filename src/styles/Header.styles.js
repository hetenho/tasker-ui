import { css } from "emotion";
import { Theme } from './variables';

export const header = css`
  height: ${Theme.headerHeight}px;
  color: rebeccapurple;
  font-family: ${Theme.fontHeading}, cursive;
  letter-spacing: 0px;
  text-transform: uppercase;
  background-color: ${Theme.colorWhite};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  align-items: center;
  top: ${Theme.spacingXs}px;
  padding: 0 ${Theme.spacing}px;
`;
