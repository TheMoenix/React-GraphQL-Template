import { Alert, Button } from "antd";
import { Typography } from "antd";
import React from "react";
import { useAppContext } from "../context/app/context";

const { Title } = Typography;

type Props = {};

export const Home: React.FC<Props> = (props: Props) => {
  const appContext = useAppContext();
  console.log(appContext.state.sessionInfo);

  return (
    <>
      <Title>Hello, {appContext.state.sessionInfo?.user.name}</Title>
      <Button>Hi</Button>
    </>
  );
};
