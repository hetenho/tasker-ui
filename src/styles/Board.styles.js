import { css } from "emotion";
import { Theme } from "./variables";

export const board = css`
  display: flex;
  width: 100%;
  padding: ${Theme.spacing}px;
`;

export const track = css`
  width: ${Theme.trackWidth};
`;