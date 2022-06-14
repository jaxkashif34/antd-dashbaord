import React, { Component } from "react";
import { Layout, Button, Typography, Card, Form, Input, Checkbox } from "antd";
import { Link } from "react-router-dom";
import logo1 from "../assets/images/logos-facebook.svg";
import logo2 from "../assets/images/logo-apple.svg";
import logo3 from "../assets/images/Google__G__Logo.svg.png";
import { Header, Footer } from "components/Layout";
const { Content } = Layout;
const { Title } = Typography;
export default class SignUp extends Component {
  render() {
    const onFinish = (values) => {
      console.log("values : ", values);
    };
    const onFinishFailed = (errInfo) => {
      console.log("Error : ", errInfo);
    };
    return (
      <>
        <div className="layout-default ant-layout layout-sign-up">
          {/* header */}
          <Header />
          <Content className="p-0">
            <div className="sign-up-header">
              <div className="content">
                <Title>Sign Up</Title>
                <p className="text-lg">
                  Use these awesome forms to login or create new account in your
                  project for free.
                </p>
              </div>
            </div>

            <Card
              className="card-signup header-solid h-full ant-card pt-0"
              title={<h5>Register with</h5>}
              bordered={false}
            >
              <div className="sign-up-gateways">
                <Button type={false}>
                  <img src={logo1} alt="" />
                </Button>
                <Button type={false}>
                  <img src={logo2} alt="" />
                </Button>
                <Button type={false}>
                  <img src={logo3} alt="" />
                </Button>
              </div>
              <p className="text-center my-25 font-semibold text-muted">Or</p>
              <Form
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="row-col"
                name="basic"
              >
                <Form.Item
                  name="Name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your name!",
                    },
                  ]}
                >
                  <Input placeholder="Name" />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Email",
                    },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password",
                    },
                  ]}
                >
                  <Input placeholder="Password" />
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>
                    I agree the{" "}
                    <a href="#pablo" className="font-bold text-dark">
                      Terms & Conditions
                    </a>
                  </Checkbox>
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    style={{ width: "100%" }}
                    htmlType="submit"
                  >
                    SIGN UP
                  </Button>
                </Form.Item>
              </Form>
              <p className="font-semibold text-muted text-center">
                Already have an account?{" "}
                <Link to="/sign-in" className="font-bold text-dark">
                  Sign In
                </Link>
              </p>
            </Card>
          </Content>
          {/* footer */}
          <Footer />
        </div>
      </>
    );
  }
}
