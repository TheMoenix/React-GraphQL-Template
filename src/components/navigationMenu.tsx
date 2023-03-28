import styled from "styled-components";

export const NavigationIcon = styled.span<{
  base64?: string;
}>`
  display: inline-block;
  cursor: pointer;
  background-size: contain;
  background-repeat: no-repeat;
  width: 5rem;
  height: 5rem;
  background-image: url("data:image/png;base64,${(props) =>
    props?.base64 || ""}");
`;
