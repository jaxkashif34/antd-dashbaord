import React from "react";
import { Layout, Menu, Button } from "antd";
import { items } from "utils/SignInUpData";
const { Header } = Layout;

const AntdHeader = ({ btn }) => {
  return (
    <Header>
      <div className="header-col header-brand">
        <h5>Ant DashBoard</h5>
      </div>
      <div className="header-col header-nav">
        <Menu
          defaultSelectedKeys={["1"]}
          mode="horizontal"
          items={items}
          style={{
            display: "flex",
            width: "40%",
            justifyContent: "space-between",
            margin: "0 auto",
            alignItems: "center",
          }}
        />
      </div>
      <div className="header-col header-btn">
        <Button type={btn}>Download</Button>
      </div>
    </Header>
  );
};
export default AntdHeader;
