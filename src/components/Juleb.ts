import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input } from "antd";
import { Header } from "antd/lib/layout/layout";
import styled from "styled-components";
const { Search } = Input;

export const JulebHeader = styled(Header)`
  background: var(--juleb-color-primary);
  padding: 0;
  flex: 0.1;
`;

export const JulebSearch = styled(Search)`
  width: 100%;
  border-radius: 30px;
`;

export const JulebAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;

export const JulebAwesomeButton = styled(FontAwesomeIcon)`
  cursor: pointer;
  margin-right: 5px;
  &:hover {
    color: var(--juleb-color-primary);
  }
`;

export const SiderButton = styled(Button)<{
  clicked?: boolean;
}>`
  ${(props) =>
    props.clicked
      ? `
      margin: auto;
      margin-top: 20px;
      display: flex;
      width: 80%;
      background: #f18021;
      color: #fff;
      align-items: center;
      font-weight: bold;
      height: 40px;
      box-shadow: 0px 3px 26px #f1802161;
      border-radius: 5px;
      &:focus {
        margin: auto;
        margin-top: 20px;
        display: flex;
        width: 80%;
        background: #f18021;
        color: #fff;
        align-items: center;
        font-weight: bold;
        height: 40px;
        box-shadow: 0px 3px 26px #f1802161;
        border-radius: 5px;
      }`
      : `
      all: unset;
      cursor: pointer;
      margin: auto;
      margin-top: 20px;
      display: flex;
      width: 80%;
      align-items: center;
      font-weight: bold;
      height: 40px;
      `}
`;
