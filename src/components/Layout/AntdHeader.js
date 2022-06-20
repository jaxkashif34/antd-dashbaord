import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  openDrawer,
  handleFixedNavbar,
  handleSideNavColor,
  handleSidenavType,
  handleSidebar,
} from "Redux/features/MainSlice";
import {
  Row,
  Col,
  Breadcrumb,
  Badge,
  Dropdown,
  List,
  Avatar,
  Button,
  Drawer,
  Typography,
  Switch,
  Input,
} from "antd";
import {
  data,
  bell,
  logsetting,
  toggler,
  profileSVg,
  setting,
} from "utils/HeaderData";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Iconify } from "utils/Iconify";
const ButtonContainer = styled.div`
  .ant-btn-primary {
    background-color: #1890ff;
  }
  .ant-btn-success {
    background-color: #52c41a;
  }
  .ant-btn-yellow {
    background-color: #fadb14;
  }
  .ant-btn-black {
    background-color: #262626;
    color: #fff;
    border: 0px;
    border-radius: 5px;
  }
  .ant-switch-active {
    background-color: #1890ff;
  }
`;
const { Title, Text } = Typography;
const menu = (
  <List
    min-width="100%"
    className="header-notifications-dropdown"
    style={{
      backgroundColor: "#fff",
      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
      borderRadius: "1rem",
    }}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item style={{ borderRadius: "1rem" }}>
        <List.Item.Meta
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "1rem",
          }}
          avatar={<Avatar shape="square" src={item.avatar} />}
          title={item.title}
          description={item.description}
        />
      </List.Item>
    )}
  />
);
const buttonList = [
  { color: "#1890ff", type: "primary" },
  { color: "#52c41a", type: "success" },
  { color: "#d9363e", type: "danger" },
  { color: "#fadb14", type: "yellow" },
  { color: "#111", type: "black" },
];
export default function AntdHeader({ name }) {
  const { sideNavType, visible, placement } = useSelector(
    (state) => state.mainSlice
  );
  const dispatch = useDispatch();

  return (
    <>
      <div className="setting-drwer" onClick={() => dispatch(openDrawer(true))}>
        {setting}
      </div>
      <Row gutter={[24, 0]}>
        <Col span={24} md={6}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <NavLink to="/">Pages</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item style={{ textTransform: "capitalize" }}>
              {name.replace("/", "")}
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="ant-page-header-heading">
            <span
              className="ant-page-header-heading-title"
              style={{ textTransform: "capitalize" }}
            >
              {name.replace("/", "")}
            </span>
          </div>
        </Col>
        <Col span={24} md={18} className="header-control">
          <Badge size="small" count={4}>
            <Dropdown
              overlay={menu}
              trigger={["click"]}
              arrow
              overlayStyle={{ width: "20%" }}
            >
              <a href="#pablo" className="ant-dropdown-link">
                {bell}
              </a>
            </Dropdown>
          </Badge>
          <Button type="link" onClick={() => dispatch(openDrawer(true))}>
            {logsetting}
          </Button>
          <Button
            type="link"
            className="sidebar-toggler"
            onClick={() => dispatch(handleSidebar())}
          >
            {toggler}
          </Button>
          <Drawer
            className="settings-drawer"
            mask={true}
            width={360}
            placement={placement}
            visible={visible}
            closable={false}
            onClose={() => dispatch(openDrawer(false))}
          >
            <div layout="vertical">
              <div className="header-top">
                <Title level={4}>
                  Configure
                  <Text className="subtitle">See our Dashboard Option</Text>
                </Title>
              </div>
              <div className="sidebar-color">
                <Title level={5}>Sidebar Color</Title>
                <div className="theme-color mb-2">
                  <ButtonContainer>
                    {buttonList.map(({ color, type }, index) => {
                      return (
                        <Button
                          type={type}
                          key={index}
                          onClick={() => dispatch(handleSideNavColor(color))}
                        >
                          1
                        </Button>
                      );
                    })}
                  </ButtonContainer>
                </div>
                <div className="sidebarnav-color mb-2">
                  <Title level={5}>Sidenav Type</Title>
                  <Text>Chose between 2 different Sidenav Types</Text>
                  <ButtonContainer className="trans">
                    <Button
                      type={sideNavType === "transparent" ? "primary" : "white"}
                      onClick={() => dispatch(handleSidenavType("transparent"))}
                    >
                      TRANSPARENT
                    </Button>
                    <Button
                      type={sideNavType === "white" ? "primary" : "white"}
                      onClick={() => dispatch(handleSidenavType("white"))}
                    >
                      WHITE
                    </Button>
                  </ButtonContainer>
                </div>
                <div className="fixed-nav mb-2">
                  <Title level={5}>Navbar Fixed</Title>
                  <Switch onChange={(e) => dispatch(handleFixedNavbar(e))} />
                </div>
                <div className="ant-docment">
                  <ButtonContainer>
                    <Button type="black" size="large">
                      FREE DOWNLOAD
                    </Button>
                    <Button size="large">VIEW DOCUMENTATION</Button>
                  </ButtonContainer>
                </div>
                <div className="viewstar">
                  <a href="#pablo">{<Iconify icon="akar-icons:star" />} Star</a>
                  <a href="#pablo">190</a>
                </div>
                <div className="ant-thank">
                  <Title level={5}>Thank you for sharing!</Title>
                  <ButtonContainer>
                    <Button type="black">
                      {<Iconify icon="akar-icons:twitter-fill" />} TWEET
                    </Button>
                    <Button type="black">
                      {<Iconify icon="eva:share-fill" />} SHARE
                    </Button>
                  </ButtonContainer>
                </div>
              </div>
            </div>
          </Drawer>
          <Link to="/sign-in" className="btn-sign-in">
            {profileSVg}
            <span>Sign in</span>
          </Link>
          <Input
            className="header-search"
            placeholder="Type here..."
            prefix={<Iconify icon="akar-icons:search" />}
          />
        </Col>
      </Row>
    </>
  );
}
