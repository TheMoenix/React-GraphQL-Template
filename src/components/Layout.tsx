import styled from "styled-components";

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexCenterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

export const FlexEndDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const FlexStartDiv = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const FlexCenterLine = styled.span`
  display: flex;
  align-items: center;
  align-content: center;
`;

export const FlexCenterRow = styled.span`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

export const FlexCenterColumnAndRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100%;
`;

export const FlexStartColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
`;

export const FlexSpaceBetween = styled.span`
  display: flex;
  justify-content: space-between;
`;

export const FlexSpaceBetweenDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const FlexSpaceBetweenColumn = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;
`;

export const FixedBottomContainer = styled.div<{
  height: number;
  color: string;
}>`
  position: fixed;
  padding: 10px;
  left: 0;
  bottom: 0;
  z-index: 9999;
  background: ${(props) => props.color};
  width: 100%;
  height: ${(props) => props.height}px;
`;

export const VerticalScrollContainer = styled.div<{
  maxHeight: number;
}>`
  max-height: ${(props) => props.maxHeight}px;
  overflow-y: auto;
`;

export const FlexCenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const CardCover = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-bottom: 2px solid #e9e9e9;

  overflow-x: hidden;
`;
