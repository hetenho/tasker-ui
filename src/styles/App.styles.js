import { css } from "emotion";
import { Theme } from './variables';

export const app = css`
  background-color: ${Theme.colorBackground};
  height: 100%;
  font-family: ${Theme.font}, Helvetica Neue, Helvetica, sans-serif;
`;

export const top = css`
  height: ${Theme.spacingXs}px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background: linear-gradient(90deg, ${Theme.colorPrimary} 0%, ${Theme.colorSecondary} 100%);
`;
