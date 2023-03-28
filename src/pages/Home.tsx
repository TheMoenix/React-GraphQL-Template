import { Alert, Card, Layout, Spin, Table, Tag, Tooltip } from "antd";
import { Typography } from "antd";
import React from "react";
import { useGetQuery } from "../graphql/generated/hooks";

const { Title } = Typography;

type Props = {};

export const Home: React.FC<Props> = (props: Props) => {
  const { data, loading, error } = useGetQuery();
  console.log(data);

  return (
    <>
      {!error && !loading && data && <Title level={1}>{data.get}</Title>}
      {!loading && error && (
        <Alert
          style={{ position: "relative" }}
          closable
          message={error.message}
          type="error"
        ></Alert>
      )}
    </>
  );
};
