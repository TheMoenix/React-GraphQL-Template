import { Alert, Button } from "antd";
import { Typography } from "antd";
import React from "react";
import { useGetQuery } from "../graphql/generated/hooks";
import axios from "axios";
import { endpoint } from "../graphql";

const { Title } = Typography;

type Props = {};

export const LoginPage: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Button
        onClick={async () => {
          await axios.post(`${endpoint}/login`, {
            email: "3@test.com",
            password: "test",
          });
        }}
      >
        login
      </Button>
    </>
  );
};
