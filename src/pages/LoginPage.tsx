import {
  Alert,
  Button,
  Card,
  Checkbox,
  Col,
  Form,
  Input,
  Row,
  Spin,
} from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { endpoint } from "../graphql";
import { FlexCenterColumnAndRow } from "../components/Layout";
import { useSearchParams } from "react-router-dom";

type Props = {};

export const LoginPage: React.FC<Props> = (props: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [logedin, setLogedin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const session = localStorage.getItem("x-session");
    if (session) {
      setLogedin(true);
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (logedin) {
      window.location.replace(searchParams.get("redirect") || "/");
    }
  }, [logedin]);

  const login = async (values: any) => {
    try {
      const data = (
        await axios.post(`${endpoint}/login`, {
          ...values,
        })
      ).data;
      if (data._id) {
        await localStorage.setItem("x-session", data._id);
      }
      setLogedin(true);
    } catch (error) {
      console.log(error);
    }
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return loading ? (
    <Spin></Spin>
  ) : (
    <Row align="middle" justify="start" style={{ minHeight: "800px" }}>
      <Col offset={4} span={16}>
        <FlexCenterColumnAndRow>
          <Card>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={login}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                // wrapperCol={{ offset: 8, span: 8 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
                <Button type="primary" htmlType="submit" block={true}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </FlexCenterColumnAndRow>
      </Col>
    </Row>
  );
};
