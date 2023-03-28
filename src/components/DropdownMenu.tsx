import { Dropdown, DropDownProps, Input, Menu } from "antd";
import React from "react";

type Props = {
  placeholder: string;
  placement?: DropDownProps["placement"];
  menuItems: string[];
};

export const DropdownMenu: React.FC<Props> = (props: Props) => {
  const menu = () => (
    <Menu>
      {props.menuItems.map((item: string, index: number) => (
        <Menu.Item key={index}>{item}</Menu.Item>
      ))}
    </Menu>
  );
  return (
    <Dropdown trigger={["click"]} overlay={menu} placement={props.placement}>
      <Input readOnly placeholder={props.placeholder}></Input>
    </Dropdown>
  );
};
