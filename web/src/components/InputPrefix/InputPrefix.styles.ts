import styled from 'styled-components';

import { border, BorderProps, width, WidthProps } from 'styled-system';

type LabelProps = BorderProps & WidthProps;

export const Label = styled.label<LabelProps>`
  display: flex;
  font-weight: bold;
  font-size: 18px;
  padding: 0 15px;
  border-radius: 4px;
  align-items: center;
  color: #9c9c9c;
  ${width}
  ${border};
`;
