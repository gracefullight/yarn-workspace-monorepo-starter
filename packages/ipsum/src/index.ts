import { repeat } from "lodash";

export const ipsum = (s: string): string => {
  return repeat(s, 3);
};
