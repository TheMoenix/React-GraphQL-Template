import styled from "styled-components";

export const PrimaryText = styled.span<{
  fontSize?: number;
  fontWeight?: string;
  color?: string;
}>`
  color: ${(props) =>
    props.color ? props.color : "var(--juleb-color-primary)"};
  font-size: ${(props) => (props.fontSize ? props.fontSize : 1)}em;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "normal")};
`;

export const TextCenter = styled.div`
  text-align: center;
`;

export const NormalText = styled.div<{
  size?: number;
  fontWeight?: string;
  lineHeight?: number;
  color?: string | "primary";
  bold?: boolean;
}>`
  font-weight: ${(props) => (props.bold ? "bold" : "normal")} !important;
  color: ${(props) =>
    props.color
      ? props.color === "primary"
        ? "var(--juleb-color-primary)"
        : props.color
      : "#000000"};
  font-size: ${(props) => (props.size ? props.size : 1)}em;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "normal")};
  line-height: ${(props) => props?.lineHeight || 2};
`;

// export const BoldText = styled.div<{
//   size?: number;
//   lineHeight?: number;
//   color?: string;
// }>`
//   font-weight: bold;
//   font-size: ${(props) => (props.size ? props.size : 1)}em;
//   color: ${(props) => (props.color ? props.color : "#000000")};
//   line-height: ${(props) => props?.lineHeight || 2};
// `;

export const LightText = styled.div<{
  size?: number;
  lineHeight?: number;
}>`
  font-size: ${(props) => (props.size ? props.size : 1)}em;
  line-height: ${(props) => props?.lineHeight || 2};
  color: var(--juleb-color-medium-tint);
`;
