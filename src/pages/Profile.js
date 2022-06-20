import React from "react";
import { Iconify } from "utils/Iconify";
import BgProfile from "assets/images/bg-profile.jpg";
import profilavatar from "assets/images/face-1.jpg";
import { project, data } from "utils/ProfileData";
import {
  Row,
  Col,
  Card,
  Button,
  List,
  Descriptions,
  Avatar,
  Radio,
  Switch,
  Upload,
  message,
} from "antd";
export default function Profile() {
  return (
    <>
      <div
        className="profile-nav-bg"
        style={{ backgroundImage: `url(${BgProfile})` }}
      />
      <Card
        className="card-profile-head"
        bodyStyle={{ display: "none" }}
        title={
          <Row justify="space-between" align="middle" gutter={[24, 0]}>
            <Col span={24} md={12} className="col-info">
              <Avatar.Group>
                <Avatar size={74} shape="square" src={profilavatar} />
                <div className="avatar-info">
                  <h4 className="font-semibold m-0">Sarah Jacob</h4>
                  <p>CEO / Co-Founder</p>
                </div>
              </Avatar.Group>
            </Col>
            <Col
              span={24}
              md={12}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Radio.Group defaultValue="a">
                <Radio.Button value="a">OVERVIEW</Radio.Button>
                <Radio.Button value="a">TEAMS</Radio.Button>
                <Radio.Button value="a">PROJECTS</Radio.Button>
              </Radio.Group>
            </Col>
          </Row>
        }
      />
      <Row gutter={[24, 0]}>
        <Col span={24} md={8} className="mb-24">
          <Card
            bordered={false}
            className="header-solid h-full"
            title={<h6 className="font-semibold m-0">Platform Settings</h6>}
          >
            <ul className="list settings-list">
              <li>
                <h6 className="list-header text-sm text-muted">ACCOUNT</h6>
              </li>
              <li>
                <Switch defaultChecked />
                <span>Email me when someone follows me</span>
              </li>
              <li>
                <Switch />
                <span>Email me when someone answers me</span>
              </li>
              <li>
                <Switch defaultChecked />
                <span>Email me when someone mentions me</span>
              </li>
              <li>
                <h6 className="list-header text-sm text-muted m-0">
                  APPLICATION
                </h6>
              </li>
              <li>
                <Switch defaultChecked />
                <span>New launches and projects</span>
              </li>
              <li>
                <Switch defaultChecked />
                <span>Monthly product updates</span>
              </li>
              <li>
                <Switch defaultChecked />
                <span>Subscribe to newsletter</span>
              </li>
            </ul>
          </Card>
        </Col>
        <Col span={24} md={8} className="mb-24">
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Profile Information</h6>}
            className="header-solid h-full card-profile-information"
            extra={
              <Button type="link">
                {<Iconify icon="akar-icons:pencil" />}
              </Button>
            }
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
            <p className="text-dark">
              Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer
              is no. If two equally difficult paths, choose the one more painful
              in the short term (pain avoidance is creating an illusion of
              equality).
            </p>
            <hr className="my-25" />
            <Descriptions title="Oliver Liam">
              <Descriptions.Item label="Full Name" span={3}>
                Sarah Emily Jacob
              </Descriptions.Item>
              <Descriptions.Item label="Mobile" span={3}>
                (44) 123 1234 123
              </Descriptions.Item>
              <Descriptions.Item label="Email" span={3}>
                sarahjacob@mail.com
              </Descriptions.Item>
              <Descriptions.Item label="Location" span={3}>
                USA
              </Descriptions.Item>
              <Descriptions.Item label="Social" span={3}>
                <a href="#pablo" className="mx-5 px-5">
                  {<Iconify icon="akar-icons:twitter-fill" />}
                </a>
                <a href="#pablo" className="mx-5 px-5">
                  {
                    <Iconify
                      icon="akar-icons:facebook-fill"
                      style={{ color: "#344e86" }}
                    />
                  }
                </a>
                <a href="#pablo" className="mx-5 px-5">
                  {
                    <Iconify
                      icon="akar-icons:instagram-fill"
                      style={{ color: "#e1306c" }}
                    />
                  }
                </a>
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
        <Col span={24} md={8} className="mb-24">
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Conversations</h6>}
            className="header-solid h-full"
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
            <List
              itemLayout="horizontal"
              dataSource={data}
              split={false}
              className="conversations-list"
              renderItem={(item) => (
                <List.Item actions={[<Button type="link">REPLY</Button>]}>
                  <List.Item.Meta
                    avatar={
                      <Avatar shape="square" size={48} src={item.avatar} />
                    }
                    title={item.title}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}
