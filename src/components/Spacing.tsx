import styled from 'styled-components';

export const Padding = styled.div<{
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
}>`
  padding-left: ${(props) => props?.left || 0}px;
  padding-bottom: ${(props) => props?.bottom || 0}px;
  padding-top: ${(props) => props?.top || 0}px;
  padding-right: ${(props) => props?.right || 0}px;
`;

export const Margin = styled.div<{
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
}>`
  margin-left: ${(props) => props?.left || 0}px;
  margin-bottom: ${(props) => props?.bottom || 0}px;
  margin-top: ${(props) => props?.top || 0}px;
  margin-right: ${(props) => props?.right || 0}px;
`;
