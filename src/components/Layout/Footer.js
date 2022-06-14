import React from "react";
import { Layout, Menu } from "antd";
import { socialMenu, footerMenu } from "utils/SignInUpData";
const { Footer } = Layout;

const AntdFooter = () => {
  return (
    <Footer>
      <Menu mode="horizontal" items={footerMenu} />
      <Menu mode="horizontal" className="menu-nav-social" items={socialMenu} />
      <p className="copyright">
        Copyright © 2022 antd by <a href="#pablo">Kashif Ali</a>
      </p>
    </Footer>
  );
};
export default AntdFooter;
