import { system } from 'styled-system';

export interface OutlineProps {
  outline?: string;
}

export const outline = system({
  outline: {
    property: 'outline',
  },
});
