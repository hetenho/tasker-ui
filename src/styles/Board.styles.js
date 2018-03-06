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

export const boardActions = css`
  padding: ${Theme.spacingMd}px ${Theme.spacing}px ${Theme.spacing}px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const actionBar = css`
  display: inline-block;
  text-align: center;
  margin-left: auto;
`;